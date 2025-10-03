import { Pool } from 'pg';
import { env } from './env';
import fs from 'fs';
import path from 'path';

// Evaluate flags lazily in case env loading order changes or user modifies at runtime in tests.
function isAllowSelfSigned() {
  return process.env.DB_ALLOW_SELF_SIGNED === 'true';
}
function isNoDbMode() {
  return process.env.NO_DB_MODE === 'true';
}
const debugSsl = process.env.DB_DEBUG_SSL === 'true';

// Optional: Provide a CA cert so we can keep rejectUnauthorized=true with a self-signed / private CA.
// Mechanisms (priority order):
//   1) DB_SSL_CA_PATH=relative/or/absolute/path/to/ca.crt
//   2) DB_SSL_CA_BASE64=base64EncodedPem
//   3) Auto-detect fallback: backend/certs/aiven-ca.crt (if present) with no env vars set
// If PATH or BASE64 provided they take precedence over the auto-detect file.
let caCert: string | undefined;
try {
  const caPath = process.env.DB_SSL_CA_PATH;
  if (caPath) {
    const resolved = path.isAbsolute(caPath) ? caPath : path.resolve(process.cwd(), caPath);
    caCert = fs.readFileSync(resolved, 'utf8');
  } else if (process.env.DB_SSL_CA_BASE64) {
    caCert = Buffer.from(process.env.DB_SSL_CA_BASE64, 'base64').toString('utf8');
  } else {
    // Auto-detect common default path if present
    const autoPath = path.resolve(process.cwd(), 'backend/certs/aiven-ca.crt');
    if (fs.existsSync(autoPath)) {
      caCert = fs.readFileSync(autoPath, 'utf8');
      if (debugSsl) console.log('[DB][SSL] Auto-detected CA at backend/certs/aiven-ca.crt');
    }
  }
} catch (e) {
  // Log lazily on first pool build to avoid import side effects (logger imports pino etc.)
  // eslint-disable-next-line no-console
  console.error('Failed to load DB CA certificate:', e);
}

let _pool: Pool | null = null;

function buildPool(): Pool {
  // Set NODE_TLS_REJECT_UNAUTHORIZED if DB_ALLOW_SELF_SIGNED is enabled (DEV ONLY)
  if (isAllowSelfSigned() && !caCert) {
    if (!process.env.NODE_TLS_REJECT_UNAUTHORIZED) {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
      if (debugSsl) console.warn('[DB][SSL] Set NODE_TLS_REJECT_UNAUTHORIZED=0 due to DB_ALLOW_SELF_SIGNED=true (DEV ONLY)');
    }
  }
  
  const sslConfig = (() => {
    const sslRequired = env.DATABASE_URL?.includes('sslmode=require') || process.env.FORCE_DB_SSL === 'true';
    if (!sslRequired) return undefined;
    if (isAllowSelfSigned() && !caCert) {
      if (debugSsl) console.warn('[DB][SSL] Using rejectUnauthorized=false due to DB_ALLOW_SELF_SIGNED=true (DEV ONLY)');
      // For PostgreSQL with self-signed certs, we need to be more explicit
      return { 
        rejectUnauthorized: false,
        checkServerIdentity: () => undefined // Skip server identity check
      } as const;
    }
    if (caCert) {
      if (debugSsl) console.log('[DB][SSL] Loaded custom CA certificate for PostgreSQL connection.');
      return { rejectUnauthorized: true, ca: caCert } as const;
    }
    if (debugSsl) console.log('[DB][SSL] Enforcing SSL with default system CAs (no custom CA provided).');
    return { rejectUnauthorized: true } as const; // Rely on system store / standard CAs
  })();
  if (debugSsl) {
    console.log('[DB][SSL] Final ssl config:', sslConfig);
  }
  
  // Remove sslmode from connection string if present, as we're setting ssl config explicitly
  let dbUrl = env.DATABASE_URL;
  if (dbUrl.includes('sslmode=')) {
    dbUrl = dbUrl.replace(/[?&]sslmode=[^&]*/g, '');
  }
  
  return new Pool({
    connectionString: dbUrl,
    max: 10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 30_000, // Increased from 10s to 30s
    statement_timeout: 60_000, // Increased from 30s to 60s
    ssl: sslConfig
  });
}

export const pool: Pool = new Proxy({} as Pool, {
  get(_target, prop) {
    if (isNoDbMode()) {
      throw new Error('NO_DB_MODE enabled: attempted DB access before disabling it.');
    }
    if (!_pool) {
      _pool = buildPool();
    }
    // @ts-ignore
    return _pool[prop];
  }
});

export async function withTransaction<T>(fn: (client: any) => Promise<T>): Promise<T> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const result = await fn(client);
    await client.query('COMMIT');
    return result;
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}

export default pool;
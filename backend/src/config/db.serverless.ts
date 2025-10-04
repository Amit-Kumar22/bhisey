import { Pool, PoolConfig } from 'pg';
import { env } from './env';

/**
 * Database configuration optimized for Vercel serverless environment
 * Uses connection pooling with constraints suitable for serverless functions
 */

let cachedPool: Pool | null = null;

function createPool(): Pool {
  // Remove sslmode from connection string if present, as we're setting ssl config explicitly
  let dbUrl = env.DATABASE_URL;
  if (dbUrl.includes('sslmode=')) {
    dbUrl = dbUrl.replace(/[?&]sslmode=[^&]*/g, '');
  }

  const sslConfig = (() => {
    const sslRequired = env.DATABASE_URL?.includes('sslmode=require') || process.env.FORCE_DB_SSL === 'true';
    if (!sslRequired) return undefined;
    
    // For production/serverless, always use SSL with system CAs
    return { 
      rejectUnauthorized: true,
      // For development with self-signed certs, set DB_ALLOW_SELF_SIGNED=true
      ...(process.env.DB_ALLOW_SELF_SIGNED === 'true' ? { rejectUnauthorized: false } : {})
    };
  })();

  const config: PoolConfig = {
    connectionString: dbUrl,
    // Serverless-optimized settings
    max: 1, // Single connection per function instance
    min: 0,
    idleTimeoutMillis: 10000, // Close idle connections quickly
    connectionTimeoutMillis: 10000,
    statement_timeout: 30000,
    ssl: sslConfig
  };

  return new Pool(config);
}

/**
 * Get or create a cached database pool
 * Reuses the same pool across function invocations when possible
 */
export function getPool(): Pool {
  if (!cachedPool) {
    cachedPool = createPool();
  }
  return cachedPool;
}

// Export a proxy pool that auto-creates on access
export const pool: Pool = new Proxy({} as Pool, {
  get(_target, prop) {
    const actualPool = getPool();
    // @ts-ignore
    return actualPool[prop];
  }
});

/**
 * Transaction helper for serverless functions
 */
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

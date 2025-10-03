import { Pool } from 'pg';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

function loadCa(): string | undefined {
  try {
    if (process.env.DB_SSL_CA_PATH) {
      const p = path.isAbsolute(process.env.DB_SSL_CA_PATH) ? process.env.DB_SSL_CA_PATH : path.resolve(process.cwd(), process.env.DB_SSL_CA_PATH);
      return fs.readFileSync(p, 'utf8');
    }
    if (process.env.DB_SSL_CA_BASE64) {
      return Buffer.from(process.env.DB_SSL_CA_BASE64, 'base64').toString('utf8');
    }
  } catch (e) {
    console.error('Failed to load CA in test script:', e);
  }
  return undefined;
}

(async () => {
  const ca = loadCa();
  const allowSelfSigned = process.env.DB_ALLOW_SELF_SIGNED === 'true';
  const conn = process.env.DATABASE_URL;
  if (!conn) {
    console.error('No DATABASE_URL set');
    process.exit(1);
  }
  const sslRequired = conn.includes('sslmode=require') || process.env.FORCE_DB_SSL === 'true';
  const ssl = sslRequired ? (ca ? { rejectUnauthorized: true, ca } : allowSelfSigned ? { rejectUnauthorized: false, checkServerIdentity: () => undefined } : { rejectUnauthorized: true }) : undefined;
  console.log('--- DB Connectivity Test ---');
  console.log('DATABASE_URL host:', conn.replace(/:[^:@/]*@/, ':****@'));
  console.log('sslRequired:', sslRequired);
  console.log('allowSelfSigned:', allowSelfSigned);
  console.log('CA present:', !!ca);
  console.log('Effective ssl object:', ssl);

  const pool = new Pool({ connectionString: conn, ssl });
  try {
    const r = await pool.query('SELECT version();');
    console.log('Success! PostgreSQL version:', r.rows[0].version);
    process.exit(0);
  } catch (e: any) {
    console.error('Connection FAILED');
    console.error('Error code:', e.code);
    console.error('Error message:', e.message);
    if (e.stack) console.error(e.stack);
    process.exit(2);
  } finally {
    pool.end().catch(() => {});
  }
})();

import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';

// Lightweight bootstrap: create minimal users table if absent to avoid runtime crashes
// when Prisma-based code paths run but raw SQL bootstrap wasn't executed.
async function ensureUsersTable() {
  try {
    if (!process.env.DATABASE_URL) return; // cannot proceed
    const allowSelfSigned = process.env.DB_ALLOW_SELF_SIGNED === 'true';
    const ssl = process.env.DATABASE_URL?.includes('sslmode=require')
      ? { rejectUnauthorized: !allowSelfSigned }
      : undefined;
    const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl });
    // Check existence
    const chk = await pool.query(`SELECT to_regclass('public.users') as tbl`);
    if (!chk.rows[0]?.tbl) {
      // Create enum if not exists
      await pool.query(`DO $$ BEGIN
        CREATE TYPE user_roles AS ENUM ('ADMIN','EDITOR','REVIEWER','VIEWER');
      EXCEPTION WHEN duplicate_object THEN NULL; END $$;`);
      await pool.query(`CREATE TABLE users (
        id text PRIMARY KEY,
        email text UNIQUE NOT NULL,
        name text NOT NULL,
        "passwordHash" text NOT NULL,
        roles user_roles[] NOT NULL,
        active boolean DEFAULT true,
        "tokenVersion" integer DEFAULT 0,
        "lastLoginAt" timestamptz,
        "createdAt" timestamptz DEFAULT now(),
        "updatedAt" timestamptz DEFAULT now()
      );`);
      await pool.query(`CREATE INDEX IF NOT EXISTS idx_users_active ON users(active);`);
      // Seed an initial admin if none present
      const bcrypt = await import('bcryptjs');
      const hash = await bcrypt.hash('ChangeMe123!', 12);
      await pool.query(
        `INSERT INTO users (id, email, name, "passwordHash", roles, active) VALUES ($1,$2,$3,$4,$5,$6)`,
        ['usr_bootstrap', 'admin@bhesi.com', 'Admin User', hash, ['ADMIN'], true]
      );
      console.log('[bootstrap] Created users table & seeded admin@bhesi.com (password: ChangeMe123!)');
    }
    await pool.end();
  } catch (e) {
    // Silent fail to not block app; developers will see missing table error otherwise.
    console.warn('[bootstrap] users table ensure failed:', (e as Error).message);
  }
}

// Fire & forget bootstrap (do not await to avoid delaying cold start significantly)
void ensureUsersTable();

// Ensure a single PrismaClient instance across hot reloads in dev.
// (globalThis as any) is used to attach the instance.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error']
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
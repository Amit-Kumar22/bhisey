
import 'dotenv/config';
import { pool } from '../backend/src/config/db';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

interface Args { email?: string; password?: string; reset?: boolean; }
function parseArgs(): Args {
  const a: Args = {};
  const raw = process.argv.slice(2);
  raw.forEach((arg,i,arr) => {
    if(arg === '--email') a.email = arr[i+1];
    if(arg === '--password') a.password = arr[i+1];
    if(arg === '--reset') a.reset = true;
  });
  return a;
}

async function tableExists(table: string): Promise<boolean> {
  const { rows } = await pool.query(
    `SELECT to_regclass($1) as exists`,
    [table]
  );
  return !!rows[0]?.exists;
}

async function ensureEnum() {
  await pool.query(`DO $$ BEGIN
    CREATE TYPE user_roles AS ENUM ('ADMIN','EDITOR','REVIEWER','VIEWER');
  EXCEPTION WHEN duplicate_object THEN NULL; END $$;`);
}

async function ensureTable() {
  await ensureEnum();
  const exists = await tableExists('public.users');
  if (exists) {
    return false;
  }
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
  console.log('Created table users.');
  return true;
}

function generateId(): string {
  // simple cuid-ish fallback (not strict cuid): base36 timestamp + random
  return 'usr_' + Date.now().toString(36) + '_' + crypto.randomBytes(6).toString('base64url');
}

async function seedOrUpdateUser(email: string, password: string, reset: boolean) {
  const { rows } = await pool.query('SELECT id FROM users WHERE email = $1 LIMIT 1', [email]);
  if (!rows.length) {
    const hash = await bcrypt.hash(password, 12);
    await pool.query(
      'INSERT INTO users (id, email, name, "passwordHash", roles, active) VALUES ($1,$2,$3,$4,$5,$6)',
      [generateId(), email, 'Admin User', hash, ['ADMIN'], true]
    );
    console.log('Seeded prisma user (ADMIN):', email);
    return;
  }
  if (reset) {
    const hash = await bcrypt.hash(password, 12);
    await pool.query('UPDATE users SET "passwordHash" = $1, "updatedAt" = now() WHERE email = $2', [hash, email]);
    console.log('Reset prisma user password:', email);
  } else {
    console.log('User exists (no changes):', email);
  }
}

async function main() {
  const { email, password, reset } = parseArgs();
  await ensureTable();
  if (email && password) {
    await seedOrUpdateUser(email, password, !!reset);
  } else {
    console.log('No --email / --password supplied; only ensured table exists.');
  }
  await pool.end();
}

main().catch(e => { console.error(e); process.exit(1); });

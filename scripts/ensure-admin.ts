#!/usr/bin/env ts-node
/**
 * Idempotent admin provisioner for the raw SQL `admins` table used by the Express backend.
 * Creates the admin if missing, or (optionally) resets the password if --reset supplied.
 *
 * Usage examples:
 *   npx ts-node scripts/ensure-admin.ts --email admin@bhesi.com --password StrongPass123!
 *   npx ts-node scripts/ensure-admin.ts --email admin@bhesi.com --password NewPass! --reset
 *
 * You can wire this into package.json, e.g.:
 *   "ensure:admin": "ts-node --transpile-only scripts/ensure-admin.ts --email admin@bhesi.com --password ChangeMe123!"
 */
import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { pool } from '../backend/src/config/db';

interface Args { email?: string; password?: string; reset?: boolean; }

function parseArgs(): Args {
  const args: Args = {};
  const raw = process.argv.slice(2);
  raw.forEach((a, i, arr) => {
    if (a === '--email') args.email = arr[i + 1];
    if (a === '--password') args.password = arr[i + 1];
    if (a === '--reset') args.reset = true;
  });
  return args;
}

async function ensureAdmin(email: string, password: string, reset: boolean) {
  const existing = await pool.query('SELECT id FROM admins WHERE email = $1 LIMIT 1', [email]);
  if (!existing.rowCount) {
    const hash = await bcrypt.hash(password, 12);
    await pool.query('INSERT INTO admins (email, password_hash) VALUES ($1,$2)', [email, hash]);
    console.log(`Created admin: ${email}`);
    return;
  }
  if (reset) {
    const hash = await bcrypt.hash(password, 12);
    await pool.query('UPDATE admins SET password_hash = $1 WHERE email = $2', [hash, email]);
    console.log(`Password reset for admin: ${email}`);
  } else {
    console.log(`Admin already exists (no changes): ${email}`);
  }
}

async function main() {
  const { email, password, reset } = parseArgs();
  if (!email || !password) {
    console.error('Missing required args: --email <email> --password <password> [--reset]');
    process.exit(1);
  }
  try {
    await ensureAdmin(email, password, !!reset);
  } finally {
    await pool.end();
  }
}

main().catch(e => { console.error(e); process.exit(1); });

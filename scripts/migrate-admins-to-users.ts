#!/usr/bin/env ts-node
/**
 * Migrate legacy 'admins' SQL table rows into Prisma 'users' table.
 * - Copies email & password_hash -> passwordHash
 * - Skips if email already exists in users.
 * - Assigns roles ['ADMIN'] and active=true.
 * Safe to run multiple times.
 */
import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaClient } from '@prisma/client';

async function main() {
  if (!process.env.DATABASE_URL) throw new Error('Missing DATABASE_URL');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const prisma = new PrismaClient();

  // Check admins table existence
  const reg = await pool.query(`SELECT to_regclass('public.admins') as t`);
  if (!reg.rows[0].t) {
    console.log('No legacy admins table found. Nothing to migrate.');
    await prisma.$disconnect();
    await pool.end();
    return;
  }

  const { rows } = await pool.query('SELECT id, email, password_hash, created_at FROM admins ORDER BY created_at ASC');
  if (!rows.length) {
    console.log('No rows in admins table.');
  } else {
    for (const row of rows) {
      const existing = await prisma.user.findUnique({ where: { email: row.email } });
      if (existing) {
        console.log(`Skipping existing user: ${row.email}`);
        continue;
      }
      await prisma.user.create({
        data: {
          email: row.email,
            name: row.email.split('@')[0] || 'Admin',
          passwordHash: row.password_hash,
          roles: ['ADMIN'],
          active: true,
          createdAt: row.created_at,
        }
      });
      console.log('Migrated admin -> user:', row.email);
    }
  }

  // Optional: suggest dropping admins table
  console.log('\nMigration complete. You may drop the legacy admins table after verifying:');
  console.log('  DROP TABLE admins;');

  await prisma.$disconnect();
  await pool.end();
}

main().catch(e => { console.error(e); process.exit(1); });

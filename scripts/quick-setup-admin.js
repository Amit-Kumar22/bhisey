// Quick setup script to create users table and admin
require('dotenv/config');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

// Parse DATABASE_URL and remove sslmode parameter
let connectionString = process.env.DATABASE_URL || '';
connectionString = connectionString.replace(/[?&]sslmode=require/, '');

const pool = new Pool({
  connectionString,
  ssl: process.env.DB_ALLOW_SELF_SIGNED === 'true' ? {
    rejectUnauthorized: false
  } : undefined
});

function generateId() {
  return 'usr_' + Date.now().toString(36) + '_' + crypto.randomBytes(6).toString('base64url');
}

async function setup() {
  try {
    console.log('🔄 Setting up database...');

    // Create enum type
    await pool.query(`
      DO $$ BEGIN
        CREATE TYPE user_roles AS ENUM ('ADMIN','EDITOR','REVIEWER','VIEWER');
      EXCEPTION WHEN duplicate_object THEN NULL;
      END $$;
    `);
    console.log('✅ Enum type created/verified');

    // Create users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
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
      );
    `);
    console.log('✅ Users table created/verified');

    // Create index
    await pool.query(`CREATE INDEX IF NOT EXISTS idx_users_active ON users(active);`);
    console.log('✅ Index created');

    // Check if admin exists
    const { rows } = await pool.query('SELECT id FROM users WHERE email = $1', ['admin@bhesi.com']);
    
    if (rows.length === 0) {
      // Create admin
      const hash = await bcrypt.hash('ChangeMe123!', 12);
      await pool.query(
        'INSERT INTO users (id, email, name, "passwordHash", roles, active) VALUES ($1,$2,$3,$4,$5,$6)',
        [generateId(), 'admin@bhesi.com', 'Admin User', hash, ['ADMIN'], true]
      );
      console.log('✅ Admin user created: admin@bhesi.com');
      console.log('📧 Email: admin@bhesi.com');
      console.log('🔑 Password: ChangeMe123!');
    } else {
      console.log('ℹ️  Admin user already exists: admin@bhesi.com');
    }

    console.log('\n✨ Setup complete! You can now login.');
  } catch (error) {
    console.error('❌ Error:', error.message);
    throw error;
  } finally {
    await pool.end();
  }
}

setup().catch(err => {
  console.error(err);
  process.exit(1);
});

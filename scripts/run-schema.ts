import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

async function runSchema() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DB_ALLOW_SELF_SIGNED === 'true' 
      ? { rejectUnauthorized: false, checkServerIdentity: () => undefined }
      : { rejectUnauthorized: true }
  });

  try {
    const schemaPath = path.resolve(process.cwd(), 'backend/schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    console.log('Running schema.sql...');
    await pool.query(schema);
    console.log('✅ Schema created successfully!');
    
    // Verify tables exist
    const result = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE'
      ORDER BY table_name;
    `);
    
    console.log('\n📊 Tables in database:');
    result.rows.forEach(row => console.log(`  - ${row.table_name}`));
    
  } catch (error) {
    console.error('❌ Error running schema:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

// Set NODE_TLS_REJECT_UNAUTHORIZED if DB_ALLOW_SELF_SIGNED is true
if (process.env.DB_ALLOW_SELF_SIGNED === 'true') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

runSchema();

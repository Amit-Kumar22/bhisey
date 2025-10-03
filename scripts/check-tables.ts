import { Pool } from 'pg';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

async function checkTables() {
  // Set NODE_TLS_REJECT_UNAUTHORIZED if DB_ALLOW_SELF_SIGNED is true
  if (process.env.DB_ALLOW_SELF_SIGNED === 'true') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DB_ALLOW_SELF_SIGNED === 'true' 
      ? { rejectUnauthorized: false, checkServerIdentity: () => undefined }
      : { rejectUnauthorized: true }
  });

  try {
    // Check tables
    const tables = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE'
      ORDER BY table_name;
    `);
    
    console.log('📊 Tables in database:');
    if (tables.rows.length === 0) {
      console.log('  (no tables found)');
    } else {
      tables.rows.forEach(row => console.log(`  - ${row.table_name}`));
    }
    
    // Check if blogs table exists and its structure
    if (tables.rows.some(r => r.table_name === 'blogs')) {
      console.log('\n📝 Structure of "blogs" table:');
      const columns = await pool.query(`
        SELECT column_name, data_type, is_nullable
        FROM information_schema.columns
        WHERE table_name = 'blogs'
        ORDER BY ordinal_position;
      `);
      columns.rows.forEach(col => {
        console.log(`  - ${col.column_name}: ${col.data_type} ${col.is_nullable === 'NO' ? '(NOT NULL)' : ''}`);
      });
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

checkTables();

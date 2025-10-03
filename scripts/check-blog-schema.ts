import { pool } from '../backend/src/config/db';

async function checkSchema() {
  try {
    const result = await pool.query(`
      SELECT column_name, data_type, is_nullable, column_default 
      FROM information_schema.columns 
      WHERE table_name = 'blog_posts' 
      ORDER BY ordinal_position
    `);
    
    console.log('blog_posts table schema:');
    console.log(JSON.stringify(result.rows, null, 2));
    
    // Check if table exists
    const tableCheck = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'blog_posts'
      );
    `);
    console.log('\nTable exists:', tableCheck.rows[0].exists);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await pool.end();
    process.exit();
  }
}

checkSchema();

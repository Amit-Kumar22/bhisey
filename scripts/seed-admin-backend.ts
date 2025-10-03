// Seed an admin user into the SQL (non-Prisma) admins table used by Express backend.
// Usage: npm run seed:admin -- --email admin@example.com --password ChangeMe123!
import 'dotenv/config';
import { pool } from '../backend/src/config/db';
import bcrypt from 'bcryptjs';

interface Args { email?: string; password?: string; }
function parseArgs(): Args {
  const args: Args = {};
  process.argv.slice(2).forEach((a,i,arr)=>{
    if(a==='--email') args.email = arr[i+1];
    if(a==='--password') args.password = arr[i+1];
  });
  return args;
}

async function main() {
  const { email, password } = parseArgs();
  if(!email || !password) {
    console.error('Missing required args: --email --password');
    process.exit(1);
  }
  const existing = await pool.query('SELECT 1 FROM admins WHERE email = $1 LIMIT 1',[email]);
  if(existing.rowCount){
    console.log('Admin already exists:', email);
    process.exit(0);
  }
  const hash = await bcrypt.hash(password,12);
  await pool.query('INSERT INTO admins (email, password_hash) VALUES ($1,$2)', [email, hash]);
  console.log('Created admin:', email);
  await pool.end();
}

main().catch(e=>{ console.error(e); process.exit(1); });

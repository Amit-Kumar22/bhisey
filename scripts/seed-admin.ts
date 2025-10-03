/*
  Seed an initial ADMIN user if none exists.
  Usage:
    npx ts-node scripts/seed-admin.ts \
      --email admin@bhesi.com \
      --name "Admin User" \
      --password password123
*/

import 'dotenv/config';
import { prisma } from '@/lib/db/prisma';
import bcrypt from 'bcryptjs';

interface Args { email?: string; name?: string; password?: string; }

function parseArgs(): Args {
  const args: Args = {};
  process.argv.slice(2).forEach((a, i, arr) => {
    if (a === '--email') args.email = arr[i+1];
    if (a === '--name') args.name = arr[i+1];
    if (a === '--password') args.password = arr[i+1];
  });
  return args;
}

async function main() {
  const { email, name, password } = parseArgs();
  if (!email || !name || !password) {
    console.error('Missing required args: --email, --name, --password');
    process.exit(1);
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log('User already exists:', email);
    process.exit(0);
  }

  const hash = await bcrypt.hash(password, 12);
  await prisma.user.create({
    data: {
      email,
      name,
      passwordHash: hash,
      roles: ['ADMIN'],
      active: true,
    }
  });
  console.log('Created ADMIN user:', email);
}

main().catch(e => { console.error(e); process.exit(1); }).finally(async () => { await prisma.$disconnect(); });

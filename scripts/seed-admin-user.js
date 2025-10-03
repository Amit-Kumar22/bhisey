const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@bhesi.com';
  const password = 'ChangeMe123!';
  const name = 'Admin User';

  // Check if admin already exists
  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    console.log('✅ Admin user already exists:', email);
    return;
  }

  // Hash the password
  const passwordHash = await bcrypt.hash(password, 12);

  // Create the admin user
  const user = await prisma.user.create({
    data: {
      email,
      name,
      passwordHash,
      roles: ['ADMIN'],
      active: true,
      tokenVersion: 0
    }
  });

  console.log('✅ Admin user created successfully!');
  console.log('   Email:', email);
  console.log('   Password:', password);
  console.log('   User ID:', user.id);
}

main()
  .catch((e) => {
    console.error('❌ Error creating admin user:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

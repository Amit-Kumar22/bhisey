// Simple script to create admin user using Prisma
require('dotenv/config');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createAdmin() {
  const email = process.argv[2] || 'admin@bhesi.com';
  const password = process.argv[3] || 'Admin@123';

  try {
    // Check if user exists
    const existing = await prisma.user.findUnique({
      where: { email }
    });

    if (existing) {
      console.log(`✅ Admin user already exists: ${email}`);
      
      // Update password
      const passwordHash = await bcrypt.hash(password, 12);
      await prisma.user.update({
        where: { email },
        data: { passwordHash }
      });
      console.log(`✅ Password updated for: ${email}`);
    } else {
      // Create new admin
      const passwordHash = await bcrypt.hash(password, 12);
      await prisma.user.create({
        data: {
          email,
          name: 'Admin',
          passwordHash,
          roles: ['ADMIN'],
          active: true
        }
      });
      console.log(`✅ Created new admin user: ${email}`);
    }

    console.log('\n🎉 Admin user is ready!');
    console.log(`   Email: ${email}`);
    console.log(`   Password: ${password}`);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();

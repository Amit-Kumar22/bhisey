const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function testLogin() {
  try {
    const users = await prisma.user.findMany({ 
      where: { roles: { has: 'ADMIN' } } 
    });
    
    console.log('\n=== Admin Users Found ===');
    console.log('Count:', users.length);
    
    for (const u of users) {
      console.log('\n--- User Details ---');
      console.log('Email:', u.email);
      console.log('Active:', u.active);
      console.log('Roles:', u.roles);
      console.log('Password Hash (first 30 chars):', u.passwordHash.substring(0, 30) + '...');
      
      // Test password
      const testPass = 'AdminPass123!';
      const isValid = await bcrypt.compare(testPass, u.passwordHash);
      console.log('Password "AdminPass123!" is valid:', isValid);
      
      // Try other common passwords if the first one fails
      if (!isValid) {
        const otherPasswords = ['admin123', 'Admin123', 'Admin@123', 'admin', 'password123'];
        for (const pwd of otherPasswords) {
          const valid = await bcrypt.compare(pwd, u.passwordHash);
          if (valid) {
            console.log(`✓ Found working password: "${pwd}"`);
            break;
          }
        }
      }
    }
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

testLogin();

#!/usr/bin/env node

/**
 * Vercel Build Script
 * Runs during deployment to set up database and build the application
 */

const { execSync } = require('child_process');

function runCommand(command, description) {
  console.log(`\n🔧 ${description}...`);
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ ${description} completed`);
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    process.exit(1);
  }
}

async function main() {
  console.log('🚀 Starting Vercel build process...\n');

  // Step 1: Generate Prisma Client
  runCommand('npx prisma generate', 'Generating Prisma Client');

  // Step 2: Run database migrations (production)
  if (process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production') {
    runCommand('npx prisma migrate deploy', 'Deploying database migrations');
  } else {
    console.log('⏭️  Skipping migrations in non-production environment');
  }

  // Step 3: Build Next.js application
  runCommand('next build', 'Building Next.js application');

  console.log('\n✅ Build completed successfully!');
}

main().catch((error) => {
  console.error('\n❌ Build failed:', error);
  process.exit(1);
});

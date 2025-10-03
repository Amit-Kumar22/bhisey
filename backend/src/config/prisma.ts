import { PrismaClient } from '@prisma/client';

// Separate Prisma instance for backend (Express) layer.
// Avoid sharing frontend global to keep clear boundary; reuse if desired later.
export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error']
});

export default prisma;

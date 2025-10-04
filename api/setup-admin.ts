/**
 * API endpoint to create admin user
 * Call this once after deployment to create your first admin
 * 
 * Usage: POST https://your-app.vercel.app/api/setup-admin
 * Body: { "email": "admin@bhesi.com", "password": "YourPassword123!", "secret": "your-setup-secret" }
 */

import { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password, secret } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Simple security check - you can add SETUP_SECRET to your env vars
    const setupSecret = process.env.SETUP_SECRET || 'bhesi-setup-2024';
    if (secret !== setupSecret) {
      return res.status(403).json({ error: 'Invalid setup secret' });
    }

    // Check if user exists
    const existing = await prisma.user.findUnique({
      where: { email }
    });

    if (existing) {
      // Update password
      const passwordHash = await bcrypt.hash(password, 12);
      await prisma.user.update({
        where: { email },
        data: { passwordHash }
      });

      return res.status(200).json({
        success: true,
        message: `Admin user password updated: ${email}`,
        action: 'updated'
      });
    } else {
      // Create new admin
      const passwordHash = await bcrypt.hash(password, 12);
      const user = await prisma.user.create({
        data: {
          email,
          name: 'Admin',
          passwordHash,
          roles: ['ADMIN'],
          active: true
        }
      });

      return res.status(201).json({
        success: true,
        message: `Admin user created: ${email}`,
        action: 'created',
        userId: user.id
      });
    }
  } catch (error: any) {
    console.error('Setup admin error:', error);
    return res.status(500).json({
      error: 'Failed to setup admin',
      details: error.message
    });
  } finally {
    await prisma.$disconnect();
  }
}

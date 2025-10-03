// Prisma-backed Admin model facade.
import bcrypt from 'bcryptjs';
import { prisma } from '../config/prisma';

export interface AdminLike {
  id: string;
  email: string;
  passwordHash: string;
  roles: string[];
  active: boolean;
  tokenVersion?: number;
  lastLoginAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export class AdminModel {
  static async findByEmail(email: string): Promise<AdminLike | null> {
    return prisma.user.findUnique({ where: { email } }) as any;
  }

  static async create(email: string, password: string): Promise<AdminLike> {
    const hash = await bcrypt.hash(password, 12);
    return prisma.user.create({
      data: {
        email,
        name: email.split('@')[0] || 'Admin',
        passwordHash: hash,
        roles: ['ADMIN'],
        active: true
      }
    }) as any;
  }

  static async verifyPassword(admin: AdminLike, password: string): Promise<boolean> {
    return bcrypt.compare(password, admin.passwordHash);
  }
}

export default AdminModel;
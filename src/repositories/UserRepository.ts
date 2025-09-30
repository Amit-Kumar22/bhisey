/**
 * User repository for authentication and user management
 */

// import { User, UserRole } from '@prisma/client';
import { BaseRepository } from './BaseRepository';

export interface CreateUserData {
  email: string;
  name: string;
  passwordHash: string;
  roles: string[];
  active?: boolean;
}

export interface UpdateUserData {
  email?: string;
  name?: string;
  passwordHash?: string;
  roles?: string[];
  active?: boolean;
  tokenVersion?: number;
  lastLoginAt?: Date;
}

export class UserRepository extends BaseRepository<any, CreateUserData, UpdateUserData> {
  protected modelName = 'user';

  async findByEmail(email: string): Promise<any | null> {
    return this.model.findUnique({
      where: { email },
    });
  }

  async findActiveByEmail(email: string): Promise<any | null> {
    return this.model.findUnique({
      where: { 
        email,
        active: true,
      },
    });
  }

  async updateLastLogin(id: string): Promise<any> {
    return this.model.update({
      where: { id },
      data: { lastLoginAt: new Date() },
    });
  }

  async incrementTokenVersion(id: string): Promise<any> {
    return this.model.update({
      where: { id },
      data: {
        tokenVersion: {
          increment: 1,
        },
      },
    });
  }

  async findByRole(role: string): Promise<any[]> {
    return this.model.findMany({
      where: {
        roles: {
          has: role,
        },
        active: true,
      },
    });
  }

  async deactivate(id: string): Promise<any> {
    return this.model.update({
      where: { id },
      data: { active: false },
    });
  }

  async activate(id: string): Promise<any> {
    return this.model.update({
      where: { id },
      data: { active: true },
    });
  }

  async isEmailTaken(email: string, excludeId?: string): Promise<boolean> {
    const where: any = { email };
    if (excludeId) {
      where.id = { not: excludeId };
    }

    const count = await this.model.count({ where });
    return count > 0;
  }
}

export const userRepository = new UserRepository();
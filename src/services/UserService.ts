/**
 * User service for authentication and user management
 */

import { hashPassword, comparePassword } from '@/lib/auth';
import { userRepository } from '@/repositories';
import { NotFoundError, ConflictError, ValidationError } from '@/lib/api';

export class UserService {
  /**
   * Authenticate user with email and password
   */
  async authenticateUser(email: string, password: string): Promise<any> {
    const user = await userRepository.findActiveByEmail(email);
    
    if (!user) {
      throw new NotFoundError('User not found or inactive');
    }
    
    const isPasswordValid = await comparePassword(password, user.passwordHash);
    if (!isPasswordValid) {
      throw new ValidationError('Invalid password');
    }
    
    // Update last login
    await userRepository.updateLastLogin(user.id);
    
    return user;
  }

  /**
   * Get user by ID
   */
  async getUserById(id: string): Promise<any> {
    const user = await userRepository.findById(id);
    
    if (!user) {
      throw new NotFoundError('User not found');
    }
    
    return user;
  }

  /**
   * Get user by email
   */
  async getUserByEmail(email: string): Promise<any> {
    const user = await userRepository.findByEmail(email);
    
    if (!user) {
      throw new NotFoundError('User not found');
    }
    
    return user;
  }

  /**
   * Create new user
   */
  async createUser(userData: {
    email: string;
    name: string;
    password: string;
    roles: string[];
  }): Promise<any> {
    // Check if email is already taken
    const existingUser = await userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new ConflictError('Email already in use');
    }

    // Hash password
    const passwordHash = await hashPassword(userData.password);

    // Create user
    const user = await userRepository.create({
      email: userData.email,
      name: userData.name,
      passwordHash,
      roles: userData.roles,
      active: true,
    });

    // Return user without password hash
    const { passwordHash: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  /**
   * Update user
   */
  async updateUser(id: string, updateData: {
    email?: string;
    name?: string;
    password?: string;
    roles?: string[];
    active?: boolean;
  }): Promise<any> {
    const existingUser = await userRepository.findById(id);
    if (!existingUser) {
      throw new NotFoundError('User not found');
    }

    // Check if email is being changed and if it's already taken
    if (updateData.email && updateData.email !== existingUser.email) {
      const emailTaken = await userRepository.isEmailTaken(updateData.email, id);
      if (emailTaken) {
        throw new ConflictError('Email already in use');
      }
    }

    // Hash password if provided
    const updatePayload: any = { ...updateData };
    if (updateData.password) {
      updatePayload.passwordHash = await hashPassword(updateData.password);
      delete updatePayload.password;
    }

    const user = await userRepository.update(id, updatePayload);

    // Return user without password hash
    const { passwordHash: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  /**
   * Deactivate user (soft delete)
   */
  async deactivateUser(id: string): Promise<any> {
    const user = await userRepository.deactivate(id);
    
    // Increment token version to invalidate all tokens
    await userRepository.incrementTokenVersion(id);
    
    const { passwordHash: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  /**
   * Get all users with pagination
   */
  async getUsers(options: {
    page: number;
    pageSize: number;
    role?: string;
    active?: boolean;
  }): Promise<{ users: any[]; total: number }> {
    const { page, pageSize, role, active } = options;
    
    const where: any = {};
    if (role) {
      where.roles = { has: role };
    }
    if (active !== undefined) {
      where.active = active;
    }

    const { items, total } = await userRepository.findManyWithCount({
      where,
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { createdAt: 'desc' },
    });

    // Remove password hashes from response
    const users = items.map(user => {
      const { passwordHash: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });

    return { users, total };
  }

  /**
   * Invalidate all user tokens (for logout all devices)
   */
  async invalidateUserTokens(id: string): Promise<void> {
    await userRepository.incrementTokenVersion(id);
  }
}

export const userService = new UserService();
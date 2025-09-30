/**
 * POST /api/v1/auth/login
 * User login endpoint
 */

import { NextRequest } from 'next/server';
import { validateBody, createSuccessResponse, createErrorResponse } from '@/lib/api';
import { LoginRequestSchema } from '@/lib/validation';
import { generateAccessToken, generateRefreshToken, comparePassword } from '@/lib/auth';
// TODO: Import user service when database layer is implemented
// import { getUserByEmail } from '@/services/userService';

export async function POST(request: NextRequest) {
  try {
    // Validate request body
    const { email, password } = await validateBody(request, LoginRequestSchema);
    
    // TODO: Replace with actual database call
    // For now, we'll use a mock user for testing
    const mockUser = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      email: 'admin@bhesi.com',
      name: 'Admin User',
      passwordHash: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewryKf93k.BmUm0m', // 'password123'
      roles: ['admin' as const],
      active: true,
      lastLoginAt: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    // Check if user exists and is active
    if (!mockUser || !mockUser.active) {
      return createErrorResponse({
        code: 'unauthorized',
        message: 'Invalid email or password'
      }, 401);
    }
    
    // Verify password
    const isPasswordValid = await comparePassword(password, mockUser.passwordHash);
    if (!isPasswordValid) {
      return createErrorResponse({
        code: 'unauthorized',
        message: 'Invalid email or password'
      }, 401);
    }
    
    // Generate tokens
    const accessToken = generateAccessToken({
      id: mockUser.id,
      email: mockUser.email,
      roles: mockUser.roles,
    });
    
    const refreshToken = generateRefreshToken(mockUser.id);
    
    // TODO: Update last login time in database
    
    // Return success response
    const responseData = {
      token: accessToken,
      refreshToken,
      user: {
        id: mockUser.id,
        name: mockUser.name,
        email: mockUser.email,
        roles: mockUser.roles,
      },
    };
    
    return createSuccessResponse(responseData);
    
  } catch (error) {
    return createErrorResponse(error);
  }
}
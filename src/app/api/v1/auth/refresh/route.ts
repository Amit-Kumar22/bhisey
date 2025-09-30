/**
 * POST /api/v1/auth/refresh
 * Token refresh endpoint
 */

import { NextRequest } from 'next/server';
import { validateBody, createSuccessResponse, createErrorResponse } from '@/lib/api';
import { RefreshTokenRequestSchema } from '@/lib/validation';
import { verifyRefreshToken, generateAccessToken } from '@/lib/auth';
// TODO: Import user service when database layer is implemented
// import { getUserById } from '@/services/userService';

export async function POST(request: NextRequest) {
  try {
    // Validate request body
    const { refreshToken } = await validateBody(request, RefreshTokenRequestSchema);
    
    // Verify refresh token
    const payload = verifyRefreshToken(refreshToken);
    
    // TODO: Replace with actual database call
    // Check if user still exists and is active
    const mockUser = {
      id: payload.userId,
      email: 'admin@bhesi.com',
      name: 'Admin User',
      roles: ['admin' as const],
      active: true,
    };
    
    if (!mockUser || !mockUser.active) {
      return createErrorResponse({
        code: 'unauthorized',
        message: 'Invalid refresh token'
      }, 401);
    }
    
    // TODO: Check token version in database to support token revocation
    
    // Generate new access token
    const newAccessToken = generateAccessToken({
      id: mockUser.id,
      email: mockUser.email,
      roles: mockUser.roles,
    });
    
    const responseData = {
      token: newAccessToken,
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
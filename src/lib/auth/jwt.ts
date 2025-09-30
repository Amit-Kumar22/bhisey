/**
 * JWT token utilities for authentication
 */

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User, UserRole } from '../validation';

// Environment variables with defaults for development
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your-super-secret-refresh-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '7d';

export interface JWTPayload {
  userId: string;
  email: string;
  roles: UserRole[];
  iat?: number;
  exp?: number;
}

export interface RefreshTokenPayload {
  userId: string;
  tokenVersion: number;
  iat?: number;
  exp?: number;
}

/**
 * Generate JWT access token
 */
export function generateAccessToken(user: Pick<User, 'id' | 'email' | 'roles'>): string {
  const payload: JWTPayload = {
    userId: user.id,
    email: user.email,
    roles: user.roles,
  };

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
    issuer: 'bhesi-cms',
    audience: 'bhesi-app',
  } as jwt.SignOptions);
}

/**
 * Generate JWT refresh token
 */
export function generateRefreshToken(userId: string, tokenVersion: number = 0): string {
  const payload: RefreshTokenPayload = {
    userId,
    tokenVersion,
  };

  return jwt.sign(payload, JWT_REFRESH_SECRET, {
    expiresIn: JWT_REFRESH_EXPIRES_IN,
    issuer: 'bhesi-cms',
    audience: 'bhesi-app',
  } as jwt.SignOptions);
}

/**
 * Verify JWT access token
 */
export function verifyAccessToken(token: string): JWTPayload {
  try {
    return jwt.verify(token, JWT_SECRET, {
      issuer: 'bhesi-cms',
      audience: 'bhesi-app',
    }) as JWTPayload;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error('Token expired');
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw new Error('Invalid token');
    }
    throw new Error('Token verification failed');
  }
}

/**
 * Verify JWT refresh token
 */
export function verifyRefreshToken(token: string): RefreshTokenPayload {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET, {
      issuer: 'bhesi-cms',
      audience: 'bhesi-app',
    }) as RefreshTokenPayload;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error('Refresh token expired');
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw new Error('Invalid refresh token');
    }
    throw new Error('Refresh token verification failed');
  }
}

/**
 * Hash password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
}

/**
 * Compare password with hash
 */
export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Extract token from Authorization header
 */
export function extractBearerToken(authHeader: string | null): string | null {
  if (!authHeader) return null;
  
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return null;
  }
  
  return parts[1];
}

/**
 * Check if user has required role
 */
export function hasRole(userRoles: UserRole[], requiredRole: UserRole): boolean {
  // Admin role has access to everything
  if (userRoles.includes('admin')) return true;
  
  return userRoles.includes(requiredRole);
}

/**
 * Check if user has any of the required roles
 */
export function hasAnyRole(userRoles: UserRole[], requiredRoles: UserRole[]): boolean {
  // Admin role has access to everything
  if (userRoles.includes('admin')) return true;
  
  return requiredRoles.some(role => userRoles.includes(role));
}

/**
 * Check if user can perform action on resource
 */
export function canPerformAction(
  userRoles: UserRole[],
  action: 'create' | 'read' | 'update' | 'delete',
  resource: string
): boolean {
  // Admin can do everything
  if (userRoles.includes('admin')) return true;
  
  // Editor can CRUD content but not users or system settings
  if (userRoles.includes('editor')) {
    const protectedResources = ['users', 'system', 'metrics'];
    if (protectedResources.includes(resource)) {
      return action === 'read';
    }
    return true;
  }
  
  // Reviewer can read everything and update status
  if (userRoles.includes('reviewer')) {
    if (action === 'read') return true;
    if (action === 'update' && ['status', 'publish'].includes(resource)) return true;
    return false;
  }
  
  // Viewer can only read
  if (userRoles.includes('viewer')) {
    return action === 'read';
  }
  
  return false;
}

/**
 * Generate secure random token for password reset, etc.
 */
export function generateSecureToken(length: number = 32): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  return result;
}

/**
 * Validate password strength
 */
export function validatePasswordStrength(password: string): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  if (password.length > 100) {
    errors.push('Password must be less than 100 characters long');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }
  
  // Check for common weak passwords
  const weakPasswords = [
    'password', '123456', '123456789', 'qwerty', 'abc123', 'password123',
    'admin', 'letmein', 'welcome', 'monkey', '1234567890'
  ];
  
  if (weakPasswords.includes(password.toLowerCase())) {
    errors.push('Password is too common and easily guessable');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Rate limiting for authentication attempts
 */
export interface AuthAttempt {
  count: number;
  lastAttempt: Date;
  blockedUntil?: Date;
}

export function checkAuthRateLimit(
  attempts: AuthAttempt,
  maxAttempts: number = 5,
  windowMinutes: number = 15,
  blockMinutes: number = 30
): {
  allowed: boolean;
  remainingAttempts: number;
  resetTime?: Date;
} {
  const now = new Date();
  const windowMs = windowMinutes * 60 * 1000;
  const blockMs = blockMinutes * 60 * 1000;
  
  // Check if currently blocked
  if (attempts.blockedUntil && attempts.blockedUntil > now) {
    return {
      allowed: false,
      remainingAttempts: 0,
      resetTime: attempts.blockedUntil,
    };
  }
  
  // Reset attempts if window has passed
  if (now.getTime() - attempts.lastAttempt.getTime() > windowMs) {
    return {
      allowed: true,
      remainingAttempts: maxAttempts - 1,
    };
  }
  
  // Check if max attempts reached
  if (attempts.count >= maxAttempts) {
    const blockedUntil = new Date(now.getTime() + blockMs);
    return {
      allowed: false,
      remainingAttempts: 0,
      resetTime: blockedUntil,
    };
  }
  
  return {
    allowed: true,
    remainingAttempts: maxAttempts - attempts.count - 1,
  };
}
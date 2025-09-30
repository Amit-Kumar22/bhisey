/**
 * Authentication middleware for Next.js API routes
 */

import { NextRequest } from 'next/server';
import { UnauthorizedError, ForbiddenError } from '../api/errors';
import { 
  verifyAccessToken, 
  extractBearerToken, 
  hasRole, 
  hasAnyRole, 
  canPerformAction,
  type JWTPayload 
} from './jwt';
import { UserRole } from '../validation';

export interface AuthenticatedRequest extends NextRequest {
  user: JWTPayload;
}

/**
 * Middleware to authenticate requests using JWT
 */
export function requireAuth() {
  return async (request: NextRequest): Promise<JWTPayload> => {
    const authHeader = request.headers.get('authorization');
    const token = extractBearerToken(authHeader);
    
    if (!token) {
      throw new UnauthorizedError('Authorization token required');
    }
    
    try {
      const payload = verifyAccessToken(token);
      return payload;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Token verification failed';
      throw new UnauthorizedError(message);
    }
  };
}

/**
 * Middleware to require specific role
 */
export function requireRole(role: UserRole) {
  return async (request: NextRequest): Promise<JWTPayload> => {
    const user = await requireAuth()(request);
    
    if (!hasRole(user.roles, role)) {
      throw new ForbiddenError(`Access denied. Required role: ${role}`);
    }
    
    return user;
  };
}

/**
 * Middleware to require any of the specified roles
 */
export function requireAnyRole(roles: UserRole[]) {
  return async (request: NextRequest): Promise<JWTPayload> => {
    const user = await requireAuth()(request);
    
    if (!hasAnyRole(user.roles, roles)) {
      throw new ForbiddenError(`Access denied. Required roles: ${roles.join(', ')}`);
    }
    
    return user;
  };
}

/**
 * Middleware to require admin role
 */
export function requireAdmin() {
  return requireRole('admin');
}

/**
 * Middleware to require editor or admin role
 */
export function requireEditor() {
  return requireAnyRole(['admin', 'editor']);
}

/**
 * Middleware to require reviewer, editor, or admin role
 */
export function requireReviewer() {
  return requireAnyRole(['admin', 'editor', 'reviewer']);
}

/**
 * Middleware to check if user can perform action on resource
 */
export function requireAction(
  action: 'create' | 'read' | 'update' | 'delete',
  resource: string
) {
  return async (request: NextRequest): Promise<JWTPayload> => {
    const user = await requireAuth()(request);
    
    if (!canPerformAction(user.roles, action, resource)) {
      throw new ForbiddenError(`Access denied. Cannot ${action} ${resource}`);
    }
    
    return user;
  };
}

/**
 * Optional authentication - returns user if token is valid, undefined otherwise
 */
export async function optionalAuth(request: NextRequest): Promise<JWTPayload | undefined> {
  try {
    return await requireAuth()(request);
  } catch {
    return undefined;
  }
}

/**
 * Check if request is from authenticated user
 */
export async function isAuthenticated(request: NextRequest): Promise<boolean> {
  try {
    await requireAuth()(request);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get user from request if authenticated
 */
export async function getUser(request: NextRequest): Promise<JWTPayload | undefined> {
  return optionalAuth(request);
}

/**
 * Middleware wrapper for API routes with authentication
 */
export function withAuth<T extends any[]>(
  handler: (request: NextRequest, user: JWTPayload, ...args: T) => Promise<Response>,
  authMiddleware: (request: NextRequest) => Promise<JWTPayload> = requireAuth()
) {
  return async (request: NextRequest, ...args: T): Promise<Response> => {
    try {
      const user = await authMiddleware(request);
      return handler(request, user, ...args);
    } catch (error) {
      // Error handling should be done by the route handler
      throw error;
    }
  };
}

/**
 * Middleware wrapper for API routes with optional authentication
 */
export function withOptionalAuth<T extends any[]>(
  handler: (request: NextRequest, user: JWTPayload | undefined, ...args: T) => Promise<Response>
) {
  return async (request: NextRequest, ...args: T): Promise<Response> => {
    const user = await optionalAuth(request);
    return handler(request, user, ...args);
  };
}

/**
 * Route-level authentication helper
 */
export class AuthGuard {
  /**
   * Require authentication for the route
   */
  static async authenticate(request: NextRequest): Promise<JWTPayload> {
    return requireAuth()(request);
  }
  
  /**
   * Require admin role for the route
   */
  static async requireAdmin(request: NextRequest): Promise<JWTPayload> {
    return requireAdmin()(request);
  }
  
  /**
   * Require editor role for the route
   */
  static async requireEditor(request: NextRequest): Promise<JWTPayload> {
    return requireEditor()(request);
  }
  
  /**
   * Require reviewer role for the route
   */
  static async requireReviewer(request: NextRequest): Promise<JWTPayload> {
    return requireReviewer()(request);
  }
  
  /**
   * Check if user can perform action on resource
   */
  static async checkPermission(
    request: NextRequest,
    action: 'create' | 'read' | 'update' | 'delete',
    resource: string
  ): Promise<JWTPayload> {
    return requireAction(action, resource)(request);
  }
}

/**
 * RBAC helper functions
 */
export class RBAC {
  /**
   * Check if roles can create content
   */
  static canCreate(roles: UserRole[]): boolean {
    return hasAnyRole(roles, ['admin', 'editor']);
  }
  
  /**
   * Check if roles can update content
   */
  static canUpdate(roles: UserRole[]): boolean {
    return hasAnyRole(roles, ['admin', 'editor', 'reviewer']);
  }
  
  /**
   * Check if roles can delete content
   */
  static canDelete(roles: UserRole[]): boolean {
    return hasAnyRole(roles, ['admin', 'editor']);
  }
  
  /**
   * Check if roles can read content
   */
  static canRead(roles: UserRole[]): boolean {
    return hasAnyRole(roles, ['admin', 'editor', 'reviewer', 'viewer']);
  }
  
  /**
   * Check if roles can manage users
   */
  static canManageUsers(roles: UserRole[]): boolean {
    return hasRole(roles, 'admin');
  }
  
  /**
   * Check if roles can access system settings
   */
  static canAccessSystem(roles: UserRole[]): boolean {
    return hasRole(roles, 'admin');
  }
}
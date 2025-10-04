import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from '../utils/jwt';
import { createError } from './errorHandler';

export interface AuthRequest extends Request {
  user?: { id: string; email: string };
}

export function requireAuth(req: AuthRequest, _res: Response, next: NextFunction) {
  const header = req.headers?.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return next(createError(401, 'Missing or invalid authorization header', 'unauthorized'));
  }
  try {
    const token = header.split(' ')[1];
    const payload = verifyAccessToken(token);
    req.user = { id: payload.sub, email: payload.email };
    next();
  } catch (e) {
    return next(createError(401, 'Invalid or expired token', 'unauthorized'));
  }
}

// Export as authenticate for compatibility
export const authenticate = requireAuth;
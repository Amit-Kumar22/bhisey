import { Request, Response, NextFunction } from 'express';
import { AdminModel } from '../models/AdminModel';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../utils/jwt';
import { createError } from '../middleware/errorHandler';

export async function login(req: Request, res: Response, next?: NextFunction): Promise<void> {
  try {
    const { email, password } = req.body;
    const admin = await AdminModel.findByEmail(email);
    
    if (!admin) {
      const error = createError(401, 'Invalid credentials', 'invalid_credentials');
      if (next) { next(error); return; }
      res.status(401).json({ success: false, error: { code: 'invalid_credentials', message: 'Invalid credentials' } });
      return;
    }
    
    if (!admin.active) {
      const error = createError(403, 'Account inactive', 'forbidden');
      if (next) { next(error); return; }
      res.status(403).json({ success: false, error: { code: 'forbidden', message: 'Account inactive' } });
      return;
    }
    
    // Require ADMIN role for now
    if (!admin.roles?.includes('ADMIN')) {
      const error = createError(403, 'Forbidden', 'forbidden');
      if (next) { next(error); return; }
      res.status(403).json({ success: false, error: { code: 'forbidden', message: 'Forbidden' } });
      return;
    }
    
    const valid = await AdminModel.verifyPassword(admin as any, password);
    if (!valid) {
      const error = createError(401, 'Invalid credentials', 'invalid_credentials');
      if (next) { next(error); return; }
      res.status(401).json({ success: false, error: { code: 'invalid_credentials', message: 'Invalid credentials' } });
      return;
    }
    
    const accessToken = signAccessToken({ sub: admin.id, email: admin.email });
    const refreshToken = signRefreshToken({ sub: admin.id, email: admin.email });
    res.json({ success: true, data: { token: accessToken, refreshToken, user: { id: admin.id, email: admin.email, roles: admin.roles } } });
  } catch (e) {
    if (next) next(e);
    else throw e;
  }
}

export async function refresh(req: Request, res: Response, next?: NextFunction) {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) return next?.(createError(400, 'Missing refresh token', 'validation_error'));
    const payload = verifyRefreshToken(refreshToken);
    const accessToken = signAccessToken({ sub: payload.sub, email: payload.email });
    const newRefresh = signRefreshToken({ sub: payload.sub, email: payload.email });
    res.json({ success: true, data: { token: accessToken, refreshToken: newRefresh } });
  } catch (e) {
    if (next) return next(createError(401, 'Invalid refresh token', 'unauthorized'));
    else throw createError(401, 'Invalid refresh token', 'unauthorized');
  }
}

export async function logout(_req: Request, res: Response) {
  // For stateless JWT, client just discards tokens. Implement blacklist if needed.
  res.json({ success: true, data: { message: 'Logged out' } });
}

export async function me(req: Request, res: Response, next?: NextFunction) {
  try {
    // if using requireAuth middleware, user is attached
    // @ts-ignore
    const user = req.user;
    if (!user) return next?.(createError(401, 'Unauthorized', 'unauthorized'));
    res.json({ success: true, data: user });
  } catch (e) { if (next) next(e); else throw e; }
}

export const authController = {
  login,
  refresh,
  logout,
  me
};
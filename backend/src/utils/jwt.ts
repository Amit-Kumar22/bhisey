import jwt, { SignOptions } from 'jsonwebtoken';
import { env } from '../config/env';

export interface JwtPayload {
  sub: string; // admin id
  email: string;
  type: 'access' | 'refresh';
  iat?: number;
  exp?: number;
}

const accessOpts: SignOptions = { expiresIn: env.ACCESS_TOKEN_TTL as unknown as any };
const refreshOpts: SignOptions = { expiresIn: env.REFRESH_TOKEN_TTL as unknown as any };

export function signAccessToken(payload: Omit<JwtPayload, 'type'>) {
  return jwt.sign({ ...payload, type: 'access' }, env.JWT_ACCESS_SECRET as string, accessOpts);
}

export function signRefreshToken(payload: Omit<JwtPayload, 'type'>) {
  return jwt.sign({ ...payload, type: 'refresh' }, env.JWT_REFRESH_SECRET as string, refreshOpts);
}

export function verifyAccessToken(token: string): JwtPayload {
  return jwt.verify(token, env.JWT_ACCESS_SECRET) as JwtPayload;
}

export function verifyRefreshToken(token: string): JwtPayload {
  return jwt.verify(token, env.JWT_REFRESH_SECRET) as JwtPayload;
}
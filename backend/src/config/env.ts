import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

function required(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`Missing required environment variable ${name}`);
  }
  return value;
}

// Support legacy / alternate variable names to reduce setup friction.
// (Your current .env used JWT_SECRET & JWT_EXPIRES_IN, so we map them here.)
export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '4000', 10),
  DATABASE_URL: required('DATABASE_URL', process.env.DATABASE_URL),
  JWT_ACCESS_SECRET: required('JWT_ACCESS_SECRET', process.env.JWT_ACCESS_SECRET || process.env.JWT_SECRET),
  JWT_REFRESH_SECRET: required('JWT_REFRESH_SECRET', process.env.JWT_REFRESH_SECRET),
  ACCESS_TOKEN_TTL: process.env.ACCESS_TOKEN_TTL || process.env.JWT_EXPIRES_IN || '15m',
  REFRESH_TOKEN_TTL: process.env.REFRESH_TOKEN_TTL || process.env.JWT_REFRESH_EXPIRES_IN || '7d'
};

export default env;
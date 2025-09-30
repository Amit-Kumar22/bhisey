/**
 * Rate limiting utilities using Redis
 */

import { NextRequest } from 'next/server';
import { RateLimitError, getClientIP } from '../api';

// Mock Redis implementation for development
// TODO: Replace with actual Redis client
class MockRedis {
  private store = new Map<string, { count: number; expiresAt: number }>();

  async get(key: string): Promise<string | null> {
    const data = this.store.get(key);
    if (!data || data.expiresAt < Date.now()) {
      this.store.delete(key);
      return null;
    }
    return data.count.toString();
  }

  async incr(key: string): Promise<number> {
    const data = this.store.get(key);
    if (!data || data.expiresAt < Date.now()) {
      this.store.set(key, { count: 1, expiresAt: Date.now() + 900000 }); // 15 minutes
      return 1;
    }
    data.count++;
    return data.count;
  }

  async expire(key: string, seconds: number): Promise<boolean> {
    const data = this.store.get(key);
    if (data) {
      data.expiresAt = Date.now() + (seconds * 1000);
      return true;
    }
    return false;
  }

  async del(key: string): Promise<number> {
    return this.store.delete(key) ? 1 : 0;
  }
}

// TODO: Replace with actual Redis client
// import Redis from 'ioredis';
// const redis = new Redis(process.env.REDIS_URL);
const redis = new MockRedis();

export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  keyGenerator?: (request: NextRequest) => string;
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
  message?: string;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetTime: Date;
  totalHits: number;
}

/**
 * Sliding window rate limiter
 */
export async function checkRateLimit(
  request: NextRequest,
  config: RateLimitConfig
): Promise<RateLimitResult> {
  const {
    windowMs,
    maxRequests,
    keyGenerator = (req) => getClientIP(req),
    message = 'Rate limit exceeded',
  } = config;

  const key = `rate_limit:${keyGenerator(request)}`;
  const now = Date.now();
  const windowStart = now - windowMs;

  try {
    // Get current count
    const currentCount = await redis.get(key);
    const count = currentCount ? parseInt(currentCount, 10) : 0;

    if (count >= maxRequests) {
      // Rate limit exceeded
      const resetTime = new Date(now + windowMs);
      return {
        allowed: false,
        remaining: 0,
        resetTime,
        totalHits: count,
      };
    }

    // Increment counter
    const newCount = await redis.incr(key);
    
    // Set expiry if this is the first request in the window
    if (newCount === 1) {
      await redis.expire(key, Math.ceil(windowMs / 1000));
    }

    const remaining = Math.max(0, maxRequests - newCount);
    const resetTime = new Date(now + windowMs);

    return {
      allowed: true,
      remaining,
      resetTime,
      totalHits: newCount,
    };

  } catch (error) {
    // If Redis fails, allow the request but log the error
    console.error('Rate limiting error:', error);
    return {
      allowed: true,
      remaining: maxRequests - 1,
      resetTime: new Date(now + windowMs),
      totalHits: 1,
    };
  }
}

/**
 * Rate limiting middleware factory
 */
export function createRateLimiter(config: RateLimitConfig) {
  return async (request: NextRequest): Promise<void> => {
    const result = await checkRateLimit(request, config);
    
    if (!result.allowed) {
      const message = config.message || 'Rate limit exceeded';
      throw new RateLimitError(message);
    }
  };
}

// Predefined rate limiters for different endpoint types
export const authRateLimit = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5,
  keyGenerator: (req) => `auth:${getClientIP(req)}`,
  message: 'Too many authentication attempts. Please try again in 15 minutes.',
});

export const contactFormRateLimit = createRateLimiter({
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 3,
  keyGenerator: (req) => `contact:${getClientIP(req)}`,
  message: 'Too many contact form submissions. Please wait before submitting again.',
});

export const applicationFormRateLimit = createRateLimiter({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  maxRequests: 5,
  keyGenerator: (req) => `application:${getClientIP(req)}`,
  message: 'Too many job applications. Please wait 24 hours before applying again.',
});

export const searchRateLimit = createRateLimiter({
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 20,
  keyGenerator: (req) => `search:${getClientIP(req)}`,
  message: 'Too many search requests. Please slow down.',
});

export const generalApiRateLimit = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 1000,
  keyGenerator: (req) => `api:${getClientIP(req)}`,
  message: 'Rate limit exceeded. Please try again later.',
});

/**
 * IP-based rate limiting for specific actions
 */
export async function checkIPRateLimit(
  ip: string,
  action: string,
  maxRequests: number,
  windowMs: number
): Promise<boolean> {
  const key = `ip_limit:${action}:${ip}`;
  
  try {
    const count = await redis.incr(key);
    
    if (count === 1) {
      await redis.expire(key, Math.ceil(windowMs / 1000));
    }
    
    return count <= maxRequests;
  } catch (error) {
    console.error('IP rate limiting error:', error);
    return true; // Allow request if Redis fails
  }
}

/**
 * User-based rate limiting for authenticated actions
 */
export async function checkUserRateLimit(
  userId: string,
  action: string,
  maxRequests: number,
  windowMs: number
): Promise<boolean> {
  const key = `user_limit:${action}:${userId}`;
  
  try {
    const count = await redis.incr(key);
    
    if (count === 1) {
      await redis.expire(key, Math.ceil(windowMs / 1000));
    }
    
    return count <= maxRequests;
  } catch (error) {
    console.error('User rate limiting error:', error);
    return true; // Allow request if Redis fails
  }
}

/**
 * Clear rate limit for a specific key (admin function)
 */
export async function clearRateLimit(key: string): Promise<boolean> {
  try {
    const result = await redis.del(key);
    return result > 0;
  } catch (error) {
    console.error('Clear rate limit error:', error);
    return false;
  }
}
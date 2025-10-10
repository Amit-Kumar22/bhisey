/**
 * Central API base URL resolution for production deployment
 * Supports separate frontend/backend domains
 */

export function resolveApiBase(): string {
  // 1. Production: Use environment variable for separate backend domain
  if (process.env.NEXT_PUBLIC_API_BASE_URL) {
    return stripTrailingSlash(process.env.NEXT_PUBLIC_API_BASE_URL.trim());
  }
  
  // 2. Development: Auto-detect local backend
  if (typeof window !== 'undefined') {
    const loc = window.location;
    if (loc.hostname === 'localhost' || loc.hostname === '127.0.0.1') {
      if (loc.port === '3000') {
        return 'http://localhost:4000/api';
      }
    }
  }
  
  // 3. Fallback for SSR or edge cases
  return '/api';
}

function stripTrailingSlash(u: string) {
  return u.endsWith('/') ? u.slice(0, -1) : u;
}

export const API_BASE = resolveApiBase();

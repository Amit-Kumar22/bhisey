/**
 * Central API base URL resolution (no assumptions hidden in axios creation).
 * Order of precedence:
 * 1. Explicit NEXT_PUBLIC_API_BASE_URL (absolute or relative)
 * 2. If running in browser & window.__API_BASE__ injected (future server inject)
 * 3. Development heuristic: if window.location.port === '3000' assume backend 4000 -> http://localhost:4000/api
 * 4. Fallback to '/api' (not '/api/v1') to match Express mounting unless versioning added.
 */

export function resolveApiBase(): string {
  // 1. Environment explicit
  if (process.env.NEXT_PUBLIC_API_BASE_URL && process.env.NEXT_PUBLIC_API_BASE_URL.trim()) {
    return stripTrailingSlash(process.env.NEXT_PUBLIC_API_BASE_URL.trim());
  }
  // 2. Runtime injected global (optional future pattern)
  if (typeof window !== 'undefined' && (window as any).__API_BASE__) {
    return stripTrailingSlash((window as any).__API_BASE__);
  }
  // 3. Dev heuristic (Next dev default port 3000 + backend typical 4000)
  if (typeof window !== 'undefined') {
    const loc = window.location;
    if (loc.hostname === 'localhost' || loc.hostname === '127.0.0.1') {
      if (loc.port === '3000') {
        return 'http://localhost:4000/api';
      }
    }
  }
  // 4. Fallback (relative) – expects reverse proxy or Next route forwarding
  return '/api';
}

function stripTrailingSlash(u: string) {
  return u.endsWith('/') ? u.slice(0, -1) : u;
}

export const API_BASE = resolveApiBase();

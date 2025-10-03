import { API_BASE, resolveApiBase } from './api';

describe('API base resolver', () => {
  const originalEnv = { ...process.env };
  afterEach(() => {
    process.env = { ...originalEnv };
  });

  it('prefers NEXT_PUBLIC_API_BASE_URL when set', () => {
    process.env.NEXT_PUBLIC_API_BASE_URL = 'http://example.com/api';
    expect(resolveApiBase()).toBe('http://example.com/api');
  });

  it('falls back to /api when nothing else set (node env)', () => {
    delete process.env.NEXT_PUBLIC_API_BASE_URL;
    expect(resolveApiBase()).toBe('/api');
  });
});

// Rudimentary sanity check that exported constant exists
describe('API_BASE export', () => {
  it('is a non-empty string', () => {
    expect(typeof API_BASE).toBe('string');
    expect(API_BASE.length).toBeGreaterThan(0);
  });
});

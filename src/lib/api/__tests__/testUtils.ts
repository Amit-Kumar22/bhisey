/**
 * Test utilities for API testing
 */

import { NextRequest } from 'next/server';

/**
 * Helper to read Response body as JSON
 */
export async function readResponseBody(response: Response): Promise<any> {
  const text = await response.text();
  return JSON.parse(text);
}

/**
 * Create mock NextRequest for testing
 */
export function createMockRequest(options: {
  method?: string;
  url?: string;
  headers?: Record<string, string>;
  body?: any;
} = {}): NextRequest {
  const {
    method = 'GET',
    url = 'http://localhost:3000/api/test',
    headers = {},
    body,
  } = options;

  const init: any = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (body && (method === 'POST' || method === 'PATCH' || method === 'PUT')) {
    init.body = JSON.stringify(body);
  }

  return new NextRequest(url, init);
}

/**
 * Create mock request with authorization header
 */
export function createAuthenticatedRequest(
  token: string,
  options: Parameters<typeof createMockRequest>[0] = {}
): NextRequest {
  return createMockRequest({
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
}

/**
 * Mock data generators
 */
export const mockData = {
  user: {
    id: '123e4567-e89b-12d3-a456-426614174000',
    email: 'test@example.com',
    name: 'Test User',
    roles: ['admin'],
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  
  service: {
    id: '123e4567-e89b-12d3-a456-426614174001',
    slug: 'test-service',
    name: 'Test Service',
    excerpt: 'Test service description',
    hero: {
      title: 'Test Hero',
      subtitle: 'Test subtitle',
    },
    bodySections: [],
    tags: ['test', 'example'],
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  contactForm: {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1-555-0123',
    company: 'Test Corp',
    message: 'This is a test message that meets the minimum length requirement.',
    consent: true,
  },

  blogPost: {
    id: '123e4567-e89b-12d3-a456-426614174002',
    slug: 'test-blog-post',
    title: 'Test Blog Post',
    excerpt: 'Test blog post excerpt',
    body: '<p>Test blog post content</p>',
    authorId: '123e4567-e89b-12d3-a456-426614174000',
    tags: ['test', 'blog'],
    readingMinutes: 5,
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
};

/**
 * Test helper to validate API response structure
 */
export function expectSuccessResponse(body: any, expectedData?: any): void {
  expect(body.success).toBe(true);
  expect(body.data).toBeDefined();
  
  if (expectedData) {
    expect(body.data).toEqual(expectedData);
  }
}

/**
 * Test helper to validate error response structure
 */
export function expectErrorResponse(body: any, expectedCode?: string, expectedMessage?: string): void {
  expect(body.success).toBe(false);
  expect(body.error).toBeDefined();
  expect(body.error.code).toBeDefined();
  expect(body.error.message).toBeDefined();
  
  if (expectedCode) {
    expect(body.error.code).toBe(expectedCode);
  }
  
  if (expectedMessage) {
    expect(body.error.message).toContain(expectedMessage);
  }
}

/**
 * Test helper to validate paginated response structure
 */
export function expectPaginatedResponse(body: any, expectedLength?: number): void {
  expect(body.success).toBe(true);
  expect(body.data).toBeInstanceOf(Array);
  expect(body.meta).toBeDefined();
  expect(body.meta.page).toBeGreaterThan(0);
  expect(body.meta.pageSize).toBeGreaterThan(0);
  expect(body.meta.totalItems).toBeGreaterThanOrEqual(0);
  expect(body.meta.totalPages).toBeGreaterThanOrEqual(0);
  
  if (expectedLength !== undefined) {
    expect(body.data).toHaveLength(expectedLength);
  }
}
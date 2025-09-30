/**
 * Unit tests for API utility functions
 */

import { 
  createSuccessResponse, 
  createPaginatedResponse, 
  createErrorResponse,
  extractPagination,
  extractSort,
  extractFilters,
  extractSearchQuery,
} from '@/lib/api/responses';
import { 
  ValidationError,
  NotFoundError,
  UnauthorizedError,
  normalizeError,
} from '@/lib/api/errors';
import { readResponseBody } from './testUtils';

describe('API Response Utilities', () => {
  describe('createSuccessResponse', () => {
    it('should create a success response with data', async () => {
      const data = { id: '123', name: 'Test' };
      const response = createSuccessResponse(data);
      
      expect(response.status).toBe(200);
      const body = await readResponseBody(response);
      expect(body).toEqual({
        success: true,
        data: { id: '123', name: 'Test' },
      });
    });

    it('should include meta data when provided', async () => {
      const data = { id: '123' };
      const meta = { version: '1.0' };
      const response = createSuccessResponse(data, 200, meta);
      
      const body = await readResponseBody(response);
      expect(body.meta).toEqual(meta);
    });
  });

  describe('createPaginatedResponse', () => {
    it('should create paginated response with correct meta', async () => {
      const data = [{ id: '1' }, { id: '2' }];
      const response = createPaginatedResponse(data, 1, 10, 25);
      
      expect(response.status).toBe(200);
      const body = await readResponseBody(response);
      expect(body).toEqual({
        success: true,
        data,
        meta: {
          page: 1,
          pageSize: 10,
          totalItems: 25,
          totalPages: 3,
        },
      });
    });
  });

  describe('extractPagination', () => {
    it('should extract pagination parameters with defaults', () => {
      const searchParams = new URLSearchParams();
      const result = extractPagination(searchParams);
      
      expect(result).toEqual({ page: 1, pageSize: 12 });
    });

    it('should parse valid pagination parameters', () => {
      const searchParams = new URLSearchParams('page=3&pageSize=20');
      const result = extractPagination(searchParams);
      
      expect(result).toEqual({ page: 3, pageSize: 20 });
    });

    it('should enforce maximum page size', () => {
      const searchParams = new URLSearchParams('pageSize=200');
      const result = extractPagination(searchParams);
      
      expect(result.pageSize).toBe(100);
    });

    it('should enforce minimum page number', () => {
      const searchParams = new URLSearchParams('page=0');
      const result = extractPagination(searchParams);
      
      expect(result.page).toBe(1);
    });
  });

  describe('extractSort', () => {
    it('should extract valid sort parameters', () => {
      const searchParams = new URLSearchParams('sort=createdAt,desc');
      const result = extractSort(searchParams);
      
      expect(result).toEqual({ field: 'createdAt', direction: 'desc' });
    });

    it('should return empty object for invalid sort format', () => {
      const searchParams = new URLSearchParams('sort=invalid');
      const result = extractSort(searchParams);
      
      expect(result).toEqual({});
    });

    it('should return empty object when no sort parameter', () => {
      const searchParams = new URLSearchParams();
      const result = extractSort(searchParams);
      
      expect(result).toEqual({});
    });
  });

  describe('extractFilters', () => {
    it('should extract allowed filters only', () => {
      const searchParams = new URLSearchParams('tag=cloud&category=enterprise&invalid=test');
      const result = extractFilters(searchParams, ['tag', 'category']);
      
      expect(result).toEqual({ tag: 'cloud', category: 'enterprise' });
    });
  });

  describe('extractSearchQuery', () => {
    it('should extract valid search query', () => {
      const searchParams = new URLSearchParams('q=devops');
      const result = extractSearchQuery(searchParams);
      
      expect(result).toBe('devops');
    });

    it('should return undefined for short queries', () => {
      const searchParams = new URLSearchParams('q=a');
      const result = extractSearchQuery(searchParams);
      
      expect(result).toBeUndefined();
    });
  });
});

describe('Error Handling', () => {
  describe('normalizeError', () => {
    it('should handle AppError instances', () => {
      const error = new ValidationError('Test validation error');
      const result = normalizeError(error);
      
      expect(result).toEqual({
        success: false,
        error: {
          code: 'validation_failed',
          message: 'Test validation error',
        },
      });
    });

    it('should handle Zod validation errors', () => {
      const zodError = {
        issues: [
          { path: ['email'], message: 'Invalid email', code: 'invalid_string' },
        ],
      };
      const result = normalizeError(zodError);
      
      expect(result.success).toBe(false);
      expect(result.error.code).toBe('validation_failed');
      expect(result.error.details).toBeDefined();
    });

    it('should handle generic errors', () => {
      const error = new Error('Generic error');
      const result = normalizeError(error);
      
      expect(result).toEqual({
        success: false,
        error: {
          code: 'internal_error',
          message: 'Generic error',
        },
      });
    });

    it('should handle unknown errors', () => {
      const result = normalizeError('string error');
      
      expect(result.success).toBe(false);
      expect(result.error.code).toBe('internal_error');
    });
  });

  describe('Custom Error Classes', () => {
    it('should create ValidationError with correct properties', () => {
      const error = new ValidationError('Invalid input', { field: 'email' });
      
      expect(error.statusCode).toBe(400);
      expect(error.code).toBe('validation_failed');
      expect(error.message).toBe('Invalid input');
      expect(error.details).toEqual({ field: 'email' });
    });

    it('should create NotFoundError with correct properties', () => {
      const error = new NotFoundError('Resource not found');
      
      expect(error.statusCode).toBe(404);
      expect(error.code).toBe('not_found');
      expect(error.message).toBe('Resource not found');
    });

    it('should create UnauthorizedError with correct properties', () => {
      const error = new UnauthorizedError();
      
      expect(error.statusCode).toBe(401);
      expect(error.code).toBe('unauthorized');
      expect(error.message).toBe('Authentication required');
    });
  });
});
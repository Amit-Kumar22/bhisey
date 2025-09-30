/**
 * Response utility functions for standardized API responses
 */

import { NextResponse } from 'next/server';
import { AppError, normalizeError } from './errors';

// Helper functions for creating standardized API responses
export function createSuccessResponse<T>(
  data: T,
  statusCode: number = 200,
  meta?: Record<string, any>
): NextResponse {
  const response = {
    success: true as const,
    data,
    ...(meta && { meta }),
  };

  return NextResponse.json(response, { status: statusCode });
}

export function createPaginatedResponse<T>(
  data: T[],
  page: number,
  pageSize: number,
  totalItems: number,
  statusCode: number = 200
): NextResponse {
  const totalPages = Math.ceil(totalItems / pageSize);
  
  const response = {
    success: true as const,
    data,
    meta: {
      page,
      pageSize,
      totalItems,
      totalPages,
    },
  };

  return NextResponse.json(response, { status: statusCode });
}

export function createErrorResponse(
  error: unknown,
  statusCode?: number
): NextResponse {
  const normalizedError = normalizeError(error);
  const status = statusCode || (error instanceof AppError ? error.statusCode : 500);
  
  return NextResponse.json(normalizedError, { status });
}

// Helper for 201 Created responses
export function createCreatedResponse<T>(data: T, meta?: Record<string, any>): NextResponse {
  return createSuccessResponse(data, 201, meta);
}

// Helper for 204 No Content responses
export function createNoContentResponse(): NextResponse {
  return new NextResponse(null, { status: 204 });
}

// Helper for health check responses
export function createHealthResponse(): NextResponse {
  const data = {
    status: 'ok' as const,
    uptimeSeconds: Math.floor(process.uptime()),
    version: process.env.npm_package_version || '1.0.0',
    timestamp: new Date().toISOString(),
  };

  return createSuccessResponse(data);
}

// Helper to extract and validate query parameters
export function extractQueryParams(url: string): URLSearchParams {
  const { searchParams } = new URL(url);
  return searchParams;
}

// Helper to extract pagination from query params
export function extractPagination(searchParams: URLSearchParams): {
  page: number;
  pageSize: number;
} {
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
  const pageSize = Math.min(100, Math.max(1, parseInt(searchParams.get('pageSize') || '12', 10)));
  
  return { page, pageSize };
}

// Helper to extract sorting from query params
export function extractSort(searchParams: URLSearchParams): {
  field?: string;
  direction?: 'asc' | 'desc';
} {
  const sort = searchParams.get('sort');
  if (!sort) return {};

  const [field, direction] = sort.split(',');
  if (!field || !['asc', 'desc'].includes(direction)) {
    return {};
  }

  return { field, direction: direction as 'asc' | 'desc' };
}

// Helper to extract filters from query params
export function extractFilters(searchParams: URLSearchParams, allowedFilters: string[]): Record<string, string> {
  const filters: Record<string, string> = {};
  
  for (const filter of allowedFilters) {
    const value = searchParams.get(filter);
    if (value) {
      filters[filter] = value;
    }
  }
  
  return filters;
}

// Helper to extract search query
export function extractSearchQuery(searchParams: URLSearchParams): string | undefined {
  const query = searchParams.get('q');
  return query && query.length >= 2 ? query : undefined;
}

// Helper to extract date range
export function extractDateRange(searchParams: URLSearchParams): {
  startDate?: Date;
  endDate?: Date;
} {
  const startDateStr = searchParams.get('startDate');
  const endDateStr = searchParams.get('endDate');
  
  const startDate = startDateStr ? new Date(startDateStr) : undefined;
  const endDate = endDateStr ? new Date(endDateStr) : undefined;
  
  // Validate dates
  if (startDate && isNaN(startDate.getTime())) {
    throw new Error('Invalid startDate format');
  }
  if (endDate && isNaN(endDate.getTime())) {
    throw new Error('Invalid endDate format');
  }
  
  return { startDate, endDate };
}

// Response headers for security
export const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

// Response headers for caching
export const cacheHeaders = {
  // No cache by default for API responses
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
  'Pragma': 'no-cache',
  'Expires': '0',
  'Surrogate-Control': 'no-store',
};

// Cache headers for static content
export const staticCacheHeaders = {
  'Cache-Control': 'public, max-age=31536000, immutable',
};

// Cache headers for dynamic content with short TTL
export const shortCacheHeaders = {
  'Cache-Control': 'public, max-age=60, s-maxage=60, stale-while-revalidate=300',
};

// Helper to add security headers to response
export function addSecurityHeaders(response: NextResponse): NextResponse {
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  return response;
}

// Helper to add cache headers to response
export function addCacheHeaders(
  response: NextResponse,
  type: 'no-cache' | 'static' | 'short' = 'no-cache'
): NextResponse {
  const headers = type === 'static' ? staticCacheHeaders : 
                 type === 'short' ? shortCacheHeaders : 
                 cacheHeaders;
                 
  Object.entries(headers).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  return response;
}

// Helper to create response with all standard headers
export function createStandardResponse<T>(
  data: T,
  statusCode: number = 200,
  cacheType: 'no-cache' | 'static' | 'short' = 'no-cache',
  meta?: Record<string, any>
): NextResponse {
  const response = createSuccessResponse(data, statusCode, meta);
  addSecurityHeaders(response);
  addCacheHeaders(response, cacheType);
  return response;
}
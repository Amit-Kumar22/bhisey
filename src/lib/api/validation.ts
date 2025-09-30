/**
 * Request validation middleware and utilities
 */

import { NextRequest } from 'next/server';
import { z } from 'zod';
import { ValidationError } from './errors';

// Generic request validator function
export async function validateRequest<T extends z.ZodTypeAny>(
  request: NextRequest,
  schema: T,
  source: 'body' | 'query' | 'params' = 'body'
): Promise<z.infer<T>> {
  try {
    let data: any;

    switch (source) {
      case 'body':
        try {
          data = await request.json();
        } catch {
          throw new ValidationError('Invalid JSON in request body');
        }
        break;
      
      case 'query':
        data = Object.fromEntries(new URL(request.url).searchParams.entries());
        break;
      
      case 'params':
        // For params, we'd need to pass them in separately
        throw new Error('Params validation requires separate parameter passing');
      
      default:
        throw new Error(`Invalid validation source: ${source}`);
    }

    return schema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ValidationError('Validation failed', {
        issues: error.issues.map(issue => ({
          path: issue.path.join('.'),
          message: issue.message,
          code: issue.code,
        })),
      });
    }
    throw error;
  }
}

// Validate request body
export async function validateBody<T extends z.ZodTypeAny>(
  request: NextRequest,
  schema: T
): Promise<z.infer<T>> {
  return validateRequest(request, schema, 'body');
}

// Validate query parameters
export function validateQuery<T extends z.ZodTypeAny>(
  request: NextRequest,
  schema: T
): z.infer<T> {
  const url = new URL(request.url);
  const queryData = Object.fromEntries(url.searchParams.entries());
  
  try {
    return schema.parse(queryData);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ValidationError('Invalid query parameters', {
        issues: error.issues.map(issue => ({
          path: issue.path.join('.'),
          message: issue.message,
          code: issue.code,
        })),
      });
    }
    throw error;
  }
}

// Validate URL parameters (slug, id, etc.)
export function validateParams<T extends z.ZodTypeAny>(
  params: Record<string, string | string[]>,
  schema: T
): z.infer<T> {
  try {
    return schema.parse(params);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ValidationError('Invalid URL parameters', {
        issues: error.issues.map(issue => ({
          path: issue.path.join('.'),
          message: issue.message,
          code: issue.code,
        })),
      });
    }
    throw error;
  }
}

// Common parameter schemas
export const SlugParamSchema = z.object({
  slug: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/, 'Invalid slug format'),
});

export const IdParamSchema = z.object({
  id: z.string().uuid('Invalid ID format'),
});

// Export common param validation types
export type SlugParam = z.infer<typeof SlugParamSchema>;
export type IdParam = z.infer<typeof IdParamSchema>;

// HTTP method validator
export function validateMethod(
  request: NextRequest,
  allowedMethods: string[]
): void {
  if (!allowedMethods.includes(request.method)) {
    throw new ValidationError(
      `Method ${request.method} not allowed. Allowed methods: ${allowedMethods.join(', ')}`
    );
  }
}

// Content-Type validator
export function validateContentType(
  request: NextRequest,
  expectedType: string = 'application/json'
): void {
  const contentType = request.headers.get('content-type');
  
  if (!contentType?.includes(expectedType)) {
    throw new ValidationError(
      `Invalid content type. Expected: ${expectedType}, Got: ${contentType || 'none'}`
    );
  }
}

// File upload validation
export function validateFileUpload(
  file: File,
  options: {
    maxSize?: number;
    allowedTypes?: string[];
    allowedExtensions?: string[];
  } = {}
): void {
  const {
    maxSize = 15 * 1024 * 1024, // 15MB default
    allowedTypes = [],
    allowedExtensions = []
  } = options;

  // Check file size
  if (file.size > maxSize) {
    throw new ValidationError(
      `File size ${file.size} exceeds maximum allowed size of ${maxSize} bytes`
    );
  }

  // Check MIME type
  if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
    throw new ValidationError(
      `File type ${file.type} not allowed. Allowed types: ${allowedTypes.join(', ')}`
    );
  }

  // Check file extension
  if (allowedExtensions.length > 0) {
    const extension = file.name.split('.').pop()?.toLowerCase();
    if (!extension || !allowedExtensions.includes(extension)) {
      throw new ValidationError(
        `File extension .${extension} not allowed. Allowed extensions: ${allowedExtensions.join(', ')}`
      );
    }
  }
}

// Email validation (more thorough than basic regex)
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Phone number validation (international format)
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-\(\)]{7,15}$/;
  return phoneRegex.test(phone);
}

// URL validation
export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Sanitize HTML input (basic sanitization)
export function sanitizeHtml(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Sanitize string input (remove dangerous characters)
export function sanitizeString(input: string): string {
  return input
    .trim()
    .replace(/[\x00-\x1F\x7F]/g, '') // Remove control characters
    .replace(/[<>'"&]/g, ''); // Remove potential HTML/script injection chars
}

// Rate limiting key generator
export function generateRateLimitKey(
  request: NextRequest,
  identifier?: string
): string {
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             'unknown';
  
  return identifier ? `${identifier}:${ip}` : ip;
}

// Extract IP address from request
export function getClientIP(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
         request.headers.get('x-real-ip') ||
         request.headers.get('cf-connecting-ip') ||
         'unknown';
}

// Extract User-Agent from request
export function getUserAgent(request: NextRequest): string {
  return request.headers.get('user-agent') || 'unknown';
}
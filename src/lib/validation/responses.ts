import { z } from 'zod';

// ===== STANDARD API RESPONSE SHAPES =====
export const SuccessResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.literal(true),
    data: dataSchema,
    meta: z.record(z.string(), z.any()).optional(),
  });

export const ErrorResponseSchema = z.object({
  success: z.literal(false),
  error: z.object({
    code: z.string(),
    message: z.string(),
    details: z.any().optional(),
  }),
});

// ===== PAGINATION METADATA =====
export const PaginationMetaSchema = z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  totalItems: z.number().int().min(0),
  totalPages: z.number().int().min(0),
});

export const PaginatedResponseSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    success: z.literal(true),
    data: z.array(itemSchema),
    meta: PaginationMetaSchema,
  });

// ===== ERROR CODES =====
export const ErrorCode = z.enum([
  'validation_failed',
  'not_found',
  'unauthorized',
  'forbidden',
  'rate_limited',
  'conflict',
  'internal_error',
  'unsupported_media_type',
  'payload_too_large',
]);

// ===== HEALTH CHECK =====
export const HealthResponseSchema = z.object({
  status: z.literal('ok'),
  uptimeSeconds: z.number(),
  version: z.string(),
  timestamp: z.string().datetime(),
});

// ===== DASHBOARD METRICS =====
export const DashboardMetricsSchema = z.object({
  totalUsers: z.number().int().min(0),
  totalSubmissions: z.number().int().min(0),
  totalContentItems: z.number().int().min(0),
  recentActivity: z.array(z.object({
    id: z.string(),
    type: z.string(),
    description: z.string(),
    timestamp: z.string().datetime(),
    userId: z.string().optional(),
  })).max(10),
  submissionsByStatus: z.object({
    new: z.number().int().min(0),
    reviewed: z.number().int().min(0),
    archived: z.number().int().min(0),
  }),
});

// ===== CACHE REVALIDATION =====
export const RevalidateRequestSchema = z.object({
  paths: z.array(z.string().min(1)).min(1).max(50),
});

// ===== AUDIT LOG =====
export const AuditLogEntrySchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  action: z.string(),
  entityType: z.string(),
  entityId: z.string().uuid(),
  before: z.record(z.string(), z.any()).optional(),
  after: z.record(z.string(), z.any()).optional(),
  ipHash: z.string(),
  createdAt: z.string().datetime(),
});

// ===== WEBHOOK PAYLOAD =====
export const WebhookContentUpdatedSchema = z.object({
  type: z.enum(['service', 'vertical', 'partner', 'case-study', 'blog-post', 'news', 'page']),
  slugs: z.array(z.string().min(1)),
  action: z.enum(['created', 'updated', 'deleted', 'published', 'unpublished']),
});

// ===== SITEMAP =====
export const SitemapEntrySchema = z.object({
  url: z.string().url(),
  lastModified: z.string().datetime().optional(),
  priority: z.number().min(0).max(1).optional(),
  changeFrequency: z.enum(['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']).optional(),
});

export const SitemapResponseSchema = z.object({
  urls: z.array(SitemapEntrySchema),
  lastGenerated: z.string().datetime(),
});

// ===== ADMIN CREATE/UPDATE SCHEMAS =====
export const CreateServiceSchema = z.object({
  slug: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/),
  name: z.string().min(1).max(100),
  excerpt: z.string().min(1).max(300),
  hero: z.object({
    title: z.string().min(1).max(200),
    subtitle: z.string().max(300).optional(),
    backgroundImage: z.string().uuid().optional(),
    ctaText: z.string().max(50).optional(),
    ctaUrl: z.string().url().optional(),
  }),
  bodySections: z.array(z.any()), // SectionBlock but simplified for creation
  tags: z.array(z.string().min(1).max(50)),
  publishedAt: z.string().datetime().optional(),
});

export const UpdateServiceSchema = CreateServiceSchema.partial().omit({ slug: true });

// ===== GENERIC CRUD OPERATIONS =====
export const BulkDeleteSchema = z.object({
  ids: z.array(z.string().uuid()).min(1).max(100),
});

export const BulkUpdateStatusSchema = z.object({
  ids: z.array(z.string().uuid()).min(1).max(100),
  status: z.enum(['published', 'draft', 'archived']),
});

// Helper function to create success response
export const createSuccessResponse = <T>(data: T, meta?: Record<string, any>) => ({
  success: true as const,
  data,
  ...(meta && { meta }),
});

// Helper function to create error response
export const createErrorResponse = (code: string, message: string, details?: any) => ({
  success: false as const,
  error: {
    code,
    message,
    ...(details && { details }),
  },
});

// Helper function to create paginated response
export const createPaginatedResponse = <T>(
  data: T[],
  page: number,
  pageSize: number,
  totalItems: number
) => ({
  success: true as const,
  data,
  meta: {
    page,
    pageSize,
    totalItems,
    totalPages: Math.ceil(totalItems / pageSize),
  },
});

// Export types
export type SuccessResponse<T> = {
  success: true;
  data: T;
  meta?: Record<string, any>;
};

export type ErrorResponse = z.infer<typeof ErrorResponseSchema>;
export type ErrorCode = z.infer<typeof ErrorCode>;
export type PaginationMeta = z.infer<typeof PaginationMetaSchema>;
export type PaginatedResponse<T> = {
  success: true;
  data: T[];
  meta: PaginationMeta;
};
export type HealthResponse = z.infer<typeof HealthResponseSchema>;
export type DashboardMetrics = z.infer<typeof DashboardMetricsSchema>;
export type RevalidateRequest = z.infer<typeof RevalidateRequestSchema>;
export type AuditLogEntry = z.infer<typeof AuditLogEntrySchema>;
export type WebhookContentUpdated = z.infer<typeof WebhookContentUpdatedSchema>;
export type SitemapEntry = z.infer<typeof SitemapEntrySchema>;
export type SitemapResponse = z.infer<typeof SitemapResponseSchema>;
export type CreateService = z.infer<typeof CreateServiceSchema>;
export type UpdateService = z.infer<typeof UpdateServiceSchema>;
export type BulkDelete = z.infer<typeof BulkDeleteSchema>;
export type BulkUpdateStatus = z.infer<typeof BulkUpdateStatusSchema>;
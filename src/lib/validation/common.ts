import { z } from 'zod';

// ===== CORE ENUMS =====
export const UserRole = z.enum(['admin', 'editor', 'reviewer', 'viewer']);
export const FormType = z.enum(['contact', 'application', 'newsletter', 'consent']);
export const SubmissionStatus = z.enum(['new', 'reviewed', 'archived']);
export const JobStatus = z.enum(['open', 'closed']);
export const SectionBlockType = z.enum(['richText', 'image', 'testimonial', 'metrics', 'cta', 'list']);
export const ListStyle = z.enum(['unordered', 'ordered']);

// ===== UTILITY SCHEMAS =====
export const PaginationQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(12),
});

export const SortQuerySchema = z.object({
  sort: z.string().regex(/^[a-zA-Z]+,(asc|desc)$/).optional(),
});

export const SearchQuerySchema = z.object({
  q: z.string().min(2).optional(),
});

export const DateRangeQuerySchema = z.object({
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
});

// ===== MEDIA REFERENCE =====
export const MediaRefSchema = z.object({
  id: z.string().uuid(),
  url: z.string().url(),
  alt: z.string(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
  mimeType: z.string(),
});

// ===== RESULT METRIC =====
export const ResultMetricSchema = z.object({
  label: z.string().min(1).max(100),
  value: z.string().min(1).max(50),
  unit: z.string().max(20).optional(),
  accent: z.boolean().optional(),
});

// ===== SECTION BLOCKS =====
export const RichTextSectionSchema = z.object({
  type: z.literal('richText'),
  html: z.string().min(1),
});

export const ImageSectionSchema = z.object({
  type: z.literal('image'),
  media: MediaRefSchema,
  caption: z.string().optional(),
});

export const TestimonialSectionSchema = z.object({
  type: z.literal('testimonial'),
  testimonialId: z.string().uuid(),
});

export const MetricsSectionSchema = z.object({
  type: z.literal('metrics'),
  items: z.array(ResultMetricSchema),
});

export const CTASectionSchema = z.object({
  type: z.literal('cta'),
  heading: z.string().min(1).max(200),
  text: z.string().min(1).max(500),
  ctas: z.array(z.object({
    label: z.string().min(1).max(50),
    url: z.string().url(),
    variant: z.enum(['primary', 'secondary']).optional(),
  })),
});

export const ListSectionSchema = z.object({
  type: z.literal('list'),
  items: z.array(z.string().min(1).max(200)),
  style: ListStyle,
});

export const SectionBlockSchema = z.discriminatedUnion('type', [
  RichTextSectionSchema,
  ImageSectionSchema,
  TestimonialSectionSchema,
  MetricsSectionSchema,
  CTASectionSchema,
  ListSectionSchema,
]);

// ===== HERO BLOCK =====
export const HeroBlockSchema = z.object({
  title: z.string().min(1).max(200),
  subtitle: z.string().max(300).optional(),
  backgroundImage: MediaRefSchema.optional(),
  ctaText: z.string().max(50).optional(),
  ctaUrl: z.string().url().optional(),
});

// ===== SEO METADATA =====
export const SEOMetadataSchema = z.object({
  title: z.string().min(1).max(60),
  description: z.string().min(1).max(160),
  keywords: z.array(z.string()).optional(),
  canonicalUrl: z.string().url().optional(),
  ogImage: MediaRefSchema.optional(),
});

// Export types
export type UserRole = z.infer<typeof UserRole>;
export type FormType = z.infer<typeof FormType>;
export type SubmissionStatus = z.infer<typeof SubmissionStatus>;
export type JobStatus = z.infer<typeof JobStatus>;
export type SectionBlockType = z.infer<typeof SectionBlockType>;
export type ListStyle = z.infer<typeof ListStyle>;
export type PaginationQuery = z.infer<typeof PaginationQuerySchema>;
export type SortQuery = z.infer<typeof SortQuerySchema>;
export type SearchQuery = z.infer<typeof SearchQuerySchema>;
export type DateRangeQuery = z.infer<typeof DateRangeQuerySchema>;
export type MediaRef = z.infer<typeof MediaRefSchema>;
export type ResultMetric = z.infer<typeof ResultMetricSchema>;
export type SectionBlock = z.infer<typeof SectionBlockSchema>;
export type HeroBlock = z.infer<typeof HeroBlockSchema>;
export type SEOMetadata = z.infer<typeof SEOMetadataSchema>;
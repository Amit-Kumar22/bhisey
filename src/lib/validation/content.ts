import { z } from 'zod';
import { 
  MediaRefSchema, 
  SectionBlockSchema, 
  HeroBlockSchema, 
  SEOMetadataSchema, 
  ResultMetricSchema,
  PaginationQuerySchema,
  SortQuerySchema,
  SearchQuerySchema
} from './common';

// ===== NAVIGATION =====
export const NavItemSchema: z.ZodType<{
  id: string;
  label: string;
  path: string;
  children?: Array<{
    id: string;
    label: string;
    path: string;
    children?: any;
  }>;
}> = z.object({
  id: z.string().uuid(),
  label: z.string().min(1).max(50),
  path: z.string().min(1),
  children: z.array(z.lazy(() => NavItemSchema)).optional(),
});

export const NavItemGroupSchema = z.object({
  title: z.string().min(1).max(50),
  items: z.array(NavItemSchema),
});

export const NavigationResponseSchema = z.object({
  primary: z.array(NavItemSchema),
  footer: z.array(NavItemGroupSchema),
});

// ===== PAGES =====
export const PageSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/),
  title: z.string().min(1).max(200),
  hero: HeroBlockSchema.optional(),
  sections: z.array(SectionBlockSchema),
  seo: SEOMetadataSchema,
  publishedAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime(),
});

export const PageQuerySchema = z.object({
  draft: z.coerce.boolean().optional(),
});

// ===== SERVICES =====
export const ServiceSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/),
  name: z.string().min(1).max(100),
  excerpt: z.string().min(1).max(300),
  hero: HeroBlockSchema,
  bodySections: z.array(SectionBlockSchema),
  tags: z.array(z.string().min(1).max(50)),
  publishedAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime(),
});

export const ServiceQuerySchema = z.object({
  include: z.enum(['full']).optional(),
}).merge(PaginationQuerySchema);

// ===== VERTICALS =====
export const VerticalSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/),
  name: z.string().min(1).max(100),
  summary: z.string().min(1).max(300),
  bodySections: z.array(SectionBlockSchema),
  industries: z.array(z.string().min(1).max(100)).optional(),
  publishedAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime(),
});

// ===== PARTNERS =====
export const PartnerSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/),
  name: z.string().min(1).max(100),
  description: z.string().min(1).max(500),
  tier: z.enum(['platinum', 'gold', 'silver', 'bronze']).optional(),
  logos: z.array(MediaRefSchema),
  capabilities: z.array(z.string().min(1).max(100)),
  publishedAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime(),
});

// ===== CASE STUDIES =====
export const CaseStudySchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/),
  title: z.string().min(1).max(200),
  clientName: z.string().min(1).max(100),
  industry: z.string().min(1).max(100),
  services: z.array(z.string().min(1).max(100)),
  verticals: z.array(z.string().min(1).max(100)),
  challenge: z.string().min(1).max(1000),
  solution: z.string().min(1).max(2000),
  results: z.array(ResultMetricSchema),
  techStack: z.array(z.string().min(1).max(50)),
  heroImage: MediaRefSchema,
  publishedAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const CaseStudyQuerySchema = z.object({
  service: z.string().optional(),
  vertical: z.string().optional(),
  tag: z.string().optional(),
}).merge(PaginationQuerySchema).merge(SortQuerySchema).merge(SearchQuerySchema);

// ===== BLOG POSTS =====
export const BlogPostSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/),
  title: z.string().min(1).max(200),
  excerpt: z.string().min(1).max(300),
  body: z.string().min(1), // Rich text content
  authorId: z.string().uuid(),
  tags: z.array(z.string().min(1).max(50)),
  readingMinutes: z.number().int().min(1),
  heroImage: MediaRefSchema.optional(),
  seo: SEOMetadataSchema,
  publishedAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const BlogPostQuerySchema = z.object({
  tag: z.string().optional(),
  author: z.string().optional(),
}).merge(PaginationQuerySchema).merge(SortQuerySchema).merge(SearchQuerySchema);

// ===== NEWS =====
export const NewsItemSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/),
  title: z.string().min(1).max(200),
  excerpt: z.string().min(1).max(300),
  body: z.string().min(1),
  tags: z.array(z.string().min(1).max(50)),
  heroImage: MediaRefSchema.optional(),
  seo: SEOMetadataSchema,
  publishedAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

// ===== TESTIMONIALS =====
export const TestimonialSchema = z.object({
  id: z.string().uuid(),
  clientName: z.string().min(1).max(100),
  roleTitle: z.string().min(1).max(100),
  company: z.string().min(1).max(100),
  quote: z.string().min(1).max(500),
  logo: MediaRefSchema.optional(),
  order: z.number().int().min(0),
  publishedAt: z.string().datetime().optional(),
});

// ===== AWARDS =====
export const AwardSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(200),
  issuer: z.string().min(1).max(100),
  year: z.number().int().min(1900).max(new Date().getFullYear() + 1),
  logo: MediaRefSchema,
  order: z.number().int().min(0),
});

// ===== CLIENT LOGOS =====
export const ClientLogoSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  logo: MediaRefSchema,
  category: z.enum(['partner', 'client']),
  order: z.number().int().min(0),
});

export const ClientLogoQuerySchema = z.object({
  category: z.enum(['partner', 'client']).optional(),
});

// ===== SEARCH =====
export const SearchQueryParamsSchema = z.object({
  q: z.string().min(2),
  type: z.enum(['blog', 'news', 'case', 'service', 'page']).optional(),
}).merge(PaginationQuerySchema);

export const SearchResultSchema = z.object({
  id: z.string().uuid(),
  type: z.enum(['blog', 'news', 'case', 'service', 'page']),
  title: z.string(),
  excerpt: z.string(),
  slug: z.string(),
  url: z.string(),
  publishedAt: z.string().datetime().optional(),
});

// Export types
export type NavItem = z.infer<typeof NavItemSchema>;
export type NavItemGroup = z.infer<typeof NavItemGroupSchema>;
export type NavigationResponse = z.infer<typeof NavigationResponseSchema>;
export type Page = z.infer<typeof PageSchema>;
export type PageQuery = z.infer<typeof PageQuerySchema>;
export type Service = z.infer<typeof ServiceSchema>;
export type ServiceQuery = z.infer<typeof ServiceQuerySchema>;
export type Vertical = z.infer<typeof VerticalSchema>;
export type Partner = z.infer<typeof PartnerSchema>;
export type CaseStudy = z.infer<typeof CaseStudySchema>;
export type CaseStudyQuery = z.infer<typeof CaseStudyQuerySchema>;
export type BlogPost = z.infer<typeof BlogPostSchema>;
export type BlogPostQuery = z.infer<typeof BlogPostQuerySchema>;
export type NewsItem = z.infer<typeof NewsItemSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;
export type Award = z.infer<typeof AwardSchema>;
export type ClientLogo = z.infer<typeof ClientLogoSchema>;
export type ClientLogoQuery = z.infer<typeof ClientLogoQuerySchema>;
export type SearchQueryParams = z.infer<typeof SearchQueryParamsSchema>;
export type SearchResult = z.infer<typeof SearchResultSchema>;
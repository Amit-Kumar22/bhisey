import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export const blogCreateSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3).regex(/^[a-z0-9-]+$/),
  content: z.string().min(10),
  excerpt: z.string().optional(),
  tags: z.array(z.string()).optional(),
  heroImage: z.union([z.string(), z.object({ url: z.string() }), z.any()]).optional()
}).passthrough();

export const blogUpdateSchema = z.object({
  title: z.string().min(3).optional(),
  slug: z.string().min(3).regex(/^[a-z0-9-]+$/).optional(),
  content: z.string().min(10).optional(),
  excerpt: z.string().optional(),
  tags: z.array(z.string()).optional(),
  heroImage: z.union([z.string(), z.object({ url: z.string() }), z.any()]).optional()
}).passthrough();

export const caseStudyCreateSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3).regex(/^[a-z0-9-]+$/),
  content: z.string().min(10),
  clientName: z.string().min(1),
  industry: z.string().min(1),
  challenge: z.string().min(1),
  results: z.array(z.any()).optional(),
  techStack: z.array(z.string()).optional(),
  heroImage: z.union([z.string(), z.object({ url: z.string() }), z.any()]).optional()
}).passthrough();

export const caseStudyUpdateSchema = z.object({
  title: z.string().min(3).optional(),
  slug: z.string().min(3).regex(/^[a-z0-9-]+$/).optional(),
  content: z.string().min(10).optional(),
  clientName: z.string().optional(),
  industry: z.string().optional(),
  challenge: z.string().optional(),
  results: z.array(z.any()).optional(),
  techStack: z.array(z.string()).optional(),
  heroImage: z.union([z.string(), z.object({ url: z.string() }), z.any()]).optional()
}).passthrough();

export type LoginInput = z.infer<typeof loginSchema>;
export type BlogCreateInput = z.infer<typeof blogCreateSchema>;
export type BlogUpdateInput = z.infer<typeof blogUpdateSchema>;
export type CaseStudyCreateInput = z.infer<typeof caseStudyCreateSchema>;
export type CaseStudyUpdateInput = z.infer<typeof caseStudyUpdateSchema>;
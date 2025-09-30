import { z } from 'zod';
import { FormType, SubmissionStatus, UserRole } from './common';

// ===== AUTHENTICATION =====
export const LoginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export const RefreshTokenRequestSchema = z.object({
  refreshToken: z.string().min(1),
});

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(1).max(100),
  roles: z.array(UserRole),
  lastLoginAt: z.string().datetime().optional(),
  active: z.boolean(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const AuthResponseSchema = z.object({
  token: z.string(),
  refreshToken: z.string(),
  user: UserSchema.omit({ createdAt: true, updatedAt: true }),
});

// ===== FORMS =====
export const ContactFormSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z.string().max(20).optional(),
  company: z.string().max(100).optional(),
  message: z.string().min(30).max(5000),
  consent: z.boolean().refine(val => val === true, {
    message: "Consent is required"
  }),
  attachment: z.string().optional(), // File reference token
});

export const JobApplicationFormSchema = z.object({
  jobId: z.string().uuid(),
  name: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z.string().max(20).optional(),
  linkedin: z.string().url().optional(),
  portfolio: z.string().url().optional(),
  coverLetter: z.string().max(2000).optional(),
  resumeFileToken: z.string().optional(),
});

export const NewsletterFormSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1).max(50).optional(),
  preferences: z.array(z.enum(['weekly', 'monthly', 'announcements'])).optional(),
});

export const ConsentFormSchema = z.object({
  necessary: z.boolean().default(true),
  analytics: z.boolean(),
  marketing: z.boolean(),
  preferences: z.boolean(),
});

export const FileUploadRequestSchema = z.object({
  fileName: z.string().min(1).max(255),
  mimeType: z.string().min(1),
  size: z.number().int().min(1).max(15 * 1024 * 1024), // 15MB max
});

export const FileUploadResponseSchema = z.object({
  uploadUrl: z.string().url(),
  fileToken: z.string(),
  expiresAt: z.string().datetime(),
});

// ===== FORM SUBMISSIONS =====
export const FormSubmissionSchema = z.object({
  id: z.string().uuid(),
  formType: FormType,
  payload: z.record(z.string(), z.any()), // JSONB field
  status: SubmissionStatus,
  createdAt: z.string().datetime(),
  meta: z.object({
    ipHash: z.string(),
    userAgent: z.string().optional(),
  }),
});

export const FormSubmissionQuerySchema = z.object({
  formType: FormType.optional(),
  status: SubmissionStatus.optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(12),
});

export const FormSubmissionUpdateSchema = z.object({
  status: SubmissionStatus,
  notes: z.string().max(1000).optional(),
});

// ===== CAREERS =====
export const JobSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/),
  title: z.string().min(1).max(200),
  department: z.string().min(1).max(100),
  location: z.string().min(1).max(100),
  remote: z.boolean(),
  description: z.string().min(1),
  requirements: z.array(z.string().min(1).max(200)),
  benefits: z.array(z.string().min(1).max(200)),
  status: z.enum(['open', 'closed']),
  postedAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const JobQuerySchema = z.object({
  location: z.string().optional(),
  department: z.string().optional(),
  remote: z.coerce.boolean().optional(),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(12),
});

// ===== ADMIN USER MANAGEMENT =====
export const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(100),
  password: z.string().min(8).max(100),
  roles: z.array(UserRole).min(1),
});

export const UpdateUserSchema = z.object({
  email: z.string().email().optional(),
  name: z.string().min(1).max(100).optional(),
  password: z.string().min(8).max(100).optional(),
  roles: z.array(UserRole).min(1).optional(),
  active: z.boolean().optional(),
});

// ===== ADMIN MEDIA MANAGEMENT =====
export const MediaUploadSchema = z.object({
  fileToken: z.string(),
  altText: z.string().min(1).max(200),
  title: z.string().max(100).optional(),
  tags: z.array(z.string().min(1).max(50)).optional(),
});

export const MediaQuerySchema = z.object({
  q: z.string().min(1).optional(),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(12),
});

// Export types
export type LoginRequest = z.infer<typeof LoginRequestSchema>;
export type RefreshTokenRequest = z.infer<typeof RefreshTokenRequestSchema>;
export type User = z.infer<typeof UserSchema>;
export type AuthResponse = z.infer<typeof AuthResponseSchema>;
export type ContactForm = z.infer<typeof ContactFormSchema>;
export type JobApplicationForm = z.infer<typeof JobApplicationFormSchema>;
export type NewsletterForm = z.infer<typeof NewsletterFormSchema>;
export type ConsentForm = z.infer<typeof ConsentFormSchema>;
export type FileUploadRequest = z.infer<typeof FileUploadRequestSchema>;
export type FileUploadResponse = z.infer<typeof FileUploadResponseSchema>;
export type FormSubmission = z.infer<typeof FormSubmissionSchema>;
export type FormSubmissionQuery = z.infer<typeof FormSubmissionQuerySchema>;
export type FormSubmissionUpdate = z.infer<typeof FormSubmissionUpdateSchema>;
export type Job = z.infer<typeof JobSchema>;
export type JobQuery = z.infer<typeof JobQuerySchema>;
export type CreateUser = z.infer<typeof CreateUserSchema>;
export type UpdateUser = z.infer<typeof UpdateUserSchema>;
export type MediaUpload = z.infer<typeof MediaUploadSchema>;
export type MediaQuery = z.infer<typeof MediaQuerySchema>;
# 02. Backend Architecture & API Specifications

Stack Overview
- Runtime: Node.js (LTS) with Express.js (or Fastify for performance) behind reverse proxy (NGINX) or Vercel Edge + dedicated API service.
- Pattern: Modular layered architecture (Routes -> Controllers -> Services -> Repositories -> DB).
- Validation: Zod schemas for all request bodies & query params.
- Auth: JWT (HS256/RS256) for admin CMS; public site mostly read-only.
- Rate Limiting: Sliding window (Redis) for write endpoints (forms, auth) and burst control for search.
- Caching: Layered: HTTP Cache-Control (ISR pages), Redis for computed aggregates, CDN for static assets/images.
- Observability: Pino structured logs + OpenTelemetry traces + Prometheus metrics (/api/metrics optional protected).
- Error Shape: { success: false, error: { code: string, message: string, details?: any } }
- Success Shape: { success: true, data: <payload>, meta?: {...} }

Versioning Strategy
- Base path: /api/v1
- Future backward-incompatible changes bump to /api/v2; maintain deprecation headers.

Authentication & Authorization
- Public GET endpoints: no auth.
- Admin endpoints: Bearer token (JWT) with role claim (admin, editor, reviewer, viewer).
- Upload endpoints: require admin or form signed upload token.
- CSRF: For same-site admin panel (double-submit cookie) when using cookies; if SPA with Authorization header only, CSRF less relevant.

Pagination Standard
- Query: page (1+), pageSize (default 12, max 100)
- Response meta: { page, pageSize, totalItems, totalPages }

Sorting & Filtering
- sort: field,(asc|desc) e.g. createdAt,desc
- filter via query params (e.g., tag=cloud, service=devops)

Error Codes (Representative)
- validation_failed
- not_found
- unauthorized
- forbidden
- rate_limited
- conflict
- internal_error
- unsupported_media_type
- payload_too_large

## Endpoint Catalog

Content (Public Read)
1. GET /api/v1/navigation
   - Desc: Returns structured navigation tree.
   - Response: { success, data: { primary: NavItem[], footer: NavItemGroup[] } }
2. GET /api/v1/pages/:slug
   - Desc: Generic marketing page (why-kanda etc.)
   - Params: slug (string)
   - Query: draft? (admin preview) boolean
   - Response: { success, data: { id, slug, title, hero, sections: SectionBlock[], seo } }
3. GET /api/v1/services
   - Query: include=full? returns expanded content
   - Response: list of service summaries or full objects.
4. GET /api/v1/services/:slug
5. GET /api/v1/verticals
6. GET /api/v1/verticals/:slug
7. GET /api/v1/partners
8. GET /api/v1/partners/:slug
9. GET /api/v1/case-studies
   - Query: page, pageSize, service?, vertical?, tag?, q?
10. GET /api/v1/case-studies/:slug
11. GET /api/v1/blog/posts
    - Query: page, pageSize, tag?, author?, q?
12. GET /api/v1/blog/posts/:slug
13. GET /api/v1/news
14. GET /api/v1/news/:slug
15. GET /api/v1/testimonials (optional paginated)
16. GET /api/v1/awards
17. GET /api/v1/logos/clients (supports category=partner|client)
18. GET /api/v1/search (aggregated multi-index)
    - Query: q (≥2 chars), type? (blog|news|case|service|page), page, pageSize
19. GET /api/v1/sitemap (XML or JSON) (may be served static else dynamic JSON)

Forms & Interaction (Public Write)
20. POST /api/v1/forms/contact
   - Body: { name, email, phone?, company?, message, consent, attachment? (file reference token) }
   - Validations: message length 30–5000, email RFC.
   - Response: ack id.
21. POST /api/v1/forms/application
   - Body: { jobId, name, email, phone?, linkedin?, portfolio?, coverLetter?, resumeFileToken }
22. POST /api/v1/forms/newsletter (future)
23. POST /api/v1/forms/upload (pre-signed, optional)
   - Body: { fileName, mimeType, size }
   - Response: { uploadUrl, fileToken, expiresAt }
24. POST /api/v1/forms/consent (cookie preferences)

Careers
25. GET /api/v1/careers/jobs
   - Query: page, pageSize, location?, department?, remote?
26. GET /api/v1/careers/jobs/:slug

Admin Auth & Session
27. POST /api/v1/auth/login
   - Body: { email, password }
   - Response: { token, user: { id, name, roles } }
28. POST /api/v1/auth/refresh
   - Body: { refreshToken }
29. POST /api/v1/auth/logout (invalidate refresh token)
30. GET /api/v1/auth/me (returns current user)

Admin Content Management (Protected)
(Use consistent CRUD pattern; all require Bearer token + role)
31. POST /api/v1/admin/services
32. PATCH /api/v1/admin/services/:id
33. DELETE /api/v1/admin/services/:id (soft delete with deletedAt)
34. POST /api/v1/admin/verticals
35. PATCH /api/v1/admin/verticals/:id
36. DELETE /api/v1/admin/verticals/:id
37. POST /api/v1/admin/partners
38. PATCH /api/v1/admin/partners/:id
39. DELETE /api/v1/admin/partners/:id
40. POST /api/v1/admin/pages
41. PATCH /api/v1/admin/pages/:id
42. DELETE /api/v1/admin/pages/:id
43. POST /api/v1/admin/case-studies
44. PATCH /api/v1/admin/case-studies/:id
45. DELETE /api/v1/admin/case-studies/:id
46. POST /api/v1/admin/blog/posts
47. PATCH /api/v1/admin/blog/posts/:id
48. DELETE /api/v1/admin/blog/posts/:id
49. POST /api/v1/admin/news
50. PATCH /api/v1/admin/news/:id
51. DELETE /api/v1/admin/news/:id
52. POST /api/v1/admin/testimonials
53. PATCH /api/v1/admin/testimonials/:id
54. DELETE /api/v1/admin/testimonials/:id
55. POST /api/v1/admin/awards
56. PATCH /api/v1/admin/awards/:id
57. DELETE /api/v1/admin/awards/:id
58. POST /api/v1/admin/logos
59. DELETE /api/v1/admin/logos/:id
60. POST /api/v1/admin/jobs
61. PATCH /api/v1/admin/jobs/:id
62. DELETE /api/v1/admin/jobs/:id
63. GET /api/v1/admin/form-submissions (filter by formType, date range)
64. GET /api/v1/admin/form-submissions/:id
65. PATCH /api/v1/admin/form-submissions/:id (status update)
66. GET /api/v1/admin/dashboard (summary metrics)
67. POST /api/v1/admin/revalidate (trigger on-demand ISR) Body: { paths: string[] }
68. POST /api/v1/admin/media (upload metadata finalize) Body: { fileToken, altText, title?, tags? }
69. DELETE /api/v1/admin/media/:id
70. GET /api/v1/admin/media (page, pageSize, q?)
71. POST /api/v1/admin/users (role management – admin only)
72. PATCH /api/v1/admin/users/:id
73. DELETE /api/v1/admin/users/:id (soft deactivate)

System & Utility
74. GET /api/v1/health -> { status: 'ok', uptimeSeconds, version }
75. GET /api/v1/metrics (Prometheus) (protected by IP allowlist or token)

## Representative Schemas

NavItem: { id, label, path, children?: NavItem[] }
Service: { id, slug, name, excerpt, hero: HeroBlock, bodySections: SectionBlock[], tags: string[], updatedAt }
Vertical: { id, slug, name, summary, bodySections[], industries?: string[] }
Partner: { id, slug, name, description, tier?, logos: MediaRef[], capabilities: string[] }
CaseStudy: { id, slug, title, clientName, industry, services: string[], verticals: string[], challenge, solution, results: ResultMetric[], techStack: string[], heroImage: MediaRef, publishedAt }
BlogPost: { id, slug, title, excerpt, body (rich), authorId, tags[], readingMinutes, publishedAt, updatedAt }
NewsItem: Similar to BlogPost with type 'news'.
Testimonial: { id, clientName, roleTitle, company, quote, logo: MediaRef, order }
Award: { id, name, issuer, year, logo: MediaRef }
Job: { id, slug, title, department, location, remote, description, requirements[], benefits[], status: open|closed, postedAt }
FormSubmission: { id, formType, payload(jsonb), status: new|reviewed|archived, createdAt, meta: { ipHash, userAgent } }
User: { id, email, name, passwordHash, roles[], lastLoginAt, active }
MediaRef: { id, url, alt, width, height, mimeType }
SectionBlock (discriminated union):
- type: 'richText' { html }
- 'image' { media: MediaRef, caption? }
- 'testimonial' { testimonialId }
- 'metrics' { items: ResultMetric[] }
- 'cta' { heading, text, ctas[] }
- 'list' { items: string[], style: 'unordered'|'ordered' }

ResultMetric: { label, value, unit?, accent?: boolean }

## Validation & Error Examples
POST /api/v1/forms/contact Body:
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Need help with a SaaS platform modernization...",
  "consent": true
}
Errors:
- 400 validation_failed (missing required fields, invalid email)
- 413 payload_too_large (file > limit)
- 429 rate_limited (too many submissions)
- 500 internal_error

## Security Considerations per Endpoint Group
- Public GET: Add read-only DB role and ensure no PII leakage.
- Forms: Input sanitization, captcha or hCaptcha token optional after anomaly threshold, store IP hashed (sha256 + salt) for abuse detection.
- Uploads: Pre-signed URL to object storage, virus scan asynchronous (ClamAV) before media publish.
- Admin: Enforce role matrix (RBAC) per resource; log all mutations (audit table).

## Role Matrix (Summary)
- admin: full access.
- editor: CRUD content except users & system endpoints.
- reviewer: Read content + update status (e.g., publish/unpublish), no deletions.
- viewer: Read-only admin UI.

## Rate Limits (initial)
- /auth/login: 5/min/IP
- /forms/contact: 3/min/IP, 30/day/IP
- /forms/application: 5/day/IP
- /search: 20/min/IP

## Caching Strategy Hints
- navigation: Redis key nav:v1 (15m)
- homepage aggregated content: precomputed JSON regen on publish
- blog list pages: 60s SWR + ETag
- article detail: ISR revalidate on content update

## Webhooks (Inbound)
- POST /api/v1/webhooks/content-updated { type, slugs[] } (secured via HMAC) triggers cache purge + ISR revalidate queue.

## Background Jobs (Queue)
- mediaVirusScan(fileId)
- sendContactAcknowledgement(formSubmissionId)
- generateSitemap()
- computeSearchIndex(changedEntity)
- purgeCache(paths[])
- emailJobApplicationToHR(formSubmissionId)

## Logging & Audit
Audit entry: { id, userId, action, entityType, entityId, before (jsonb), after (jsonb), ipHash, createdAt }
Sensitive fields (passwordHash) never logged.

## Error Handling Pattern
Service layer throws typed errors (e.g., new AppError('not_found', 'Case study not found')). Express error middleware maps to HTTP code + JSON error shape.

## Open Points / Assumptions
- Newsletter provider (Mailchimp etc.) not yet chosen – placeholder endpoint.
- Search may leverage Postgres full-text initially; can upgrade to OpenSearch.
- Case study metrics are curated manually (no automatic ingestion).
- File uploads limited to <= 15MB; large media handled outside scope.

Further data model detail in 03-database-schema.md.

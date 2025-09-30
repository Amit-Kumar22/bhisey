# 04. Workflow & Data Flow Specification

Overview
This document explains how data moves between the frontend (Next.js), backend API (Node/Express), PostgreSQL, cache layers, storage, and background jobs across key use cases.

Rendering Strategies
- Static Site Generation (SSG/ISR): Marketing pages, service/vertical detail, partner pages, homepage segments.
- Server-Side Rendering (SSR): Resource listings (blog/news/case studies with filters), careers listings.
- Client-Side Fetch (CSR incremental hydration): Search auto-suggest, pagination updates, form submissions (AJAX).
- On-Demand Revalidation: Triggered via /api/v1/admin/revalidate or content webhook to refresh ISR pages.

Data Flow Scenarios
1. Visitor Loads Homepage
   a. Next.js requests pre-generated HTML (ISR file) from CDN edge.
   b. Dynamic blocks (Latest News/Blog) are hydrated by client fetch to /api/v1/blog/posts & /api/v1/news (cached JSON). Optionally embedded at build by server prefetch.
   c. Browser loads lazy images; IntersectionObserver triggers additional logos/testimonials fetch only if not embedded.
2. Visitor Navigates to Service Detail
   a. Next.js serves ISR page (HTML + JSON data embedded). Revalidation interval (24h or on-demand) ensures content freshness.
   b. No additional network unless interactive components (e.g., testimonials slider fetch) omitted from initial render for bundle size optimization.
3. Resource Listing (Blog List)
   a. Request hits SSR route /blog; serverside fetch blog posts page=1.
   b. Response HTML + initial state. Subsequent pagination uses fetch /api/v1/blog/posts?page=2 producing JSON appended client-side.
4. Search Query (/search?q=cloud)
   a. Client debounces input; after 300ms, call GET /api/v1/search?q=cloud.
   b. API queries Postgres full-text across union view; caches result for identical query for 30s.
   c. Response JSON updates results list; highlight terms client-side.
5. Contact Form Submission
   a. User fills form; front-end validates via Zod schema.
   b. POST /api/v1/forms/contact with JSON (multipart only if file present after pre-signed upload).
   c. API re-validates server-side; rate limit check (Redis). If fileToken provided, validates media pre-upload record before linking.
   d. Insert into form_submissions; enqueue job sendContactAcknowledgement + optional notify Slack/Email.
   e. Respond 202 or 201 with submission id.
6. Job Application
   a. Resume upload first: client calls POST /api/v1/forms/upload -> get pre-signed URL + fileToken.
   b. Browser PUTs file to object storage (S3/GCS). On success, application form POST includes fileToken.
   c. Backend stores submission and enqueues virus scan & HR notification job.
7. Admin Publishes Blog Post
   a. Admin UI sends POST /api/v1/admin/blog/posts.
   b. Service validates & inserts DB record status='draft'.
   c. On publish action (PATCH status 'published'): record updated, search index recalculation job queued, revalidation_queue entries added for affected pages (homepage, /blog, sitemap) and webhooks maybe sent.
   d. Background worker processes revalidation_queue: for each path, call Next.js revalidate endpoint or build internal cache flush; update status.
8. Media Asset Lifecycle
   a. Pre-signed upload created (status pending_scan).
   b. File uploaded directly to storage.
   c. Background virus scan job pulls from pending_scan list; if clean sets active; if infected sets quarantined and notifies admins.
9. Cache Invalidation
   a. Content update triggers compute of affected route list.
   b. Redis keys (e.g., nav:v1) deleted.
   c. CDN purge API called for specific paths (if necessary) or rely on unique ISR token changes.
10. Authentication Flow (Admin)
   a. Admin logs in -> POST /api/v1/auth/login returns JWT (access 15m) + refresh token (HTTP-only cookie or DB stored hashed).
   b. Access token attached to subsequent admin API calls (Authorization header).
   c. Refresh flow: POST /api/v1/auth/refresh rotates tokens.
   d. Logout invalidates refresh token (mark revoked).

Layer Responsibilities
Frontend (Next.js App Router)
- Page-level data fetching (server components) for SSR/ISR.
- Client components for forms, interactive filters, carousels.
- Global error boundary, loading skeletons, optimistic UI for pagination.

Backend API Service
- Input validation & normalization.
- Business rules (publish workflow, rate limit, sanitization).
- Data mapping to DTOs; enforce consistent success/error shape.

Database (PostgreSQL)
- Source of truth for structured content.
- Full-text search vector maintenance via generated columns.
- Audit & compliance (audit_log, soft delete).

Cache & Queue
- Redis: rate limiting counters, ephemeral caches (navigation), background job queue (BullMQ / custom via RSMQ).
- Object Storage: media assets & uploads.

Background Workers
- Run in separate process/pod; consume jobs: email, indexing, revalidation, media scan.
- Retries with exponential backoff; dead-letter queue after N failures.

Validation Pipeline (Forms & Admin Mutations)
1. Parse JSON/multipart, reject >size early.
2. Apply Zod schema; produce aggregated error map.
3. Sanitize HTML (if any) with DOMPurify server-side for rich text (admin only; public form disallow HTML).
4. Normalize fields (trim whitespace, lower-case email, etc.).
5. Enforce business rules (duplicate submission cooldown by ip_hash + same payload digest).

Security Controls
- Input sanitization (HTML whitelist for admin only).
- Output escaping via React auto-escaping, with explicitly sanitized trusted HTML.
- Rate limiting & IP hashing (salt rotated yearly).
- JWT signature verification & role check per protected endpoint.
- HTTPS enforced; HSTS header at edge.
- CSP policy: script-src 'self' trusted; images CDN; object none.
- File uploads scanned before activation.
- Secrets stored in vault (e.g., AWS Secrets Manager) not env baked into images.

Authentication & Authorization Flow Diagram (Text)
User(Admin) -> POST /auth/login -> JWT(access+refresh)
Admin UI -> Authorized CRUD endpoints (bearer) -> Services -> Repos -> DB
If 401 (expired) -> /auth/refresh -> new tokens

Publishing Workflow
Draft -> Editor Review -> Publish
- statuses: draft -> (PATCH publish) -> published
- Changing published content triggers: audit log entry, revalidation queue, optional webhook
- Unpublish: published -> draft (or archived) triggers invalidation.

Search Index Maintenance
- On entity publish/update: push computeSearchIndex(entityType, id)
- Worker loads row, extracts plain text, updates tsvector (Postgres handles automatically if generated). External search provider integration deferred.

Error Propagation
- Service throws typed AppError -> Express error layer maps to HTTP status -> standardized JSON.
- Unknown errors logged with correlation_id (UUID per request). Response includes correlation_id for support trace.

Observability Flow
- Each HTTP request logs: { ts, method, path, status, duration_ms, user_id?, ip_hash, correlation_id }
- OpenTelemetry spans wrap DB queries and external calls; metrics exported every 15s.
- Dashboard panels: P95 latency per endpoint, error rate %, queue depth, form submission counts.

Data Privacy Lifecycle
- form_submissions older than 24 months anonymization job daily (cron) scanning by created_at.
- audit_log retention 2 years -> archived to cold storage.

Deployment & Release Flow (High-Level)
1. Developer merges feature -> CI (lint, tests, build) -> image build.
2. Staging deploy; run migrations; synthetic smoke tests.
3. Content sync/test; approval -> production deploy via blue/green or rolling.
4. Post-deploy hook triggers revalidation of critical pages.

Edge Cases & Mitigations
- Simultaneous publish actions: use transaction with SELECT FOR UPDATE on row; last writer wins while creating separate audit entries.
- Large form attachments: reject early >15MB; chunked upload not supported initially.
- Malicious search queries: limit length (≤100 chars), strip control characters, enforce rate limit.
- Cache stampede: single-flight pattern for expensive recompute (e.g., homepage aggregate) using Redis lock key.

Sequence Example: Blog Post Publish
1. Admin PATCH /admin/blog/posts/:id { status: "published" }
2. Service validates state transition.
3. Transaction: update row, insert audit_log.
4. Enqueue: computeSearchIndex, revalidate paths ['/','/blog','/blog/:slug'].
5. Return success.
6. Worker updates search (if external) else skip; revalidation worker calls Next.js revalidate; marks queue done.

Sequence Example: Contact Form
1. User POST /forms/contact
2. Rate limiter check (Redis INCR key). If exceeded -> 429.
3. Validate & sanitize.
4. Insert form_submissions row.
5. Enqueue sendContactAcknowledgement + notify.
6. Respond 201 with { id }.
7. Worker builds email template, sends via provider, logs success metric.

Data Consistency Rules
- Soft delete sets deleted_at; queries for public data always filter deleted_at IS NULL.
- Any slug change triggers redirect entry insertion (old slug -> new path) and revalidation.

Configuration & Feature Flags
- Flags stored in JSON (db table config or external) e.g., enableLiveChat, enableNewsletter, searchProvider.
- Fetched at startup & cached; hot-reload via admin endpoint /api/v1/admin/config/reload (future).

Request Lifecycle Middleware Order
1. correlation_id injection
2. request timing start
3. security headers (helmet subset)
4. body parser (size limits)
5. rate limiter (configured per route group)
6. auth (JWT parse if present)
7. validation (route specific)
8. controller
9. error handler (logs + response)
10. metrics (duration)

Open Items / Assumptions
- No multi-tenant segregation required.
- Admin panel served from same origin /admin.*
- Live preview of draft pages implemented via draft token query param; bypass caching.
- WebSockets not required (no real-time dashboards initially); polling acceptable.

This operational flow couples previously defined API + schema elements into a coherent runtime behavior to guide implementation.

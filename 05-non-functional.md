# 05. Non-Functional Requirements

## 1. Performance
Targets (Initial Benchmarks)
- Largest Contentful Paint (LCP): < 2.2s on 75th percentile mobile (Fast 3G emulation) for homepage & key landing pages.
- Time to First Byte (TTFB): < 300ms edge-cached pages; < 600ms SSR listings.
- Core Web Vitals: CLS < 0.1; INP (was FID) < 200ms.
- API Response Times (P95): Public GET < 250ms; Write endpoints < 400ms; Admin bulk operations < 800ms.
- DB Query SLA: Simple SELECT P95 < 30ms; listing queries P95 < 80ms.
Optimizations
- Use Next.js Image optimization + AVIF/WEBP.
- Preconnect to CDN & font host (self-host fonts to reduce layout shift).
- Code splitting & route-level chunk analysis; dynamic import heavy components (TestimonialSlider, Carousels).
- HTTP/2 or HTTP/3 with ALPN.
- Brotli compression for text assets; compression threshold 512 bytes.
- Caching headers: Static assets immutably cached 1y with content hash.

## 2. Scalability
- Horizontal scaling stateless API behind load balancer; session-less (JWT).
- Database vertical baseline (e.g., 4 vCPU) with read replica readiness plan (logical replication) for scaling reads (future high traffic events).
- Use connection pool (max 20 per instance) to avoid saturation.
- Queue-based asynchronous workloads decouple spikes (form submissions, revalidation) from request path.
- CDN offloading media & static assets; origin shield to reduce cache miss storms.

## 3. Security
Controls
- HTTPS only; HSTS (max-age=31536000; includeSubDomains; preload) after validation.
- TLS minimum 1.2; prefer 1.3.
- CSP strict: default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' (minimize) plus analytics domain when added; object-src 'none'; frame-ancestors 'none'.
- Referrer-Policy: strict-origin-when-cross-origin.
- X-Content-Type-Options: nosniff.
- X-Frame-Options: DENY / or frame-ancestors via CSP.
- Input Validation: Zod + explicit allowlists for enums; sanitize HTML (DOMPurify) server-side for admin content.
- Output Encoding handled by React; avoid dangerouslySetInnerHTML except sanitized content.
- Password Storage: Argon2id (time cost tuned) or bcrypt (cost 12) fallback.
- Secrets: Managed by cloud secret manager; rotated every 90 days.
- Rate Limiting: As defined in API spec; store counters in Redis with sliding window.
- Brute Force Protection: Incremental backoff after successive failed logins; lock account after threshold (notify admin).
- JWT: short-lived (15m) access token; refresh token rotation with replay detection (store hashed refresh tokens; revoke on mismatch).
- File Upload: Content-Type validation, size limit, virus scanning (ClamAV container) before publish.
- Logging Redaction: No PII (email hashed for IP correlation only where possible). Form payload kept raw but access limited.
- Dependency Audits: Weekly automated (npm audit, GitHub Dependabot). Critical vulnerabilities patched within 48h.
- Security Testing: OWASP ZAP scan in CI (informational baseline), SAST (Semgrep), optional DAST monthly.
- Backups encrypted at rest (AES-256) & in transit.

## 4. Compliance & Privacy
- GDPR-style principles: data minimization (only collect necessary contact form fields).
- Data Retention: Form submissions anonymized after 24 months; jobs applications anonymized after 18 months.
- Access Logging: Admin actions audited (who changed what & when).
- Right to Erasure: Provide admin ability to anonymize a submission on request.
- Cookie Consent: Banner for marketing cookies (deferred analytics script until accepted).
- Encryption: All storage provider buckets enforce encryption at rest.

## 5. Reliability & Availability
- Target Uptime: 99.9% (<= 43.2 min downtime/month).
- Health Checks: /api/health (liveness) + deep check (DB + cache ping) /api/health?deep=1 (readiness).
- Circuit Breakers: For external email / chat providers; fail gracefully with queue fallback.
- Graceful Shutdown: Drain HTTP server, stop accepting new connections, finish in-flight requests (timeout 30s).
- Error Budgets: Track 5xx rate; if budget exceeded, freeze feature deploys until stabilized.

## 6. Observability
- Logging: Pino -> JSON -> centralized aggregator (ELK/OpenSearch). Correlation IDs per request.
- Metrics: Prometheus (node metrics, process_cpu_seconds_total, http_request_duration_seconds, queue_depth, db_pool_in_use).
- Tracing: OpenTelemetry instrumentation for HTTP + pg client.
- Dashboards: Latency, Error Rate, Throughput (RPS), Queue metrics, DB slow queries (>200ms log).
- Alerts: 5xx rate >2% over 5m, queue depth > 500, db connection saturation > 85%, error spikes on form submissions.

## 7. Maintainability
- Monorepo (optional) with shared types package (api-types) consumed by frontend & backend.
- Strict TypeScript everywhere; eslint + prettier enforced on commit (pre-commit hook + CI gate).
- Architectural Layers: No circular dependencies; service layer pure (no HTTP objects) for testability.
- Migrations automated & idempotent deployment pipeline.
- Documentation: OpenAPI spec generated from route definitions + zod schemas (zod-to-openapi) and published.

## 8. Test Strategy
- Unit Tests: Services, utilities (≥70% logic coverage early, target 85%).
- Integration Tests: API endpoints with ephemeral Postgres (testcontainers) & seeded data.
- Contract Tests: Ensure DTO alignment between backend and frontend types.
- Performance Tests: k6 or Artillery for key endpoints pre-launch.
- Security Tests: Auth flow misuse, rate limit bypass attempts.
- Visual Regression: Storybook + Chromatic (optional) for components.

## 9. Deployment & Environments
- Envs: dev (developer local), staging, production.
- Feature Branch Previews (Vercel) for frontend; staging API stable endpoint.
- Infrastructure as Code: Terraform (or CDK) describing DB, cache, storage, networking.
- Blue/Green or Rolling Deploy: Ensure zero downtime; run migrations before traffic switch if backward compatible.

## 10. Error Handling & User Feedback
Frontend
- Global error boundary for runtime errors presenting user-friendly message & retry option.
- API error codes mapped to localized messages; form shows field-level errors.
Backend
- Central error middleware; never leak stack traces to client in production (store in logs only).
- Custom AppError classification for consistent http mapping.

## 11. Internationalization (Future-Proofing)
- Content architecture prepared for locale column (schema reserved design); fallback en-US.
- Text outside CMS isolated in message dictionaries for future extraction.

## 12. Accessibility
- WCAG 2.2 AA baseline.
- Color Contrast: Ochre/orange components tested; fallback darker shade for text on accent backgrounds.
- Keyboard Navigation: All interactive components tabbable in logical order; focus states visible.
- ARIA Roles: carousels (role region + aria-roledescription), accordions proper semantics.
- Media: Alt text mandatory for logos (context: "Client: XYZ"). Decorative images empty alt.

## 13. Theming
- Design tokens exported (JSON + CSS variables). Light theme default; dark theme toggle defers until post-launch.
- Tokens names: color.accent.500, color.bg.surface, spacing.4, font.family.base, radius.sm, shadow.lg.

## 14. Rate Limiting & Abuse Prevention
- Sliding window algorithm (Redis) with Lua script to ensure atomic operations.
- Adaptive challenge: If IP triggers > 50 contact form 400s/day -> require captcha token.
- Bot detection heuristics: UA anomalies, repeated identical payload hashes.

## 15. Backup & Disaster Recovery
- RPO: 15 minutes (WAL archiving).
- RTO: 2 hours (restore from latest base + WAL apply).
- Quarterly DR drill documented & validated.

## 16. SEO & Indexing Integrity
- Auto-generated XML sitemap + robots.txt.
- Canonical tags for blog/news/case studies.
- 301 redirects table consulted at edge for old slugs.
- Avoid query parameter duplication; enforce lowercase slugs.

## 17. Analytics (Deferred until consent)
- Load analytics script only after marketing cookie consent.
- Server events (form submission) still logged internally (non-personal performance metrics) independent.

## 18. Governance & Change Management
- CHANGELOG maintained per release.
- ADRs (Architecture Decision Records) for major shifts (search backend, auth provider change, queue system change).
- Code Owners for critical directories enforce review from designated maintainers.

## 19. Capacity Planning (Initial)
- Expected RPS baseline: 5–20 sustained, bursts 100 (marketing launch). Architecture sized for 10x burst via autoscaling.
- Postgres: <5GB initial dataset first year; plan storage alerts at 70% usage.
- Media assets offloaded; DB stores only refs.

## 20. Open Risks & Mitigations
- Risk: Search performance degrade at scale. Mitigation: Plan migration path to dedicated search.
- Risk: ISR stale content after urgent takedown. Mitigation: On-demand revalidation + bypass param (?fresh=1) for immediate check.
- Risk: Spam form submissions. Mitigation: Honeypot + IP hash rate limit + optional captcha.
- Risk: Image asset bloat. Mitigation: Enforce compression & dimension validation at upload.

## 21. Assumptions
- Single region deployment initially; latency acceptable for target audience.
- Minimal real-time features needed; polling acceptable.
- Admin user volume small (<50) so simple RBAC sufficient.

These non-functional guidelines ensure a resilient, secure, performant, and maintainable foundation aligning with business objectives.

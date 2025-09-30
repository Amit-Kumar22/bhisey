# 06. Milestones & Deliverables Schedule

Estimation Philosophy
- Time units expressed in ideal engineering weeks (1 engineer full-time) unless stated. Real calendar time adjusts for reviews, parallelization, and resource count.
- Buffer ~15% reserved for unforeseen adjustments.
- Team Composition Suggestion: 1 Tech Lead (full-stack), 2 Frontend Engineers, 1 Backend Engineer, 1 Designer (part-time), 1 QA (part-time ramping later), 1 DevOps (fractional), 1 PM.

High-Level Phases
1. Inception & Foundations (Week 1)
2. Core Content & Theming (Weeks 2–3)
3. Dynamic Content & Resources (Weeks 4–5)
4. Forms, Careers & Search (Weeks 6–7)
5. Admin CMS & Publishing Workflow (Weeks 8–9)
6. Hardening, NFR Compliance & SEO (Weeks 10–11)
7. Launch Preparation & Production Cutover (Week 12)

Detailed Breakdown

Phase 1: Inception & Foundations (Week 1)
Deliverables:
- Finalized design tokens (ochre/orange palette, typography, spacing).
- Repo setup (monorepo or two repos) + CI pipeline (lint/test/build) + environment configuration skeleton.
- Initial Next.js app with routing scaffolding & base layout (Header, Footer, Theming tokens).
- Express API skeleton with health, auth placeholder, error middleware, OpenAPI scaffold.
- Database provisioning + migrations bootstrap (roles, users, navigation initial seed).
Acceptance Criteria:
- Dev environment spins up with one command.
- Linting & tests run automatically in CI.
Est. Effort: 1 week.

Phase 2: Core Content & Theming (Weeks 2–3)
Deliverables:
- HeroBanner, Navigation, Footer, CookieConsent, CTASection, ClientLogoMarquee components.
- Home, Services Overview, Why Kanda base pages (static copy placeholders).
- ISR strategy implemented (revalidation config).
- Accessibility baseline (skip link, focus outlines).
- Basic SEO tags generation utility.
Acceptance Criteria:
- Pages render with design fidelity for desktop & mobile breakpoints.
- Lighthouse performance & accessibility ≥85 on staging.
Est. Effort: 2 weeks.

Phase 3: Dynamic Content & Resources (Weeks 4–5)
Deliverables:
- Data models & API endpoints for services, verticals, partners, testimonials, awards, logos.
- Service & Vertical detail pages with dynamic fetch (ISR).
- Blog & News listing + detail SSR pages (no CMS editing yet—seed data).
- Case Studies listing (filters) + detail page (static seed data).
- Caching layer (Redis) for navigation & homepage aggregate.
Acceptance Criteria:
- Filtering and pagination functional (server-driven).
- Full-text search vector created; search endpoint stub returns combined results (even if sparse).
Est. Effort: 2 weeks.

Phase 4: Forms, Careers & Search (Weeks 6–7)
Deliverables:
- Contact form (front & back), upload pre-sign, email notification.
- Careers listing & job detail; application form with resume upload & virus scan job.
- Global search endpoint + frontend search component (CSR incremental results).
- Rate limiting & abuse prevention for forms and search.
Acceptance Criteria:
- Form submissions visible in DB; email acknowledgements sent in staging.
- Search returns aggregated results with highlighting.
- All security validation (file size/type) enforced.
Est. Effort: 2 weeks.

Phase 5: Admin CMS & Publishing Workflow (Weeks 8–9)
Deliverables:
- Admin authentication (JWT + refresh) + RBAC.
- Admin UI pages: Dashboard, Blog Posts CRUD, News CRUD, Case Studies CRUD, Services/Verticals/Partners editing, Media Library upload & status.
- Draft -> Publish workflow with audit log.
- On-demand revalidation endpoint wired.
- Background worker (BullMQ) for index, email, revalidation, virus scan.
Acceptance Criteria:
- Publishing a blog post triggers revalidation of listing & homepage.
- Audit log entries persisted on content changes.
Est. Effort: 2 weeks.

Phase 6: Hardening, NFR Compliance & SEO (Weeks 10–11)
Deliverables:
- Performance tuning (code splitting, image optimization audits).
- Security pass (headers, CSP, dependency audit clearance).
- Accessibility audit fixes (ARIA labels, keyboard traps resolved).
- Structured data (JSON-LD) injection for articles & organization.
- Sitemap & robots.txt automation.
- Load & stress test results with remediation.
Acceptance Criteria:
- Core Web Vitals targets met on test devices.
- No critical or high severity dependency vulnerabilities.
- Axe accessibility scan: zero serious/critical issues.
Est. Effort: 2 weeks.

Phase 7: Launch Preparation & Production Cutover (Week 12)
Deliverables:
- Production infrastructure provisioning & IaC finalization.
- Backup & monitoring dashboards live.
- Runbook (incident response, rollback procedure).
- Content migration (final data import) + redirect rules implemented.
- Final UAT sign-off & go-live plan.
Acceptance Criteria:
- Dry-run deployment matches expected state (checksum of migrations, health checks pass).
- Post-launch smoke tests automated.
Est. Effort: 1 week.

Parallel & Supporting Streams
- Design Iterations: Continual polish (weeks 2–6), component library documentation.
- QA Onboarding: Begins Week 3; test plans fleshed for functional & regression suites.
- Documentation: API docs updated each sprint; ADRs at decision points.

Risk & Mitigation Matrix (Selected)
- Scope Creep: Enforce change control—new verticals or features documented & sized separately.
- CMS Complexity Overrun: Limit initial WYSIWYG features; structured blocks only, revisit advanced editor later.
- Performance Regression: Weekly Lighthouse & k6 baselines tracked; regressions flagged in CI.
- Security Gap: Schedule security review end of Phase 5 before content freeze.

Resource Allocation (Indicative Percentage over timeline)
- Tech Lead: 70% build / 30% architecture & code review.
- Frontend Engineers: Peak load Phases 2–4 (90%), drop to 60% during Phase 5 while backend focuses admin.
- Backend Engineer: Peak Phases 3–5.
- QA: 20% early (test plan), 80% Phase 6–7.
- DevOps: Spikes at Phase 1, 5, 7 (infra, workers, scaling tests).

Effort Summary (Ideal Weeks)
- Phase 1: 1
- Phase 2: 2
- Phase 3: 2
- Phase 4: 2
- Phase 5: 2
- Phase 6: 2
- Phase 7: 1
Total: 12 (Add 15% buffer ≈ 13.8 weeks calendar; with parallel staffing can complete in ~8–10 calendar weeks).

Acceptance & Exit Criteria (Go-Live)
- All critical pages pass functional test suite.
- 0 open P1 defects; P2 <= 3 with workarounds; no security highs.
- Performance metrics within target thresholds.
- Monitoring & alerting validated with synthetic test.
- Backup restore test completed successfully within RTO.

Post-Launch Phase (Stabilization Weeks 13–14)
- Bug triage & hotfix cadence.
- Analytics instrumentation (post consent) & conversion funnel checks.
- Backlog grooming for future features (internationalization, advanced search, personalization).

Timeline Visualization (Text Gantt Simplified)
Week 1: [Foundations]
Weeks 2-3: [Core UI + Theming]
Weeks 4-5: [Dynamic Content]
Weeks 6-7: [Forms & Careers & Search]
Weeks 8-9: [Admin CMS]
Weeks 10-11: [Hardening/NFR]
Week 12: [Launch]

Dependencies
- Design tokens needed before widespread component build (Phase 2).
- Database schema stable by end Phase 3 before large content entry.
- Admin CMS must reach MVP before significant manual content migration (start of Phase 6).

Open Assumptions
- Content authors manageable (<5) so no granular workflow beyond draft/publish initially.
- Search complexity minimal (text relevance only) at launch.

This schedule is a blueprint; adapt sprint-by-sprint while protecting critical path items (schema stability, admin readiness, performance hardening).

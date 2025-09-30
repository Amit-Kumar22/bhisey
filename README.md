# Project Replatforming Specification

This repository contains planning documents for re-implementing kandasoft.com using Next.js (frontend), Node.js/Express (backend API), and PostgreSQL (database). No executable code yet—pure specification & architecture.

## Documents
- 01-site-structure.md — Complete sitemap, page/component specs, theming.
- 02-backend-apis.md — REST endpoints catalogue with request/response shapes & security notes.
- 03-database-schema.md — Relational model, entities, fields, indexes, relationships.
- 04-data-flow.md — End-to-end workflows: rendering, publishing, forms, caching, queues.
- 05-non-functional.md — Performance, security, scalability, accessibility & quality targets.
- 06-milestones.md — Phased implementation plan with estimates & deliverables.
- 07-quality-review.md — (Generated) Coverage matrix, assumptions, future enhancements.

## Tech Stack (Planned)
- Frontend: Next.js (App Router), TypeScript, CSS variables design tokens (ochre/orange theme), ISR + SSR hybrid.
- Backend: Node.js (Express/Fastify), Zod validation, OpenAPI generation, BullMQ for background jobs.
- Database: PostgreSQL + Redis (cache & rate limits), Object storage (S3 or equivalent) for media.
- Auth: JWT (admin only) with RBAC roles.

## High-Level Architecture
Browser → Next.js Edge (SSR/ISR) → API Service → PostgreSQL / Redis / Object Storage → Background Workers.

## Getting Started (Future Implementation Guidance)
1. Initialize monorepo (pnpm workspaces): apps/web, apps/api, packages/shared-types.
2. Implement shared zod schemas -> derive TS types & OpenAPI spec.
3. Scaffold database via Prisma (map enums & JSONB fields); generate migration SQL.
4. Build core components in Storybook to validate theme & accessibility before integration.
5. Implement content ingestion & admin panel iteratively following milestone plan.

## License & Ownership
Internal planning material; not for public redistribution without approval.

---
Refer to 07-quality-review.md for coverage verification and open assumptions.

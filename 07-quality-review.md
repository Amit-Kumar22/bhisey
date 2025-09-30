# 07. Quality Review & Assumptions Log

## Requirements Coverage Matrix
| Requirement | Location | Status |
|-------------|----------|--------|
| Site structure & all pages | 01-site-structure.md | Covered (routes + components + content sections) |
| Backend architecture & routes | 02-backend-apis.md | Covered (endpoints + schemas + errors) |
| Database schema design | 03-database-schema.md | Covered (tables, relationships, indexes) |
| Workflow & data flow | 04-data-flow.md | Covered (scenarios, sequences) |
| Auth / roles | 02-backend-apis.md, 04-data-flow.md, 05-non-functional.md | Covered (RBAC matrix) |
| Non-functional requirements | 05-non-functional.md | Covered (performance, security, etc.) |
| Milestones & deliverables | 06-milestones.md | Covered (phases + estimates) |
| Theming (ochre/orange) | 01-site-structure.md, 05-non-functional.md | Covered (tokens & contrast) |
| Forms handling & validation | 02-backend-apis.md, 04-data-flow.md, 05-non-functional.md | Covered |
| Error handling/logging | 02,04,05 docs | Covered (error shape, observability) |
| SEO & structured data | 01-site-structure.md, 05-non-functional.md | Covered |
| Accessibility | 01-site-structure.md, 05-non-functional.md | Covered |
| Performance considerations | 05-non-functional.md | Covered |

## Key Assumptions
1. Careers section will exist (including jobs & applications); if not required, related endpoints removable.
2. Initial build English-only; i18n deferred.
3. Admin user count small; no need for complex workflow states beyond draft/published/archived.
4. External search engine (Algolia/OpenSearch) not used at launch—Postgres full-text adequate.
5. Chat integration & newsletter opt-in are future enhancements; placeholder components safe.
6. No user-facing authentication (other than admin) at launch; portal features out of scope.
7. File upload size cap (15MB) is sufficient for expected attachments (resumes, RFP PDFs).
8. Data volume moderate; single primary db node adequate (<5GB year one) with replica readiness later.
9. External compliance frameworks (HIPAA specifics) not required for hosting marketing site assets (only potential case study content). If future requirement appears, additional controls needed.

## Risks & Recommendations
| Risk | Impact | Mitigation |
|------|--------|-----------|
| Scope creep in CMS features | Delay | Freeze WYSIWYG complexity; structured blocks only initially |
| Performance regression from heavy client bundles | Poor CWV | Continuous bundle analysis, dynamic imports |
| Stale ISR content after urgent takedown | Legal/brand | On-demand revalidate endpoint + purge list |
| Spam or abusive form submissions | Resource waste | Rate limit + honeypot + optional captcha toggle |
| Security misconfig (CSP lax) | Vulnerability | Predefined hardened helmet config + automated security test |
| Image bloat | Performance | Enforce dimension + compression at upload pipeline |
| Search irrelevance complaints | UX dissatisfaction | Log query -> zero-result analytics, adjust weighting |

## Future Enhancements (Post-Launch Backlog)
- Internationalization (i18n) with locale segment routing.
- Advanced search facets (service, vertical, year) & fuzzy matching.
- Newsletter subscription with double opt-in workflow.
- A/B testing infrastructure (feature flags + experimentation SDK).
- Server-side personalization (geolocation-based hero messaging).
- Dark mode theme toggle using prefers-color-scheme.
- Edge caching microservice for dynamic aggregated JSON (homepage snapshot) with stale-while-revalidate.
- Media optimization pipeline (automatic focal point & AI alt text suggestions).
- Integration with headless CMS (if internal authoring complexity grows) replacing custom admin for some entities.

## Outstanding Clarifications (To Confirm with Stakeholders)
1. Exact list of all verticals beyond healthcare & SaaS.
2. Whether a separate "About" page distinct from Team is required.
3. Need for whitepapers / gated resources (affects forms & tracking).
4. Preferred chat provider (Intercom, Drift, Crisp) for integration timeline.
5. Analytics stack (GA4 vs. Posthog) & consent categories mapping.

## Definition of Done (Documentation Phase)
- All requested specification dimensions provided in discrete markdown documents.
- Cross-references established (API ↔ DB ↔ Workflow ↔ NFR).
- Assumptions and open questions enumerated to de-risk implementation.

All core user requirements satisfied in current documentation set.

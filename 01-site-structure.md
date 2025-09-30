# 01. Site Structure & Page Specifications

Theme: Primary accent palette in ochre / orange spectrum (Base: #E97817, Darker: #C25F05, Light Accent: #FFB568, Complementary Neutrals: charcoal #222, mid-gray #666, light background #FDF9F4, white #FFFFFF). All interactive states (hover/focus/active) must meet WCAG 2.2 AA contrast.

Global Layout Foundations
- Layout Types: (A) Marketing Full-width Hero, (B) Content + Sidebar (optional), (C) Grid Showcase, (D) Form-centric, (E) Article/Post.
- Breakpoints: xs <480, sm 480-767, md 768-1023, lg 1024-1439, xl 1440+.
- Navigation: Sticky top bar (transparent over hero then solid on scroll). Mobile slide-in menu.
- Footer: Multi-column link groups + contact + social + legal.
- Reusable Blocks: HeroBanner, TrustLogosCarousel, AwardsStrip, TestimonialSlider, ServicesGrid, VerticalsGrid, BlogTeasers, CaseStudyCards, ContactForm, LocationsAccordion, CookieConsent, LiveChatLauncher, CTASection, PartnerBadges, IndustryExpertisePanel.
- Typography Scale (REM): H1 2.75, H2 2.0, H3 1.5, H4 1.25, Body 1.0, Small 0.875. Line-height 1.25–1.5 depending on element.
- Iconography: Lucide or Heroicons; ensure consistent stroke weight.
- Images: Next.js Image component with responsive sizes + AVIF/WEBP priority hero assets.

Primary Navigation (Top Menu)
1. Why Kanda (mega menu)
   - Sub-links: Partner by Design, Product Driven Engagement, People You Can Count On, Proven Success
2. Services (mega menu)
   - Sub-services: Custom Software Development, Mobile App Development, UX/UI Design, Digital Transformation, Cloud Engineering, DevOps Services, QA & Testing, Data & Analytics, AI & Machine Learning, Maintenance & Support
3. Verticals
   - Digital Health / Healthcare Software Development, SaaS, (others inferred: Finance, Education, Life Sciences, Real Estate – confirm)
4. Partners
   - AWS, Google Cloud, Microsoft Azure (and partner overview page)
5. Resources
   - News, Blog (Insights), Case Studies, (Whitepapers / Guides future), All Resources landing
6. Company
   - Team, Careers (if separate), Locations / About (if needed)
7. Contact Us (CTA highlighted button)

Secondary / Utility Navigation
- Phone link, Email, Social Icons (X, LinkedIn) maybe in top bar on large screens or footer only on mobile.

Sitemap (Planned Routes)
/ (Home)
/why-kanda/partner-by-design
/why-kanda/product-driven-engagement
/why-kanda/people-you-can-count-on
/why-kanda/proven-success
/services (Overview)
/services/custom-software-development
/services/mobile-application-development
/services/ui-ux-design
/services/digital-transformation
/services/cloud-engineering
/services/devops-services
/services/qa-testing
/services/data-and-analytics
/services/ai-machine-learning-services
/services/maintenance-support
/verticals (Overview)
/verticals/digital-health-product-software-development
/verticals/saas-software-development
/partners (Overview)
/partners/aws-development-services-solutions
/partners/google-cloud-platform-services-solutions
/partners/microsoft-azure-services
/resources (Hub)
/news (List)
/news/:slug (Detail)
/blog (List)
/blog/:slug (Article)
/case-studies (List)
/case-studies/:slug (Case Study Detail)
/team (Company / Team)
/careers (List of open roles) [Assumption: present or future]
/careers/:slug (Job Detail + application form)
/contact-us (Contact + locations)
/search (Global search for resources) [future optional]
/404, /500 (Error)
/api/health (Healthcheck)
/admin (CMS authentication gateway – protected)

Page Specifications

Home (/)
Purpose: High-level value prop, social proof, funnel to services/verticals/contact.
Layout: Type A multi-section scroll; anchor-able sections.
Key Sections & Components (approx order):
1. HeroBanner (headline, subhead, primary CTA Contact Us, secondary CTA View Services)
2. ClientLogoMarquee (looping logos; accessible pause on focus)
3. ProblemStatementStrip ("Product challenges?" text block)
4. KandaDifferenceGrid (3–4 pillars with icons)
5. CapabilitiesTeaser (ServicesGrid limited subset + link)
6. TestimonialsSlider (TestimonialSlider; alt text for logos; quote markup <figure>)
7. AwardsStrip (AwardsStrip; ARIA labeling list)
8. IndustryExpertisePanel (high-level verticals summary)
9. CaseStudyHighlightCarousel (case study teasers)
10. LatestNewsAndInsights (combined blog/news teasers)
11. CTASection (Reach out) with PartnerBadges
12. CookieConsent (lazy loaded) & LiveChatLauncher
Dynamic vs Static: Mostly marketing copy (ISR 1h). News, blog, case studies dynamic via CMS queries.
Forms: None except global chat; final CTA might embed minimal contact quick form (optional).

Why Kanda Subpages (Pattern)
Route Pattern: /why-kanda/:slug
Pages: Partner by Design, Product Driven Engagement, People You Can Count On, Proven Success.
Layout: Type A or B (hero + narrative + testimonials + CTA + related links).
Components: HeroBanner, RichTextSections (CMS-driven slices), TestimonialSlider (contextual), ContactTeaser, RelatedLinksList.
Dynamic: Content-managed (ISR 24h, revalidate on update webhook).
Forms: Embedded mini contact form near bottom.

Services Overview (/services)
Purpose: Showcase all service lines + partner badges + cross-linking to insights.
Layout: Type A -> service tiles grid -> partner badges -> client logos -> awards -> blog teasers.
Components: HeroBanner, ServicesGrid (all), PartnerBadges, ClientLogoMarquee, AwardsStrip, BlogTeasers, CTASection.
Dynamic: Services list dynamic (DB). Logos + awards dynamic. Mostly cached (ISR 6h).
Forms: None.

Individual Service Pages (/services/:serviceSlug)
Purpose: Deep-dive per service.
Sections: Hero (service value proposition), Problem/Challenges, Approach (ProcessSteps component), CapabilitiesList, ToolsStackLogos, RelevantCaseStudies, Testimonials, AwardsStrip, CTASection.
Dynamic: All CMS-driven structured content blocks (rich text + media). ISR 24h per page or on-demand revalidate.
Forms: CTA contact form at end.

Verticals Overview (/verticals)
Purpose: Industry expertise landing.
Sections: Hero, ClientLogoMarquee, VerticalCards grid, AwardsStrip, BlogTeasers, CTASection.
Dynamic: Vertical list, logos.

Vertical Detail (/verticals/:verticalSlug)
Similar pattern to service detail: Hero, IndustryChallenges, OurSolutions, Compliance/Regulatory callout, RelevantCaseStudies, Testimonials, CTA.

Partners Overview (/partners)
Purpose: Explain strategic partnerships and benefits.
Sections: Hero, BenefitsList (icons), PartnerBadges extended, ClientLogoMarquee, CTA.

Partner Detail (/partners/:partnerSlug)
Sections: Hero, Partnership Tiers/Certifications, CloudCapabilities, CaseStudies, BlogPostsTagged(partner), CTA.

Resources Hub (/resources)
Purpose: Aggregate news, insights, case studies with filters.
Components: Tabs or FilterBar (Resource Type), FeaturedResource, ResourceCards (paginated), NewsletterSignupForm (future), CTASection.
Dynamic: Paginated queries (SSR) + client transitions.

News List (/news)
Type E list with server pagination (query params ?page & pageSize). Sort newest first. Filter by category (optional future). Each item card: title, excerpt, date, tag(s).

News Detail (/news/:slug)
Article layout with: Hero (title, date), ArticleBody (MDX/HTML), ShareButtons, RelatedNews, BackLink, StructuredData (JSON-LD NewsArticle), CTASection.

Blog List (/blog) & Blog Detail (/blog/:slug)
Same pattern as News but use BlogPost schema, include reading time, author bio card, tags filter, canonical URL.

Case Studies List (/case-studies)
Grid / list filterable by service, vertical, technology tags. Search bar (debounced client call). Pagination (server). SEO metadata dynamic.

Case Study Detail (/case-studies/:slug)
Sections: Hero (problem/impact stats), ClientProfileCard, ChallengeSection, SolutionSection, ResultsMetrics (KPI highlight cards), TechnologyStack, RelatedCaseStudies, CTA.

Team (/team)
Purpose: Company narrative + testimonials.
Sections: Hero, MissionValues, LeadershipGrid (expand bios modal), CultureStats, Testimonials, CTA (Careers / Contact).
Dynamic: Leadership profiles from DB.

Careers (/careers)
Sections: Hero, OpenPositionsTable (filters: location, department, remote), LifeAtKanda (media gallery), ProcessSteps, BenefitsGrid, CTA (Join us form).
Dynamic: Positions from DB (status open/closed). SSR + client filter.

Career Detail (/careers/:slug)
Sections: Hero (title, location, department), JobDescription (rich text), Requirements, Benefits, ApplyForm (multipart for resume), RelatedJobs.
Forms: Application form (uploads PDF/DOCX) with anti-spam & validation.

Contact (/contact-us)
Layout: Type D.
Sections: Hero, ContactForm (Name, Email, Phone, Company, Message, File Upload, consent checkbox), ClientLogoMarquee, LocationsAccordion (global offices), CTA alt.
Validation: Required fields (Name, Email valid RFC5322, Message ≥30 chars). File: max 10MB, types PDF/DOC(DOCX)/TXT.

Search (/search) [Future]
Components: SearchInput (auto-suggest), ResultsList (typed: blog, news, case study, page), Facets.

System Pages (/404, /500)
Custom brand-styled error pages with CTA back to home or contact.

Admin (/admin)
Protected: Auth required (role admin or editor). Subsections: Dashboard, Content (Posts, Case Studies, Services, Verticals, Testimonials, Logos, Awards), Media Library, Users & Roles, Form Submissions.

Global Accessibility & Interaction Requirements
- Focus outlines always visible (2px solid accent or high-contrast variant #693300 on light backgrounds).
- Skip to main link at top.
- ARIA landmarks: header, nav, main, footer, complementary (as needed).
- Carousels: Provide previous/next buttons, announce changes via aria-live polite.
- Forms: Real-time validation + inline accessible error messages (aria-describedby linking).

Theming Strategy
- Use CSS variables (design tokens) at :root (e.g., --color-accent-500: #E97817).
- Supports dark mode future (design tokens prepared: accent remains, backgrounds invert, maintain 4.5:1 contrast).

Component Inventory (Detailed)
1. HeroBanner: Props {title, subtitle, ctas[], backgroundType(image|gradient|video), eyebrow?, themeVariant}. Responsive alignment adjustments.
2. ClientLogoMarquee: Props {logos[], speed, pauseOnHover, accessibleLabel}. Implementation: CSS scroll animation or Framer Motion; ensure reduced motion preference.
3. AwardsStrip: Props {awards[]}, alt text descriptive.
4. TestimonialSlider: Props {testimonials[], autoplay?, intervalMs}. Provide static list fallback if JS disabled.
5. ServicesGrid: Props {services[], columnsByBreakpoint}. Each tile: icon, title, excerpt, link.
6. VerticalCards: Similar to ServicesGrid.
7. BlogTeasers: Props {posts[], variant(grid|list)}.
8. CaseStudyCards: Props {caseStudies[], showFilters?}.
9. ProcessSteps: number + label + description; accessible ordered list.
10. ContactForm: Controlled form with schema (Zod) validation, file upload component, honeypot & CSRF token.
11. LocationsAccordion: Props {locations[]}, each with name, address, phone, mapLink, timezone.
12. CTASection: Props {heading, text, primaryCTA, secondaryCTA?}.
13. CookieConsent: Lazy mount; stores preference in cookie + localStorage; categories minimal (necessary, marketing optional future).
14. LiveChatLauncher: Placeholder integration config-driven (feature flagged).
15. PartnerBadges: Logo grid with partner tiers description.
16. ResourceFilterBar: Controlled filters (type, tags, search input) emits query state.
17. PaginationControls: Props {currentPage, totalPages} accessible nav role.
18. ShareButtons: Props {url, title, networks[]}; use <ul> with list items.
19. MetricsKPIGrid: Stats highlight with semantic <dl>.
20. TechnologyStack: Tag chips.
21. NewsletterSignupForm (future): email validation + consent.
22. SearchInput (future): debounced onChange, accessible combobox pattern.
23. AdminTable: Generic paginated table component.
24. FileUpload: Drag-drop + attachments preview; virus scan queued server-side.

Static vs Dynamic Content Matrix (Summary)
- Static/ISR: Marketing copy blocks, service descriptions, vertical narratives.
- Dynamic SSR: Resource listings (pagination/search), job listings, search results.
- On-demand Revalidation: Triggered by admin content updates via secure webhook.

SEO & Metadata Strategy
- Each page defines title (≤60 chars), meta description (≤155 chars), canonical URL.
- Open Graph tags for shareable resources (blog, news, case studies).
- Structured Data (JSON-LD): BreadcrumbList, Article/NewsArticle, Organization, Website, FAQ (where applicable).
- Sitemap generation nightly + on publish events.

Assumptions & Open Items
- Careers section exists or will be introduced; confirm its scope.
- Additional verticals beyond healthcare + SaaS to enumerate later.
- Whitepapers/Guides not currently surfaced but placeholder allowed.
- No authenticated end-user portal besides admin CMS.
- Live chat vendor TBD (Intercom/Drift) – stub component initially.

This file defines the UI/UX and structural foundation enabling the backend & data model alignment described in subsequent documents.

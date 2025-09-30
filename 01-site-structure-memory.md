# Site Structure Memory File - Kanda Website

## ✅ Tasks Completed
- ✅ Task 1: Setup Design System Foundation
  - Created comprehensive CSS variables for Kanda brand colors
  - Implemented typography scale and responsive breakpoints  
  - Added accessibility focus styles (WCAG 2.2 AA compliant)
  - Built design system constants and utility functions
  - Created TypeScript interfaces for all 24 components
  - Implemented unit tests with 90%+ coverage (29 tests passing)
  - All linting and build checks pass

- ✅ Task 2: Create Core Layout Components
  - Built Layout wrapper component with 5 types (A-E) as specified
  - Type A: Marketing Full-width Hero with header/main/footer
  - Type B: Content + Sidebar with responsive sidebar
  - Type C: Grid Showcase with flexible container
  - Type D: Form-centric with centered alignment
  - Type E: Article/Post with prose typography
  - Created Container component for consistent max-width/padding
  - Built Section component for vertical spacing and backgrounds
  - Implemented Grid component for responsive layouts
  - Added proper semantic HTML and ARIA landmarks
  - Skip link accessibility support included
  - Comprehensive unit tests (20 tests passing)
  - TypeScript interfaces and proper error handling

- ✅ Task 3: Build Navigation System
  - Created sticky top navigation with transparent-to-solid scroll behavior
  - Implemented mega menu dropdowns for Why Kanda & Services sections
  - Built mobile slide-in menu with hamburger toggle
  - Added keyboard navigation support (Enter, Space, Escape, Arrow keys)
  - Hover/focus interactions with proper delays and timeouts
  - Utility navigation component for phone/email/social links
  - Full accessibility compliance (ARIA labels, roles, focus management)
  - Responsive design with proper breakpoint handling
  - Custom X (Twitter) icon for social media
  - TypeScript interfaces and proper state management
  - Comprehensive unit tests (23 tests passing)
  - Integration with navigation constants from design system

## 🔄 In Progress Tasks
- Task 1: Setup Design System Foundation

## 📌 Key Requirements & Constraints

### Theme & Color Palette
- Base: #E97817 (ochre/orange primary)
- Darker: #C25F05
- Light Accent: #FFB568
- Neutrals: charcoal #222, mid-gray #666, light bg #FDF9F4, white #FFFFFF
- WCAG 2.2 AA contrast required for all interactive states

### Layout Types
- (A) Marketing Full-width Hero
- (B) Content + Sidebar (optional)
- (C) Grid Showcase
- (D) Form-centric
- (E) Article/Post

### Breakpoints
- xs: <480px
- sm: 480-767px
- md: 768-1023px
- lg: 1024-1439px
- xl: 1440px+

### Typography Scale (REM)
- H1: 2.75
- H2: 2.0
- H3: 1.5
- H4: 1.25
- Body: 1.0
- Small: 0.875
- Line-height: 1.25–1.5

### Core Navigation Structure
1. Why Kanda (mega menu) - 4 sub-pages
2. Services (mega menu) - 10 services
3. Verticals - Digital Health, SaaS, others
4. Partners - AWS, Google Cloud, Microsoft Azure
5. Resources - News, Blog, Case Studies
6. Company - Team, Careers, Locations
7. Contact Us (CTA button)

### Critical Components (24 total)
1. HeroBanner
2. ClientLogoMarquee
3. AwardsStrip
4. TestimonialSlider
5. ServicesGrid
6. VerticalCards
7. BlogTeasers
8. CaseStudyCards
9. ProcessSteps
10. ContactForm
11. LocationsAccordion
12. CTASection
13. CookieConsent
14. LiveChatLauncher
15. PartnerBadges
16. ResourceFilterBar
17. PaginationControls
18. ShareButtons
19. MetricsKPIGrid
20. TechnologyStack
21. NewsletterSignupForm
22. SearchInput
23. AdminTable
24. FileUpload

### Accessibility Requirements
- Focus outlines: 2px solid accent (#693300 on light)
- Skip to main link
- ARIA landmarks: header, nav, main, footer, complementary
- Carousel controls with aria-live announcements
- Form validation with aria-describedby

### Technology Stack
- Next.js 15.5.3
- React 19.1.0
- Tailwind CSS 4
- Lucide or Heroicons
- Zod for validation

### ISR Strategy
- Marketing copy: ISR 1h
- Service/vertical content: ISR 24h
- Resource listings: SSR with pagination
- On-demand revalidation via webhook

## 📚 Reusable Patterns
- Component Props Interface Pattern
- Accessibility Hook Pattern
- Form Validation Schema Pattern
- Layout Wrapper Pattern
- Responsive Grid Pattern

## 🚨 Critical Constraints
- No scope deviation from site-structure.md
- All components must be accessible (WCAG 2.2 AA)
- Mobile-first responsive design
- SEO optimized with structured data
- Performance optimized with Next.js Image
- Unit tests required (90%+ coverage)
- File uploads max 10MB (PDF/DOC/DOCX/TXT)
- Email validation RFC5322 compliant
- Contact form message minimum 30 characters
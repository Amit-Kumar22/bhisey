/**
 * Design System Constants - Bhisey Website
 * Centralized design tokens for consistent theming and responsive design
 */

// Color Palette
export const colors = {
  accent: {
    500: '#E97817', // Base ochre/orange
    600: '#C25F05', // Darker accent
    300: '#FFB568', // Light accent
  },
  neutral: {
    charcoal: '#222222',
    gray: '#666666',
    lightBg: '#FDF9F4',
    white: '#FFFFFF',
  },
  focus: {
    light: '#693300', // High contrast for light backgrounds
    dark: '#FFB568',  // Light accent for dark backgrounds
    ring: '#E97817',
  },
} as const;

// Typography Scale (REM values)
export const typography = {
  fontSize: {
    h1: '2.75rem',
    h2: '2rem',
    h3: '1.5rem',
    h4: '1.25rem',
    body: '1rem',
    small: '0.875rem',
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

// Breakpoints (mobile-first)
export const breakpoints = {
  xs: 480,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1440,
} as const;

// Spacing Scale
export const spacing = {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '3rem',  // 48px
  '3xl': '4rem',  // 64px
} as const;

// Focus Ring
export const focus = {
  width: '2px',
  offset: '2px',
} as const;

// Layout Constants
export const layout = {
  maxWidth: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  container: {
    padding: {
      xs: '1rem',
      sm: '1.5rem',
      md: '2rem',
      lg: '3rem',
    },
  },
} as const;

// Animation Durations
export const animation = {
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
} as const;

// Z-Index Scale
export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
  toast: 1070,
} as const;

// Component Sizes
export const sizes = {
  button: {
    sm: {
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
    },
    md: {
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
    },
    lg: {
      padding: '1rem 2rem',
      fontSize: '1.125rem',
    },
  },
  input: {
    sm: {
      padding: '0.5rem 0.75rem',
      fontSize: '0.875rem',
    },
    md: {
      padding: '0.75rem 1rem',
      fontSize: '1rem',
    },
    lg: {
      padding: '1rem 1.25rem',
      fontSize: '1.125rem',
    },
  },
} as const;

// Navigation Configuration
export const navigation = {
  primary: [
    {
      label: 'Why Bhisey',
      href: '/why-Bhisey',
      hasDropdown: true,
      children: [
        { label: 'Partner by Design', href: '/why-Bhisey/partner-by-design' },
        { label: 'Product Driven Engagement', href: '/why-Bhisey/product-driven-engagement' },
        { label: 'People You Can Count On', href: '/why-Bhisey/people-you-can-count-on' },
        { label: 'Proven Success', href: '/why-Bhisey/proven-success' },
      ],
    },
    {
      label: 'Services',
      href: '/services',
      hasDropdown: true,
      children: [
        { label: 'Custom Software Development', href: '/services/custom-software-development' },
        { label: 'Software Product Development', href: '/services/software-product-development' },
        { label: 'Dedicated Development Teams', href: '/services/dedicated-development-teams' },
        { label: 'UX/UI Design', href: '/services/ui-ux-design' },
        { label: 'DevOps Services', href: '/services/devops-services' },
        // { label: 'Digital Transformation', href: '/services/digital-transformation' },
        // { label: 'Cloud Engineering', href: '/services/cloud-engineering' },
        // { label: 'DevOps Services', href: '/services/devops-services' },
        // { label: 'QA & Testing', href: '/services/qa-testing' },
        { label: 'Data & Analytics', href: '/services/data-and-analytics' },
        { label: 'AI & Machine Learning', href: '/services/ai-and-machine-learning-services' },
        // { label: 'Maintenance & Support', href: '/services/maintenance-support' },
      ],
    },
    {
      label: 'Verticals',
      href: '/verticals',
      hasDropdown: true,
      children: [
        { label: 'Partner by Design', href: '/verticals/digital-health-product-software-development' },
        { label: 'Fintech', href: '/verticals/software-development-for-life-sciences' },
        { label: 'Life Sciences', href: '/verticals/adtech-and-marketing-technology-solutions' },
        { label: 'AdTech & MarTech', href: '/verticals/software-development-services-for-nonprofits' },
      ],
    },
    {
      label: 'Partners',
      href: '/partners',
      hasDropdown: true,
      children: [
        { label: 'AWS', href: '/partners/aws-development-services-solutions' },
        { label: 'Google Cloud', href: '/partners/google-cloud-platform-services-solutions' },
        { label: 'Microsoft Azure', href: '/partners/microsoft-azure-services' },
      ],
    },
    {
      label: 'Resources',
      href: '/resources',
      hasDropdown: true,
      children: [
        { label: 'News', href: '/resources/news' },
        { label: 'Blog', href: '/resources/blog' },
        { label: 'Case Studies', href: '/resources/case-studies' },
      ],
    },
    {
      label: 'Company',
      href: '/company',
      hasDropdown: true,
      children: [
        { label: 'Team', href: '/company/teams' },
        { label: 'Contact', href: '/contact-us' },
      ],
    },
  ],
  secondary: [
    { label: 'Contact Us', href: '/contact-us', isButton: true },
  ],
  utility: [
    { label: 'Phone', href: 'tel:+1234567890', icon: 'Phone' },
    { label: 'Email', href: 'mailto:hello@Bhisey.com', icon: 'Mail' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/Bhisey', icon: 'Linkedin' },
    { label: 'X (Twitter)', href: 'https://x.com/Bhisey', icon: 'Twitter' },
  ],
} as const;

// Component Variants
export const variants = {
  button: {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
  },
  card: {
    elevated: 'card-elevated',
    outlined: 'card-outlined',
    flat: 'card-flat',
  },
  text: {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    body: 'text-body',
    small: 'text-small',
  },
} as const;

// Accessibility Constants
export const a11y = {
  skipLinkText: 'Skip to main content',
  landmarks: {
    header: 'Site header',
    nav: 'Main navigation',
    main: 'Main content',
    footer: 'Site footer',
    complementary: 'Sidebar',
    search: 'Search',
  },
  reducedMotion: {
    animationDuration: '0.01ms',
    transitionDuration: '0.01ms',
  },
} as const;

const designSystem = {
  colors,
  typography,
  breakpoints,
  spacing,
  focus,
  layout,
  animation,
  zIndex,
  sizes,
  navigation,
  variants,
  a11y,
};

export default designSystem;
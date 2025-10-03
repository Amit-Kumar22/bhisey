/**
 * TypeScript interfaces for component props and data structures
 */

import { ReactNode } from 'react';

// Re-export API validation types
export * from '../lib/api/validation';

// Base component props
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  id?: string;
}

// Link/Button props
export interface CTAProps {
  href: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  isExternal?: boolean;
  ariaLabel?: string;
  text: string;
}

// Image props
export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

// Layout component props
export interface LayoutProps extends BaseComponentProps {
  type: 'marketing' | 'content' | 'grid' | 'form' | 'article';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  padding?: 'sm' | 'md' | 'lg';
}

// HeroBanner component props
export interface HeroBannerProps extends BaseComponentProps {
  title: string;
  subtitle?: string;
  primaryCta?: CTAProps;
  secondaryCta?: CTAProps;
  backgroundImage?: string;
  variant?: 'standard' | 'fullscreen' | 'compact';
  overlay?: 'dark' | 'light' | 'gradient' | 'none';
  alignment?: 'center' | 'left' | 'right';
  'aria-label'?: string;
}

// Logo/Client props
export interface LogoProps {
  name: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  href?: string;
}

// ClientLogoMarquee component props
export interface ClientLogoMarqueeProps extends BaseComponentProps {
  title?: string;
  logos: LogoProps[];
  variant?: 'standard' | 'compact' | 'large';
  speed?: 'slow' | 'medium' | 'fast';
  pauseOnHover?: boolean;
  showTitle?: boolean;
  'aria-label'?: string;
}

// Awards/Testimonial props
export interface AwardProps {
  name: string;
  src: string;
  alt?: string;
  year?: string;
  description?: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  company?: string;
  image?: string;
}

// AwardsStrip component props
export interface AwardsStripProps extends BaseComponentProps {
  title?: string;
  awards: AwardProps[];
  variant?: 'standard' | 'compact' | 'large';
  layout?: 'horizontal' | 'vertical' | 'masonry';
  showTitle?: boolean;
  backgroundColor?: 'light' | 'dark' | 'accent';
  'aria-label'?: string;
}

// TestimonialSlider component props
export interface TestimonialSliderProps extends BaseComponentProps {
  testimonials: TestimonialProps[];
  title?: string;
  variant?: 'standard' | 'compact' | 'large';
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showNavigation?: boolean;
  showDots?: boolean;
  showTitle?: boolean;
  'aria-label'?: string;
}

// Service/Vertical props
export interface ServiceProps {
  title: string;
  excerpt: string;
  slug: string;
  icon?: string;
  href: string;
}

export interface VerticalProps {
  title: string;
  excerpt: string;
  slug: string;
  icon?: string;
  href: string;
  image?: ImageProps;
}

// Grid component props
export interface ServicesGridProps extends BaseComponentProps {
  services: ServiceProps[];
  columnsByBreakpoint?: Record<string, number>;
}

export interface VerticalCardsProps extends BaseComponentProps {
  verticals: VerticalProps[];
  columnsByBreakpoint?: Record<string, number>;
}

// Blog/News props
export interface BlogPostProps {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  author?: {
    name: string;
    avatar?: ImageProps;
  };
  featuredImage?: ImageProps;
  tags?: string[];
  readingTime?: number;
}

export interface NewsItemProps {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  category?: string;
  featuredImage?: ImageProps;
}

// Content teasers
export interface BlogTeasersProps extends BaseComponentProps {
  posts: BlogPostProps[];
  variant?: 'grid' | 'list';
}

// Case Study props
export interface CaseStudyProps {
  title: string;
  excerpt: string;
  slug: string;
  client: string;
  industry: string;
  services: string[];
  technologies: string[];
  featuredImage?: ImageProps;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface CaseStudyCardsProps extends BaseComponentProps {
  caseStudies: CaseStudyProps[];
  showFilters?: boolean;
}

// Process/Steps props
export interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export interface ProcessStepsProps extends BaseComponentProps {
  steps: ProcessStepProps[];
}

// Form props
export interface ContactFormProps extends BaseComponentProps {
  variant?: 'full' | 'mini';
  onSubmit: (data: ContactFormData) => Promise<void>;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  file?: File;
  consent: boolean;
}

// Location props
export interface LocationProps {
  name: string;
  address: string;
  phone?: string;
  mapLink?: string;
  timezone?: string;
}

export interface LocationsAccordionProps extends BaseComponentProps {
  locations: LocationProps[];
}

// CTA Section props
export interface CTASectionProps extends BaseComponentProps {
  heading: string;
  text?: string;
  primaryCTA: CTAProps;
  secondaryCTA?: CTAProps;
  variant?: 'default' | 'centered' | 'split';
}

// Partner props
export interface PartnerProps {
  name: string;
  logo: LogoProps;
  tier?: 'strategic' | 'certified' | 'partner';
  href?: string;
}

export interface PartnerBadgesProps extends BaseComponentProps {
  partners: PartnerProps[];
}

// Filter/Pagination props
export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

export interface ResourceFilterBarProps extends BaseComponentProps {
  filters: {
    type?: FilterOption[];
    tags?: FilterOption[];
  };
  searchValue?: string;
  onFilterChange: (filters: Record<string, string[]>) => void;
  onSearchChange: (search: string) => void;
}

export interface PaginationControlsProps extends BaseComponentProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// Share props
export interface ShareButtonsProps extends BaseComponentProps {
  url: string;
  title: string;
  networks: ('facebook' | 'twitter' | 'linkedin' | 'email')[];
}

// Metrics props
export interface MetricProps {
  label: string;
  value: string;
  change?: {
    value: string;
    trend: 'up' | 'down' | 'neutral';
  };
}

export interface MetricsKPIGridProps extends BaseComponentProps {
  metrics: MetricProps[];
}

// Technology Stack props
export interface TechnologyProps {
  name: string;
  category?: string;
  logo?: LogoProps;
}

export interface TechnologyStackProps extends BaseComponentProps {
  technologies: TechnologyProps[];
  variant?: 'chips' | 'grid' | 'list';
}

// Navigation props
export interface NavigationItemProps {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isButton?: boolean;
  children?: NavigationItemProps[];
}

export interface NavigationProps extends BaseComponentProps {
  items: NavigationItemProps[];
  variant?: 'primary' | 'secondary' | 'utility';
}

// SEO props
export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  structuredData?: Record<string, any>;
}

// Page layout props
export interface PageLayoutProps extends BaseComponentProps {
  seo: SEOProps;
  layout: LayoutProps;
  skipLinkTarget?: string;
}

// Admin/CMS props
export interface AdminTableProps<T = any> extends BaseComponentProps {
  data: T[];
  columns: {
    key: keyof T;
    label: string;
    sortable?: boolean;
    render?: (value: any, row: T) => ReactNode;
  }[];
  pagination?: PaginationControlsProps;
  onSort?: (column: keyof T, direction: 'asc' | 'desc') => void;
  onRowClick?: (row: T) => void;
}

// File upload props
export interface FileUploadProps extends BaseComponentProps {
  accept?: string;
  maxSize?: number;
  multiple?: boolean;
  onFileSelect: (files: File[]) => void;
  onFileRemove?: (index: number) => void;
  dragAndDrop?: boolean;
  previewType?: 'list' | 'grid';
}

// Error boundary props
export interface ErrorBoundaryProps extends BaseComponentProps {
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: any) => void;
}

// API response types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code?: string;
  };
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Content management types
export interface CMSContent {
  id: string;
  type: 'page' | 'post' | 'case-study' | 'service' | 'vertical';
  title: string;
  slug: string;
  content: any; // Rich content blocks
  status: 'draft' | 'published' | 'archived';
  publishedAt?: string;
  updatedAt: string;
  author?: {
    id: string;
    name: string;
  };
  seo: SEOProps;
}
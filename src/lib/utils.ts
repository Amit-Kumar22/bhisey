/**
 * Utility functions for responsive design and accessibility
 */

import { breakpoints } from './constants';

// Media query helpers
export const media = {
  xs: `(max-width: ${breakpoints.xs - 1}px)`,
  sm: `(min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 1}px)`,
  md: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
  lg: `(min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl - 1}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  minSm: `(min-width: ${breakpoints.sm}px)`,
  minMd: `(min-width: ${breakpoints.md}px)`,
  minLg: `(min-width: ${breakpoints.lg}px)`,
  minXl: `(min-width: ${breakpoints.xl}px)`,
  maxSm: `(max-width: ${breakpoints.md - 1}px)`,
  maxMd: `(max-width: ${breakpoints.lg - 1}px)`,
  maxLg: `(max-width: ${breakpoints.xl - 1}px)`,
} as const;

// CSS class helpers
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Screen reader text helper
export const srOnly = (text: string): { children: string; className: string } => ({
  children: text,
  className: 'sr-only',
});

// Accessibility helpers
export const a11yHelpers = {
  // Generate unique IDs for form fields and ARIA attributes
  generateId: (prefix: string = 'id'): string => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },

  // ARIA label helpers
  ariaLabel: (label: string) => ({ 'aria-label': label }),
  ariaLabelledBy: (id: string) => ({ 'aria-labelledby': id }),
  ariaDescribedBy: (id: string) => ({ 'aria-describedby': id }),
  ariaExpanded: (expanded: boolean) => ({ 'aria-expanded': expanded }),
  ariaHidden: (hidden: boolean = true) => ({ 'aria-hidden': hidden }),
  ariaLive: (type: 'polite' | 'assertive' | 'off' = 'polite') => ({ 'aria-live': type }),

  // Focus management
  focusableElements: [
    'a[href]',
    'area[href]',
    'input:not([disabled]):not([tabindex="-1"])',
    'select:not([disabled]):not([tabindex="-1"])',
    'textarea:not([disabled]):not([tabindex="-1"])',
    'button:not([disabled]):not([tabindex="-1"])',
    'iframe',
    'object',
    'embed',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable]',
  ].join(','),

  // Keyboard navigation helpers
  isEnterOrSpace: (event: KeyboardEvent): boolean => {
    return event.key === 'Enter' || event.key === ' ';
  },
  isEscape: (event: KeyboardEvent): boolean => {
    return event.key === 'Escape';
  },
  isArrowKey: (event: KeyboardEvent): boolean => {
    return ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key);
  },
};

// Responsive image helpers
export const imageHelpers = {
  // Generate responsive sizes attribute
  responsiveSizes: (sizes: Record<string, string>): string => {
    const sizeQueries = Object.entries(sizes).map(([breakpoint, size]) => {
      if (breakpoint === 'default') return size;
      return `${media[breakpoint as keyof typeof media]} ${size}`;
    });
    return sizeQueries.join(', ');
  },

  // Generate Next.js Image props for responsive images
  responsiveImageProps: (src: string, alt: string, sizes?: Record<string, string>) => ({
    src,
    alt,
    sizes: sizes ? imageHelpers.responsiveSizes(sizes) : '100vw',
    priority: false,
    quality: 85,
  }),
};

// Form validation helpers
export const validation = {
  // Email validation (RFC5322 compliant)
  email: (email: string): boolean => {
    if (!email || email.length === 0) return false;
    if (email.includes('..')) return false; // Double dots not allowed
    if (email.includes(' ')) return false; // Spaces not allowed
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  },

  // Phone validation
  phone: (phone: string): boolean => {
    const cleaned = phone.replace(/\s+/g, '');
    const phoneRegex = /^[\+]?[1-9][\d]{7,14}$/;
    return phoneRegex.test(cleaned);
  },

  // File validation
  file: {
    maxSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'],
    allowedExtensions: ['.pdf', '.doc', '.docx', '.txt'],
    
    validateFile: (file: File) => {
      const errors: string[] = [];
      
      if (file.size > validation.file.maxSize) {
        errors.push('File size must be less than 10MB');
      }
      
      if (!validation.file.allowedTypes.includes(file.type)) {
        errors.push('File type must be PDF, DOC, DOCX, or TXT');
      }
      
      return {
        isValid: errors.length === 0,
        errors,
      };
    },
  },

  // Message validation (minimum 30 characters)
  message: (message: string): boolean => {
    return message.trim().length >= 30;
  },
};

// Animation helpers
export const animation = {
  // Reduced motion check
  prefersReducedMotion: (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Safe animation with reduced motion fallback
  safeAnimation: (animationClass: string, reducedClass: string = ''): string => {
    return animation.prefersReducedMotion() ? reducedClass : animationClass;
  },
};

// SEO helpers
export const seo = {
  // Generate page title with brand
  title: (pageTitle: string, includesBrand: boolean = true): string => {
    return includesBrand ? `${pageTitle} | Bhisey Software` : pageTitle;
  },

  // Truncate description to SEO limits
  description: (desc: string, maxLength: number = 155): string => {
    if (desc.length <= maxLength) return desc;
    return desc.substring(0, maxLength - 3).trim() + '...';
  },

  // Generate canonical URL
  canonical: (path: string, baseUrl: string = 'https://Bhisey.com'): string => {
    return `${baseUrl}${path}`;
  },
};

// Performance helpers
export const performance = {
  // Debounce function
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Lazy loading intersection observer
  createIntersectionObserver: (
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ): IntersectionObserver | null => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return null;
    
    return new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...options,
    });
  },
};

const utils = {
  media,
  cn,
  srOnly,
  a11yHelpers,
  imageHelpers,
  validation,
  animation,
  seo,
  performance,
};

export default utils;
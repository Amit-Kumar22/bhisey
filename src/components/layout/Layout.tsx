"use client";
/**
 * Layout Component - Core layout wrapper for different page types
 * Provides semantic HTML structure with ARIA landmarks and responsive design
 */

import { ReactNode, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils';
import { LayoutProps } from '../../types';
import Navigation from '../navigation/Navigation';
import Footer from './Footer';

interface LayoutComponentProps extends LayoutProps {
  children: ReactNode;
  skipLinkTarget?: string;
}

export default function Layout({
  type,
  maxWidth = 'xl',
  padding = 'md',
  className,
  children,
  skipLinkTarget = 'main-content',
  ...props
}: LayoutComponentProps) {
  const getPaddingClass = () => {
    switch (padding) {
      case 'sm':
        return 'px-4';
      case 'lg':
        return 'px-8';
      case 'md':
      default:
        return 'px-6';
    }
  };

  const getMaxWidthClass = () => {
    switch (maxWidth) {
      case 'sm':
        return 'max-w-screen-sm';
      case 'md':
        return 'max-w-screen-md';
      case 'lg':
        return 'max-w-screen-lg';
      case '2xl':
        return 'max-w-screen-2xl';
      case 'xl':
      default:
        return 'max-w-screen-xl';
    }
  };

  const pathname = usePathname();
  const showFooter = useMemo(() => !pathname.startsWith('/admin'), [pathname]);

  return (
    <div className={cn('min-h-screen flex flex-col', className)} {...props}>
      {/* Skip to main content link */}
      <a 
        href={`#${skipLinkTarget}`}
        className="skip-link"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>

      {/* Layout Type Marketing: Full-width Hero */}
      {type === 'marketing' && (
        <>
          <Navigation />
          <main 
            id={skipLinkTarget}
            className="flex-1"
            role="main"
            aria-label="Main content"
          >
            {children}
          </main>
          {showFooter && <Footer />}
        </>
      )}

      {/* Layout Type Content: Content + Sidebar */}
      {type === 'content' && (
        <>
          <Navigation />
          <main 
            id={skipLinkTarget}
            className={cn(
              'flex-1 flex',
              getMaxWidthClass(),
              'mx-auto',
              getPaddingClass(),
              'py-8 gap-8'
            )}
            role="main"
            aria-label="Main content"
          >
            <div className="flex-1">
              {children}
            </div>
            <aside 
              className="w-80 flex-shrink-0"
              role="complementary"
              aria-label="Sidebar content"
            >
              {/* Sidebar content will be passed as a prop or context */}
            </aside>
          </main>
          {showFooter && <Footer />}
        </>
      )}

      {/* Layout Type Grid: Grid Showcase */}
      {type === 'grid' && (
        <>
          <Navigation />
          <main 
            id={skipLinkTarget}
            className={cn(
              'flex-1',
              getMaxWidthClass(),
              'mx-auto',
              getPaddingClass(),
              'py-8'
            )}
            role="main"
            aria-label="Main content"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {children}
            </div>
          </main>
          {showFooter && <Footer />}
        </>
      )}

      {/* Layout Type Form: Form-centric */}
      {type === 'form' && (
        <>
          <Navigation />
          <main 
            id={skipLinkTarget}
            className={cn(
              'flex-1 flex items-center justify-center',
              getPaddingClass(),
              'py-12'
            )}
            role="main"
            aria-label="Main content"
          >
            <div className="w-full max-w-2xl">
              {children}
            </div>
          </main>
          {showFooter && <Footer />}
        </>
      )}

      {/* Layout Type Article: Article/Post */}
      {type === 'article' && (
        <>
          <Navigation />
          <main 
            id={skipLinkTarget}
            className={cn(
              'flex-1',
              'max-w-4xl mx-auto',
              getPaddingClass(),
              'py-8'
            )}
            role="main"
            aria-label="Main content"
          >
            <article className="prose prose-lg max-w-none">
              {children}
            </article>
          </main>
          {showFooter && <Footer />}
        </>
      )}
    </div>
  );
}
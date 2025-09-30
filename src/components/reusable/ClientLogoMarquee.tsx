'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import type { ClientLogoMarqueeProps } from '@/types';

export const ClientLogoMarquee: React.FC<ClientLogoMarqueeProps> = ({
  title,
  logos,
  variant = 'standard',
  speed = 'medium',
  pauseOnHover = true,
  showTitle = true,
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const sectionClasses = [
    variant === 'compact' ? 'py-8' : 'py-16',
    variant === 'large' ? 'py-24' : '',
    className
  ].filter(Boolean).join(' ');

  const speedClasses: Record<'slow' | 'medium' | 'fast', string> = {
    slow: 'animate-marquee-slow',
    medium: 'animate-marquee-medium', 
    fast: 'animate-marquee-fast'
  };

  const marqueeClasses = [
    'flex items-center space-x-12 lg:space-x-16',
    prefersReducedMotion ? '' : speedClasses[speed],
    isPaused && !prefersReducedMotion ? 'animate-paused' : ''
  ].filter(Boolean).join(' ');

  const handleMouseEnter = () => {
    if (pauseOnHover && !prefersReducedMotion) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && !prefersReducedMotion) {
      setIsPaused(false);
    }
  };

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <Section 
      className={sectionClasses}
      aria-label={ariaLabel || 'Client logos'}
      {...props}
    >
      <Container>
        {showTitle && title && (
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
              {title}
            </h2>
          </div>
        )}
        
        <div 
          className="overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label="Client logos marquee"
        >
          <div className={marqueeClasses}>
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 relative opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt || `${logo.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                />
              </div>
            ))}
          </div>
        </div>
        
        {prefersReducedMotion && (
          <div className="mt-8 text-center">
            <p className="text-sm text-charcoal-light">
              Animation paused due to motion preference settings
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default ClientLogoMarquee;
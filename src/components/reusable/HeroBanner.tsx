'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import type { HeroBannerProps } from '@/types';

export const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
  variant = 'standard',
  overlay = 'dark',
  alignment = 'center',
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => {
  const sectionClasses = [
    'relative overflow-hidden',
    variant === 'fullscreen' ? 'min-h-screen' : 'py-20 lg:py-32',
    variant === 'compact' ? 'py-12 lg:py-16' : '',
    className
  ].filter(Boolean).join(' ');

  const overlayClasses = [
    'absolute inset-0 z-10',
    overlay === 'dark' ? 'bg-accent-500/50' : '',
    overlay === 'light' ? 'bg-white/50' : '',
    overlay === 'gradient' ? 'bg-gradient-to-r from-accent-500/70 to-accent-600/50' : '',
    overlay === 'none' ? '' : ''
  ].filter(Boolean).join(' ');

  const contentClasses = [
    'relative z-20 flex flex-col',
    variant === 'fullscreen' ? 'min-h-screen justify-center' : '',
    alignment === 'center' ? 'items-center text-center' : '',
    alignment === 'left' ? 'items-start text-left' : '',
    alignment === 'right' ? 'items-end text-right' : ''
  ].filter(Boolean).join(' ');

  const titleClasses = [
    'font-bold leading-tight mb-6',
    variant === 'fullscreen' ? 'text-4xl md:text-6xl lg:text-7xl' : 'text-3xl md:text-5xl lg:text-6xl',
    variant === 'compact' ? 'text-2xl md:text-4xl lg:text-5xl' : '',
    overlay === 'dark' || overlay === 'gradient' ? 'text-white' : 'text-charcoal'
  ].filter(Boolean).join(' ');

  const subtitleClasses = [
    'text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 max-w-3xl',
    overlay === 'dark' || overlay === 'gradient' ? 'text-gray-200' : 'text-charcoal-light'
  ].filter(Boolean).join(' ');

  const buttonContainerClasses = [
    'flex gap-4',
    alignment === 'center' ? 'justify-center' : '',
    alignment === 'left' ? 'justify-start' : '',
    alignment === 'right' ? 'justify-end' : '',
    'flex-col sm:flex-row'
  ].filter(Boolean).join(' ');

  return (
    <Section 
      className={sectionClasses}
      aria-label={ariaLabel || 'Hero banner'}
      {...props}
    >
      {/* {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {overlay !== 'none' && <div className={overlayClasses} />}
        </>
      )} */}
      
      <Container className={contentClasses}>
        <h1 className={titleClasses}>
          {title}
        </h1>
        
        {subtitle && (
          <p className={subtitleClasses}>
            {subtitle}
          </p>
        )}
        
        {(primaryCta || secondaryCta) && (
          <div className={buttonContainerClasses}>
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-accent-500 border border-transparent rounded-md hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 transition-colors duration-200"
                aria-label={primaryCta.ariaLabel || primaryCta.text}
              >
                {primaryCta.text}
              </Link>
            )}
            
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-charcoal bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 transition-colors duration-200"
                aria-label={secondaryCta.ariaLabel || secondaryCta.text}
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default HeroBanner;
'use client';

import React from 'react';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundColor?: 'accent' | 'charcoal' | 'white';
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundColor = 'accent',
  className = ''
}) => {
  const bgClasses = {
    accent: 'bg-accent-500 text-white',
    charcoal: 'bg-accent-600 text-white',
    white: 'bg-white text-charcoal'
  };

  const textClasses = {
    accent: 'text-white',
    charcoal: 'text-white', 
    white: 'text-charcoal'
  };

  const primaryButtonClasses = {
    accent: 'bg-white text-accent-500 hover:bg-gray-100',
    charcoal: 'bg-accent-500 text-white hover:bg-accent-600',
    white: 'bg-accent-500 text-white hover:bg-accent-600'
  };

  const secondaryButtonClasses = {
    accent: 'border-white text-white hover:bg-white hover:text-accent-500',
    charcoal: 'border-accent-300 text-accent-300 hover:bg-accent-300 hover:text-accent-600',
    white: 'border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white'
  };

  return (
    <Section className={`py-20 ${bgClasses[backgroundColor]} ${className}`}>
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${textClasses[backgroundColor]}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-lg md:text-xl leading-relaxed mb-8 ${backgroundColor === 'white' ? 'text-charcoal-light' : 'opacity-90'}`}>
              {subtitle}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryCta.href}
              className={`inline-flex items-center justify-center px-8 py-4 text-base font-semibold border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 transition-colors duration-200 ${primaryButtonClasses[backgroundColor]}`}
            >
              {primaryCta.text}
            </Link>
            
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`inline-flex items-center justify-center px-8 py-4 text-base font-semibold border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 transition-colors duration-200 ${secondaryButtonClasses[backgroundColor]}`}
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CTASection;
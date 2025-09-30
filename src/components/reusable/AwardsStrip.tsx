'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import type { AwardsStripProps } from '@/types';

export const AwardsStrip: React.FC<AwardsStripProps> = ({
  title,
  awards,
  variant = 'standard',
  layout = 'horizontal',
  showTitle = true,
  backgroundColor = 'light',
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => {
  const sectionClasses = [
    variant === 'compact' ? 'py-8' : 'py-16',
    variant === 'large' ? 'py-24' : '',
    backgroundColor === 'light' ? 'bg-background-light' : '',
    backgroundColor === 'dark' ? 'bg-accent-500 text-white' : '',
    backgroundColor === 'accent' ? 'bg-accent-50' : '',
    className
  ].filter(Boolean).join(' ');

  const gridClasses = [
    'grid gap-8',
    layout === 'horizontal' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : '',
    layout === 'vertical' ? 'grid-cols-1 max-w-2xl mx-auto' : '',
    layout === 'masonry' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : ''
  ].filter(Boolean).join(' ');

  const titleColor = backgroundColor === 'dark' ? 'text-white' : 'text-charcoal';

  return (
    <Section 
      className={sectionClasses}
      aria-label={ariaLabel || 'Awards and recognition'}
      {...props}
    >
      <Container>
        {showTitle && title && (
          <div className="text-center mb-12">
            <h2 className={`text-2xl md:text-3xl font-bold ${titleColor} mb-4`}>
              {title}
            </h2>
          </div>
        )}
        
        <div className={gridClasses}>
          {awards.map((award, index) => (
            <div
              key={award.name}
              className="group flex flex-col items-center text-center p-6 rounded-lg transition-transform duration-300 hover:scale-105 focus-within:scale-105"
              tabIndex={0}
              role="img"
              aria-label={`Award: ${award.name}`}
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 flex-shrink-0">
                <Image
                  src={award.src}
                  alt={award.alt || `${award.name} award`}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110 group-focus:scale-110"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>
              
              <h3 className={`text-sm md:text-base font-semibold leading-tight ${backgroundColor === 'dark' ? 'text-white' : 'text-charcoal'}`}>
                {award.name}
              </h3>
              
              {award.year && (
                <p className={`text-xs md:text-sm mt-2 ${backgroundColor === 'dark' ? 'text-gray-300' : 'text-charcoal-light'}`}>
                  {award.year}
                </p>
              )}
              
              {award.description && (
                <p className={`text-xs mt-2 ${backgroundColor === 'dark' ? 'text-gray-400' : 'text-charcoal-light'}`}>
                  {award.description}
                </p>
              )}
            </div>
          ))}
        </div>
        
        {awards.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${backgroundColor === 'dark' ? 'text-gray-300' : 'text-charcoal-light'}`}>
              No awards to display at this time.
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default AwardsStrip;
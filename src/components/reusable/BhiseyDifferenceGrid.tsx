'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

interface DifferenceItem {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

interface BhiseyDifferenceGridProps {
  title: string;
  subtitle?: string;
  items: DifferenceItem[];
  className?: string;
}

export const BhiseyDifferenceGrid: React.FC<BhiseyDifferenceGridProps> = ({
  title,
  subtitle,
  items,
  className = ''
}) => {
  return (
    <Section className={`py-20 bg-white ${className}`}>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-charcoal-light max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-background-light rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
              {item.image && (
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
              )}
              
              <h3 className="text-xl font-bold text-charcoal mb-4">
                {item.title}
              </h3>
              
              <p className="text-charcoal-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default BhiseyDifferenceGrid;
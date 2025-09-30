'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

interface Capability {
  title: string;
  description: string;
  href: string;
  image?: string;
}

interface CapabilitiesTeaserProps {
  title: string;
  subtitle?: string;
  capabilities: Capability[];
  viewAllLink?: {
    text: string;
    href: string;
  };
  className?: string;
}

export const CapabilitiesTeaser: React.FC<CapabilitiesTeaserProps> = ({
  title,
  subtitle,
  capabilities,
  viewAllLink,
  className = ''
}) => {
  return (
    <Section className={`py-20 bg-background-light ${className}`}>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <Link
              key={index}
              href={capability.href}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              {capability.image && (
                <div className="relative w-12 h-12 mx-auto mb-4">
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                    sizes="48px"
                  />
                </div>
              )}
              
              <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-accent-500 transition-colors duration-300">
                {capability.title}
              </h3>
              
              <p className="text-charcoal-light text-sm leading-relaxed">
                {capability.description}
              </p>
            </Link>
          ))}
        </div>
        
        {viewAllLink && (
          <div className="text-center mt-12">
            <Link
              href={viewAllLink.href}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-accent-500 border border-transparent rounded-md hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 transition-colors duration-200"
            >
              {viewAllLink.text}
            </Link>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default CapabilitiesTeaser;
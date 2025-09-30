'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

interface ProblemStatementStripProps {
  title: string;
  description: string;
  stats?: Array<{
    number: string;
    label: string;
  }>;
  className?: string;
}

export const ProblemStatementStrip: React.FC<ProblemStatementStripProps> = ({
  title,
  description,
  stats = [],
  className = ''
}) => {
  return (
    <Section className={`py-16 bg-accent-500 text-white ${className}`}>
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
            {description}
          </p>
          
          {stats.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent-300 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg opacity-90">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default ProblemStatementStrip;
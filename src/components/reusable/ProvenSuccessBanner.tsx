import React from 'react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

export const ProvenSuccessBanner: React.FC = () => {
  return (
    <Section spacing="xl" className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <svg className="absolute -top-10 left-1/2 w-[160%] -translate-x-1/2 text-accent-100" viewBox="0 0 1440 320" fill="none" preserveAspectRatio="none">
          <path fill="currentColor" fillOpacity="0.4" d="M0,128L48,117.3C96,107,192,85,288,74.7C384,64,480,64,576,74.7C672,85,768,107,864,106.7C960,107,1056,85,1152,85.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            <span className="bg-gradient-to-r from-accent-600 via-accent-400 to-accent-600 bg-clip-text text-transparent">Proven</span>{' '}
            <span className="text-charcoal">Success in</span>{' '}
            <span className="bg-gradient-to-r from-accent-600 via-accent-400 to-accent-600 bg-clip-text text-transparent">Helping</span>{' '}
            <span className="text-charcoal">Clients Win</span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-charcoal-light md:text-lg">
            With over 30 years of experience and 1000+ projects delivered, we have a proven track record of helping clients gain competitive advantage, generate more revenue, and increase operational efficiency.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default ProvenSuccessBanner;

import React from 'react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Link from 'next/link';

export interface GradientCTAStripProps { title?: string; subtitle?: string; cta?: { text: string; href: string }; }

export const GradientCTAStrip: React.FC<GradientCTAStripProps> = ({
  title = 'We help you turn...',
  subtitle = 'Uncertainty into confidence',
  cta = { text: 'Talk to Experts', href: '/contact-us' },
}) => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-br from-accent-50 via-accent-100 to-white px-8 py-14 text-center shadow-sm md:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,150,136,0.15),transparent_60%)]" />
          <h2 className="text-2xl font-semibold tracking-tight text-charcoal md:text-3xl">
            <span className="font-medium text-accent-600">We help you turn...</span>
          </h2>
          <p className="mt-3 text-xl font-medium text-charcoal md:text-2xl">{subtitle}</p>
          <div className="mt-8">
            <Link href={cta.href} className="inline-flex items-center rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400">
              {cta.text}
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default GradientCTAStrip;

"use client";
import React from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';

const data = [
  { title: 'Partner by Design', desc: 'Strategic collaboration that aligns with your business outcomes.' },
  { title: 'Product Driven Engagement', desc: 'Delivering measurable value across the full software lifecycle.' },
  { title: 'People You Can Count On', desc: 'Seasoned engineers, proven processes, and stable delivery.' },
  { title: 'Proven Success', desc: '1000+ projects delivered with lasting client impact.' },
];

const DifferenceHighlights: React.FC = () => {
  return (
    <Section spacing="xl" className="bg-white">
      <Container size="xl">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="mb-3 text-3xl font-bold text-charcoal md:text-4xl">Client Spotlight</h3>
          <p className="mb-16 text-base text-charcoal-light md:text-lg">Our software development services are trusted by 450+ industry leaders and growth-stage innovators.</p>
        </div>
        {/* Placeholder logo row (real implementation would map over logos) */}
        <div className="mb-20 flex flex-wrap items-center justify-center gap-10 opacity-90">
          {['accenture','acumen','alphabet','astellas','boston','brigham'].map(l => (
            <div key={l} className="h-12 w-36 rounded bg-accent-50/40 ring-1 ring-accent-100" aria-hidden />
          ))}
        </div>
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h3 className="mb-10 text-3xl font-bold text-accent-600 md:text-4xl">The Bhisey Difference</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {data.map(item => (
            <div key={item.title} className="group rounded-xl border border-accent-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-accent-50 text-accent-600 ring-1 ring-accent-100">{item.title.charAt(0)}</div>
              <h4 className="mb-3 text-base font-semibold text-charcoal md:text-lg">{item.title}</h4>
              <p className="text-sm leading-relaxed text-charcoal-light">{item.desc}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-accent-600">Learn More →</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
export default DifferenceHighlights;

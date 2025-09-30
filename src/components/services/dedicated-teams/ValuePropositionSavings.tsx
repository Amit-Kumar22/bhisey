"use client";
import React from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';

const rows = [
  { left: 'Smarter Engineering Investment', right: 'Reduce your total development spend by 15–25% through optimized team composition and lean, agile execution – without sacrificing velocity or quality.' },
  { left: 'On-Time Talent Allocation', right: 'Tap into specialized skills exactly when needed. Our dynamic resourcing model lowers project costs by 10–30% by eliminating idle overhead.' },
  { left: 'Continuity Without Downtime', right: 'With an actively managed talent bench and fast backfill processes, we minimize team disruption and cut 5–10% from potential project delays and resets.' },
  { left: 'Enterprise-Grade Talent, Startup-Level Cost', right: 'Gain access to experienced teams and delivery professionals at 40–50% below standard domestic rates, thanks to our strategic partnerships and distributed team model.' },
];

const ValuePropositionSavings: React.FC = () => {
  return (
    <Section spacing="xl" className="bg-white">
      <Container size="xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-charcoal md:text-4xl">Compromise.</h2>
          <p className="mt-4 text-base text-charcoal-light md:text-lg">By blending global engineering talent with the U.S. based oversight, our Dedicated Development Teams reduce time-to-market while optimizing your budget:</p>
        </div>
        <div className="space-y-4">
          {rows.map(r => (
            <div key={r.left} className="grid grid-cols-1 items-center rounded-xl bg-emerald-50/70 px-6 py-6 text-sm md:grid-cols-2 md:text-base">
              <div className="pr-6 font-medium text-charcoal">{r.left}</div>
              <div className="mt-3 border-t border-emerald-200 pt-3 text-charcoal-light md:mt-0 md:border-t-0 md:pt-0">{r.right}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
export default ValuePropositionSavings;

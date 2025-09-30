import React from 'react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

interface Feature { title: string; body: string; icon: React.ReactNode; }

const FEATURES: Feature[] = [
  { title: 'Deep Expertise, Proven Results:', body: 'We have a wealth of experience across various industries, delivering hundreds of successful projects. We understand the unique challenges you face and can tailor solutions to meet your specific needs.', icon: <span>💬</span> },
  { title: 'Long-Term Commitment:', body: "Our clients stay with us because we build strong, lasting partnerships. We're invested in your success and dedicated to providing ongoing support throughout the entire software lifecycle.", icon: <span>🛤️</span> },
  { title: 'Transparency and Communication:', body: "We believe in open and honest communication. You will always be kept in the loop, with clear expectations and milestones set throughout the development process.", icon: <span>🧾</span> },
  { title: 'Results that Speak for Themselves:', body: "Our high client satisfaction rate speaks volumes. Clients consistently return, and many bring our expertise with them to their new ventures.", icon: <span>👥</span> },
];

export const LegacyOfTrustGrid: React.FC = () => {
  return (
    <Section spacing="xl" className="bg-white">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-charcoal md:text-4xl">A Legacy of Trust:</h2>
          <h3 className="mt-1 text-2xl font-semibold text-charcoal md:text-3xl">Your Software Success Partner</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map(f => (
            <div key={f.title} className="relative rounded-lg border border-accent-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-accent-50 text-accent-600 ring-1 ring-accent-100">{f.icon}</div>
              <h4 className="mb-3 text-base font-semibold leading-snug text-charcoal">{f.title}</h4>
              <p className="text-sm leading-relaxed text-charcoal-light">{f.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default LegacyOfTrustGrid;

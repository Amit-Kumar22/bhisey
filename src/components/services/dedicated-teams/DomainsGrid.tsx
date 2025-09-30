"use client";
import React from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';

const domains = [
  { icon: '❤️', title: 'Healthcare', desc: 'HIPAA-compliant development, EHR integrations, medical device software' },
  { icon: '🧬', title: 'Life Sciences', desc: 'Clinical trial platforms, labeling and regulatory tech, genomics software, analytics and visualization tools' },
  { icon: '💳', title: 'FinTech', desc: 'Trading platforms, payment processing, regulatory compliance systems' },
  { icon: '🎓', title: 'Education Technology', desc: 'Learning management systems, assessment platforms, student information systems' },
  { icon: '🚚', title: 'Logistics & Supply Chain', desc: 'Fleet management, route optimization, warehouse automation' },
  { icon: '📈', title: 'Marketing & AdTech', desc: 'Campaign automation platforms, real-time bidding engines, audience analytics, and data privacy compliance tools' },
  { icon: '🛒', title: 'Retail & eCommerce', desc: 'Omnichannel storefronts, inventory management, recommendation engines, and personalized customer experiences' },
  { icon: '🏢', title: 'Real Estate & Construction', desc: 'Property management platforms, construction project software' },
];

const DomainsGrid: React.FC = () => {
  return (
    <Section spacing="xl" className="bg-white">
      <Container size="xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-charcoal md:text-4xl">Proven Success Across Domains</h2>
          <p className="mt-4 text-base text-charcoal-light md:text-lg">Our dedicated development teams bring deep domain expertise to highly regulated and fast-moving industries:</p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {domains.map(d => (
            <div key={d.title} className="rounded-xl border border-accent-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-accent-50 text-lg ring-1 ring-accent-100">{d.icon}</div>
              <h3 className="mb-3 text-sm font-semibold text-charcoal md:text-base">{d.title}</h3>
              <p className="text-xs leading-relaxed text-charcoal-light md:text-sm">{d.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
export default DomainsGrid;

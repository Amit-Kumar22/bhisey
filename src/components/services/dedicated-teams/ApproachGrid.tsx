"use client";
import React from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';

const approach = [
  { icon: '👤', title: 'US-Based Project Leadership', desc: 'Each engagement includes a senior U.S.-based Delivery Manager who owns the success of your project – ensuring seamless onboarding, ongoing delivery cadence, and timely communication.' },
  { icon: '🌐', title: 'Global Engineering Excellence', desc: 'We assemble teams from our global talent network, strategically staffed from Latin America, Europe, and Central Asia to ensure optimal cost, timezone overlap, and skillset coverage.' },
  { icon: '⏱️', title: 'Rapid Start, Zero Risk', desc: 'Need to ramp fast? Most teams are onboarded within 2–3 weeks.' },
  { icon: '</>', title: 'Dynamic, Specialized Talent', desc: 'Access rare skill sets as needed: AI/ML experts, DevSecOps engineers, Cloud Architects, UX designers, and more. Add specialists on-demand without restarting contracts.' },
];

const ApproachGrid: React.FC = () => {
  return (
    <Section spacing="xl" className="bg-white">
      <Container size="xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-charcoal md:text-4xl">Our Approach to Dedicated Teams</h2>
          <p className="mt-4 text-base text-charcoal-light md:text-lg">For over three decades, we’ve helped companies ranging from startups to Fortune 500 build exceptional development teams that deliver results. Our unique approach combines U.S. project leadership with global engineering talent, ensuring both quality and cost-efficiency.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {approach.map(a => (
            <div key={a.title} className="rounded-xl border border-accent-100 bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-accent-50 text-xl ring-1 ring-accent-100">{a.icon}</div>
              <h3 className="mb-3 text-lg font-semibold text-charcoal md:text-xl">{a.title}</h3>
              <p className="text-sm leading-relaxed text-charcoal-light md:text-base">{a.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
export default ApproachGrid;

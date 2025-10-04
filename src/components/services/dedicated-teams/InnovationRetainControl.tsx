"use client";
import React from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';

const items = [
  { icon: '🔍', title: 'Fully dedicated, pre-vetted engineering talent', desc: 'We build expert teams with in-depth knowledge to drive excellence and cost-effective results.' },
  { icon: '🇺🇸', title: 'Onshore Delivery & Account Management', desc: 'Our Managers are senior technology leaders that become an extension of your team, ensuring your software development milestones and goals are met from kickoff to delivery.' },
  { icon: '🔗', title: 'Seamless integration with your internal workflows', desc: 'Our teams are embedded into your processes, tools, and rhythms – ensuring smooth collaboration and fast onboarding with no disruption to delivery.' },
];

const InnovationRetainControl: React.FC = () => {
  return (
    <Section spacing="xl" className="bg-white">
      <Container size="xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-charcoal md:text-4xl">Accelerate Innovation. Retain Control.</h2>
          <p className="mt-4 text-base text-charcoal-light md:text-lg">Bhisey’s Dedicated Teams are designed to scale your impact.</p>
        </div>
        <div className="space-y-6">
          {items.map(i => (
            <div key={i.title} className="rounded-xl border border-accent-100 bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-50 text-2xl ring-1 ring-accent-100">{i.icon}</div>
                <h3 className="text-lg font-semibold text-charcoal md:text-xl">{i.title}</h3>
              </div>
              <p className="pl-[4.5rem] -mt-4 text-sm leading-relaxed text-charcoal-light md:text-base">{i.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
export default InnovationRetainControl;

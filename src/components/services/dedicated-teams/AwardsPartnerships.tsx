"use client";
import React from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';

const awards = [
  { img: '/award1.png', alt: 'Award 1' },
  { img: '/award2.png', alt: 'Award 2' },
  { img: '/award3.png', alt: 'Award 3' },
  { img: '/award4.png', alt: 'Award 4' },
];

const AwardsPartnerships: React.FC = () => {
  return (
    <Section spacing="xl" className="bg-white">
      <Container size="xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-charcoal md:text-4xl">Awards and Partnerships</h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-16">
          {awards.map(a => (
            <div key={a.alt} className="h-40 w-40 rounded-full bg-accent-50 ring-1 ring-accent-100" aria-hidden />
          ))}
        </div>
      </Container>
    </Section>
  );
};
export default AwardsPartnerships;

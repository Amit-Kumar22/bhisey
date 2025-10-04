"use client";
import React, { useState } from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Link from 'next/link';

interface Area { key: string; title: string; desc: string; body: string; href: string; }
const areas: Area[] = [
  { key: 'custom', title: 'Custom Software Development', desc: '30 years of experience engineering and maintaining mission-critical software solutions for both disruptive startups and large enterprises.', body: 'Bhisey brings 30 years of experience engineering and maintaining mission-critical software solutions for both disruptive startups and large enterprises, and the accountability of a U.S. based company run by seasoned software product development managers. Our capabilities span across all phases of the software lifecycle – application design and technical analysis, architecture, UX/UI design, rapid prototyping and development, digital transformation, cloud migration, machine learning, and AI, application management and support, QA, and DevOps.', href: '/services/custom-software-development' },
];

const TechnicalExcellenceAreas: React.FC = () => {
  const [active] = useState('custom');
  const current = areas.find(a => a.key === active)!;
  return (
    <Section spacing="xl" className="bg-white">
      <Container size="xl">
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-charcoal md:text-4xl">Our Core Areas of Technical Excellence</h2>
          <p className="mt-4 text-base text-charcoal-light md:text-lg">At Bhisey Software, we go beyond code – we architect, design, deliver, and support mission-critical software products that drive innovation and measurable business outcomes. Our interdisciplinary teams combine domain fluency with hands-on technical mastery to meet clients wherever they are in their digital journey.</p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-row gap-4 md:flex-col md:w-36">
            {areas.map(a => (
              <span key={a.key} className={`h-4 w-8 rounded-full md:h-5 md:w-5 ${a.key===current.key?'bg-accent-600':'bg-accent-200'}`} />
            ))}
          </div>
          <div className="flex-1 rounded-xl border border-accent-100 bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-4"><div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-50 text-lg ring-1 ring-accent-100">{'</>'}</div><h3 className="text-lg font-semibold text-accent-600 md:text-xl">{current.title}</h3></div>
            <p className="text-sm leading-relaxed text-charcoal-light md:text-base">{current.body}</p>
            <Link href={current.href} className="mt-6 inline-flex items-center rounded-md border border-accent-200 px-5 py-2 text-sm font-medium text-charcoal hover:bg-accent-50">Learn More →</Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
export default TechnicalExcellenceAreas;

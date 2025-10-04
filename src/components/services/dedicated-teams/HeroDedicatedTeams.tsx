"use client";
import React from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Link from 'next/link';

/**
 * HeroDedicatedTeams – top hero block with decorative wave background as per screenshot.
 * Uses pure SVG for performance (no external image) and precise spacing/typography.
 */
const HeroDedicatedTeams: React.FC = () => {
  return (
    <Section spacing="xl" className="relative overflow-hidden bg-[#F6F9FB] pt-20 md:pt-28">
      {/* Wave Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-center">
        <svg className="mt-4 w-[180%] max-w-none" viewBox="0 0 1440 320" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0FA678" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0FA678" stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 14 }).map((_, i) => (
            <path key={i} d="M0 160C120 120 240 120 360 160C480 200 600 200 720 160C840 120 960 120 1080 160C1200 200 1320 200 1440 160V320H0V160Z" fill="none" stroke="#0FA678" strokeOpacity={(0.06 + i * 0.012).toFixed(3)} strokeWidth="1" transform={`translate(0 ${i * 8})`} />
          ))}
        </svg>
      </div>
      <Container size="xl">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-6 text-3xl font-bold leading-tight text-[#066B59] md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">Dedicated Development Teams</h1>
          <h2 className="mb-8 text-lg font-medium text-[#163748] md:text-2xl">On-Demand Engineering Firepower. Seamless Team Extension.</h2>
          <p className="mx-auto max-w-4xl text-sm leading-relaxed text-[#1E4F63] md:text-base lg:text-lg">
            At Bhisey Software, we understand the urgency and precision that modern software development demands. Whether
            you&apos;re scaling your product roadmap, accelerating time-to-market, or tackling a specialized challenge – our Dedicated
            Development Teams provide the velocity, expertise, and flexibility to help you deliver at pace without compromising
            quality.
          </p>
          <p className="mx-auto mt-8 max-w-5xl text-sm leading-relaxed text-[#1E4F63] md:text-base">
            For over 30 years, Bhisey has been helping companies – from startups to Fortune 500 enterprises – build and
            expand high-performing engineering teams. We deliver expert talent across time zones, domains, and technologies
            with the oversight, structure, and reliability of a U.S.-based partner.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="#contact-dedicated-teams" className="inline-flex items-center rounded-md bg-accent-500 px-8 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2">
              Start Building Your Team
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroDedicatedTeams;

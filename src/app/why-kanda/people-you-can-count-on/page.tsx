import React from 'react';
import { Users, Globe2, ShieldCheck, Cpu, Palette } from 'lucide-react';
import Container from '@/components/layout/Container';
import Link from "next/link";
import Section from '@/components/layout/Section';
import ContactCompact from '@/components/forms/ContactCompact';
import Image from 'next/image';
import { ContactSection } from '../../../components/reusable';

export const metadata = {
  title: 'People You Can Count On | Bhisey Software',
  description: 'Global talent blend, accountable leadership, and reliable delivery teams you can trust.',
};

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute right-0 top-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d={`M ${1200 + i * 20} ${100 + i * 10} Q ${600 + i * 30} ${200 + i * 15}, ${i * 20} ${150 + i * 10}`}
              fill="none"
              stroke="#ff6b35"
              strokeWidth="2"
              opacity={0.3 - i * 0.02}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-orange-500">People You Can Count On</span>{" "}
          <span className="text-gray-800">Delivered</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-12">
          High‑retention, multi‑disciplinary engineering teams led by senior US‑based delivery managers—aligned to your outcomes from day one.
        </p>
        {/* <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Contact Us
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link> */}
      </div>

      {/* Client Logos Carousel */}
      <div className="mt-16 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap opacity-60">
          <div className="text-gray-400 text-sm font-medium">NEO GENOMICS</div>
          <div className="text-gray-400 text-sm font-medium">LIONBRIDGE</div>
          <div className="text-gray-400 text-sm font-medium">JOHNSON & JOHNSON</div>
        </div>
      </div>
    </section>
  );
}


// Professional info card component with accent bar and refined typography
function InfoCard({ headingTop, headingBottom, body, icon }: { headingTop: string; headingBottom: string; body: string; icon?: React.ReactNode }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-accent-50 via-white to-accent-100 p-8 shadow-sm transition-shadow hover:shadow-md md:p-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {icon && (
          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white text-accent-600 shadow ring-1 ring-accent-100">
            {icon}
          </div>
        )}
        <h3 className="text-2xl font-bold leading-snug tracking-tight text-charcoal md:text-3xl">
          <span className="block text-base font-semibold uppercase tracking-wide text-accent-600 mb-1">{headingTop}</span>
          <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">{headingBottom}</span>
        </h3>
        <p className="mt-5 text-sm leading-relaxed text-charcoal-light md:text-base">{body}</p>
      </div>
    </div>
  );
}
function UnifiedCapabilitiesSection() {
  return (
    <Section className="bg-gradient-to-b from-white via-accent-50/30 to-white">
      <Container size="narrow">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-5xl font-bold tracking-tight text-charcoal md:text-6xl">Global Talent & Specialized Expertise</h2>
          <p className="mt-6 text-lg text-charcoal-light md:text-xl leading-relaxed">Unified delivery model combining accountable leadership, scalable global teams, and on‑demand access to rare skills and award‑winning experience design.</p>
        </div>
        <div className="space-y-8">
          <InfoCard
            headingTop="Optimized Blend of"
            headingBottom="Onshore and Offshore Talent"
            body="Strategically composed teams that balance cost efficiency and velocity while maintaining quality. Rapid staffing from a deep bench means you start delivering value in weeks—not months." 
            icon={<Globe2 className="h-7 w-7" />} />
          <InfoCard
            headingTop="US-Based Project Leader"
            headingBottom="Local Accountability"
            body="Senior Delivery Manager (10–30 yrs) integrates with your leadership—driving cadence, clarity, and risk management while freeing internal architects for higher‑value work." 
            icon={<ShieldCheck className="h-7 w-7" />} />
          <InfoCard
            headingTop="On‑Demand Top Shelf"
            headingBottom="Expertise"
            body="Fractional access to AI/ML, DevOps, DevSecOps, Data, BA and other specialists exactly when needed—eliminating idle cost and removing bottlenecks at critical path moments." 
            icon={<Cpu className="h-7 w-7" />} />
          <InfoCard
            headingTop="Cost‑Effective Stellar"
            headingBottom="UX & UI Talent"
            body="Award‑winning product experience design via our Bentley University UX Center collaboration—research‑driven, conversion‑minded, and scalable across platforms." 
            icon={<Palette className="h-7 w-7" />} />
        </div>
      </Container>
    </Section>
  );
}

function LogoTrustStrip() {
  const logos = [
    { src: '/logo1.png', alt: 'Logo 1' },
    { src: '/logo2.png', alt: 'Logo 2' },
    { src: '/logo3.png', alt: 'Logo 3' },
    { src: '/logo4.png', alt: 'Logo 4' },
    { src: '/logo5.png', alt: 'Logo 5' },
    { src: '/logo6.png', alt: 'Logo 6' },
    { src: '/logo1.png', alt: 'Logo 7' },
  ];
  return (
    <Section className="bg-white">
      <Container size="xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-charcoal md:text-5xl">Trusted by Fortune 500 and Startups</h2>
          <p className="mt-4 text-lg text-charcoal-light md:text-xl leading-relaxed">Long‑term partnerships built on delivery consistency and engineering excellence.</p>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-accent-100/60 bg-gradient-to-r from-accent-50/60 via-white to-accent-50/60 py-8">
          <div className="relative">
            <div className="flex animate-marquee gap-14 px-8 hover:[animation-play-state:paused]">
              {[...logos, ...logos].map((l, idx) => (
                <div key={l.alt + idx} className="relative h-10 w-32 shrink-0 grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100">
                  <Image src={l.src} alt={l.alt} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ReliabilitySection() {
  const stats = [
    { value: '850+', label: 'TOP-NOTCH PROFESSIONALS', desc: 'Architects, Engineers, PMs, BAs, UX/UI Designers, Data Scientists, AI/ML Specialists, DevOps, and more.' },
    { value: '>80%', label: 'MASTERS AND PHDS', desc: 'In Computer Science, Data Science, Machine Learning, and related fields.' },
    { value: '5+', label: 'YEARS AVG EXPERIENCE', desc: 'Developing business-critical software applications and solutions.' },
    { value: '<3%', label: 'TURNOVER RATE', desc: 'Every project team is dependable for the long run and highly committed to your success.' },
  ];
  return (
    <Section className="bg-white">
      <Container size="narrow">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-bold tracking-tight text-charcoal md:text-6xl">Reliability to Reach Your Goals</h2>
          <p className="mt-6 text-lg text-charcoal-light md:text-xl leading-relaxed">Our hiring and project deployment practices are guided by the need to establish and maintain the best technical teams in a competitive environment where excellent people are in high demand. With an extremely low turnover rate, our team is a dependable pillar that will carry your project to the finish line.</p>
        </div>
        <div className="mt-10 rounded-2xl border border-accent-100 bg-gradient-to-br from-accent-50/70 via-white to-accent-50/40 p-6 md:p-10 backdrop-blur-sm">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {stats.map(s => (
              <div key={s.label} className="group relative flex flex-col rounded-xl border border-accent-100/60 bg-white/80 p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent-50 ring-1 ring-accent-200">
                    <span className="bg-gradient-to-br from-accent-600 to-accent-400 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
                      {s.value}
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold tracking-wide text-charcoal/90 max-w-[8rem] leading-snug">{s.label}</div>
                </div>
                <p className="mt-4 text-[12px] leading-5 text-charcoal-light">{s.desc}</p>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 scale-x-0 transform bg-gradient-to-r from-accent-400 via-accent-500 to-accent-600 transition-transform duration-300 group-hover:scale-x-100" aria-hidden />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function TestimonialCard({ logo, name, title, quote }: { logo: string; name: string; title: string; quote: string }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-accent-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-center gap-4">
        <div className="relative h-8 w-28">
          <Image src={logo} alt={name + ' company'} fill className="object-contain" />
        </div>
        <div className="text-sm leading-tight">
          <div className="font-semibold text-charcoal">{name}</div>
          <div className="text-[11px] font-medium uppercase tracking-wide text-accent-600/80">{title}</div>
        </div>
      </div>
      <div className="relative mt-auto rounded-lg bg-accent-50/70 p-5 text-[13px] leading-6 text-charcoal">
        <div className="absolute -top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 text-white shadow-sm ring-4 ring-white">“</div>
        <p className="mt-2 text-sm text-charcoal">{quote}</p>
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 scale-x-0 transform bg-gradient-to-r from-accent-400 via-accent-500 to-accent-600 transition-transform duration-300 group-hover:scale-x-100" aria-hidden />
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <Section className="bg-white">
      <Container size="narrow">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-bold tracking-tight text-charcoal md:text-6xl">Testimonials</h2>
          <p className="mt-4 text-lg text-charcoal-light md:text-xl leading-relaxed">What our long‑term clients say about working with our delivery teams.</p>
        </div>
        <div className="mt-10 rounded-2xl border border-accent-100/60 bg-accent-50/40 p-6 md:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <TestimonialCard
              logo="/logo1.png"
              name="Andrew Duggan"
              title="CEO, medQue"
              quote="Bhisey proved to be an exceptional choice for our development needs. They were much more of a partner to our startup than a vendor. The entire team treated our project like it was their own company, and the results showed that. Our customers were extremely pleased with the desktop and mobile applications. I would definitely recommend hiring Bhisey for any and all of your development needs." />
            <TestimonialCard
              logo="/logo2.png"
              name="John Hupalo"
              title="Co‑Founder, CEO, Invite Education"
              quote="Bhisey performed exactly as advertised and expected. We had a difficult set of issues to deal with that were mission critical and politically charged. The assigned managers and engineers were pleasant, competent and hard-working. When necessary, senior engagement managers stepped in to provide guidance and clarify roles so that we achieved a cost-effective solution. As planned, when it was time for our team to resume control of our processes, Bhisey professionally stepped back while providing support to ensure we continued to achieve success. We felt like Bhisey had our backs and put our interests first." />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function PeopleYouCanCountOnPage() {
  return (
    <>
      <Hero />
  <UnifiedCapabilitiesSection />
  <LogoTrustStrip />
  <ReliabilitySection />
      <TestimonialsSection />
      <Section className="bg-white">
        <Container size="narrow">
          <div className="relative overflow-hidden rounded-2xl border border-accent-100/70 bg-gradient-to-b from-accent-50/60 via-white to-white p-6 md:p-10">
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/60 mix-blend-overlay" aria-hidden />
            <h2 className="mb-6 text-center text-4xl font-bold tracking-tight text-charcoal md:text-5xl">Start a Conversation</h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-charcoal-light md:text-xl leading-relaxed">Tell us about your product vision, engineering challenges, or roadmap pressures—our delivery leadership will respond quickly with actionable next steps.</p>
            <ContactSection />
          </div>
        </Container>
      </Section>
    </>
  );
}

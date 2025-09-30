import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { cn } from '@/lib/utils';
import React from 'react';
import { Settings, BarChart3, RefreshCcw, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import ContactCompact from '@/components/forms/ContactCompact';

export const metadata = {
  title: 'Partner by Design | Kanda Software',
  description:
    'We adapt to your unique needs with transparency and control. Discover how our right-sized partnership model delivers results.',
};

function Hero() {
  return (
    <Section spacing="xl" className="bg-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold leading-tight text-charcoal md:text-5xl">Partner by Design</h1>
          <p className="mt-5 text-lg leading-7 text-charcoal-light">
            While ‘partnership’ is often an overused cliché, we take pride in shaping our business model and
            engagements to address and adapt to your unique challenges and needs.
          </p>
        </div>
      </Container>
    </Section>
  );
}

function IntroStrip() {
  return (
    <Section spacing="md" className="bg-white">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="rounded-xl border border-accent-100 bg-white p-6 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-charcoal md:text-3xl">We thrive on taking your challenges head‑on</h2>
            <p className="mt-2 text-base text-charcoal">Pushing the technology envelope into uncharted territory?</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FeatureCard({ title, body, icon }: { title: string; body: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-accent-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 text-3xl" aria-hidden>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-charcoal-light">{body}</p>
    </div>
  );
}

function RightSizePartner() {
  const features = [
    {
      title: 'Adaptable to Your Process',
      body:
        'No matter your preferred methodology—Agile, Scrum, or Kanban—our team is skilled in adapting to your frameworks and processes, ensuring seamless integration and efficiency.',
      icon: <Settings className="h-7 w-7 text-accent-600" aria-hidden />,
    },
    {
      title: 'Transparency and Control',
      body:
        'We provide a real‑time view of your project status, configured for easy incorporation into your current monitoring and reporting systems, so you are always in full control of your milestones and deliverables.',
      icon: <BarChart3 className="h-7 w-7 text-accent-600" aria-hidden />,
    },
    {
      title: 'Built for Change',
      body:
        'Managing change is where partnerships are tested. We will help you evaluate technology directions and tradeoffs and redeploy resources as needed to navigate shifting business requirements.',
      icon: <RefreshCcw className="h-7 w-7 text-accent-600" aria-hidden />,
    },
    {
      title: 'Uncompromised IP Protection',
      body:
        'With Kanda, your intellectual property is in safe hands. We boast a robust track record with zero cases of IP compromise over three decades, ensuring your innovative ideas stay where they belong.',
      icon: <ShieldCheck className="h-7 w-7 text-accent-600" aria-hidden />,
    },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-charcoal">Your Right‑Size Partner</h2>
          <p className="mt-4 text-charcoal-light">
            Kanda strikes the perfect balance for a company of any size: we are big enough to provide the essential skills,
            scale, and speed your projects demand. Yet we remain boutique enough to ensure you receive our top management
            attention, unparalleled flexibility, and transparency in every interaction.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((f) => (
            <FeatureCard key={f.title} title={f.title} body={f.body} icon={f.icon} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function TestimonialCard({
  logo,
  name,
  title,
  company,
  quote,
}: {
  logo: string;
  name: string;
  title: string;
  company: string;
  quote: string;
}) {
  return (
    <div className="rounded-xl border border-accent-100 bg-white p-6">
      <div className="mb-4 flex items-center gap-3">
  <Image src={logo} alt="Company logo" width={120} height={24} />
        <div className="text-sm">
          <div className="font-semibold text-charcoal">{name}</div>
          <div className="text-charcoal-light">{title}, {company}</div>
        </div>
      </div>
      <div className="rounded-lg bg-accent-50 p-4 text-sm leading-6 text-charcoal">
        <span aria-hidden className="mr-2 text-accent-500">“</span>
        {quote}
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <Section className="bg-white">
      <Container>
        <h2 className="mb-8 text-center text-3xl font-bold text-charcoal">Testimonials</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <TestimonialCard
            logo="/logo1.png"
            name="Clynt Taylor"
            title="CEO"
            company="Trapelo"
            quote="I have had a very positive experience working with Kanda over the past eight years. They have partnered with us in designing and building very sophisticated applications in the use of precision medicine for cancer therapy selection. I highly recommend them for their expertise, professionalism and value."
          />
          <TestimonialCard
            logo="/logo2.png"
            name="Goran Skorput"
            title="CTO"
            company="HuddleUp"
            quote="Kanda was HuddleUp’s software design and development partner for several years, helping to bring HuddleUp to the market. The team at Kanda Software is excellent to work with, responsive, strategic, and attentive. Their technical knowledge is excellent as well as attention to detail and quick response to arising needs and changing priorities. The well-managed team boasted transparency and strong organizational skills."
          />
        </div>
      </Container>
    </Section>
  );
}


function ContactPanel() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-center text-3xl font-bold text-charcoal">Contact Us</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-charcoal-light">
            Please provide your contact details and some information about your project, and our team will
            respond promptly to see how we can best assist you.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <ContactCompact />
            </div>
            <aside className="rounded-lg border border-accent-100 bg-white p-6">
              <h3 className="text-lg font-semibold text-charcoal">Contact Us</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-2 text-charcoal"><span aria-hidden>📞</span> 617‑340‑3850</li>
                <li className="flex items-center gap-2 text-charcoal"><span aria-hidden>✉️</span> contact@kandasoft.com</li>
              </ul>
              <div className="mt-6">
                <div className="text-sm font-semibold text-charcoal">Find Us on Social Media</div>
                <ul className="mt-3 space-y-2 text-sm">
                  <li><a className="text-accent-500 hover:underline" href="#" aria-label="X (Twitter)">X</a></li>
                  <li><a className="text-accent-500 hover:underline" href="#" aria-label="LinkedIn">LinkedIn</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function PartnerByDesignPage() {
  return (
    <>
      <Hero />
      <IntroStrip />
      <RightSizePartner />
      <Testimonials />
      <ContactPanel />
    </>
  );
}

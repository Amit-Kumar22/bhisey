import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Link from "next/link";
import React from 'react';
import { Settings, BarChart3, RefreshCcw, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import ContactCompact from '@/components/forms/ContactCompact';
import { ContactSection } from '../../../components/reusable';

export const metadata = {
  title: 'Partner by Design | Bhisey Software',
  description:
    'We adapt to your unique needs with transparency and control. Discover how our right-sized partnership model delivers results.',
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
          <span className="text-orange-500">Product Promises.</span>{" "}
          <span className="text-gray-800">Delivered</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-12">
          You Think it. We Build it.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Contact Us
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
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
        'With Bhisey, your intellectual property is in safe hands. We boast a robust track record with zero cases of IP compromise over three decades, ensuring your innovative ideas stay where they belong.',
      icon: <ShieldCheck className="h-7 w-7 text-accent-600" aria-hidden />,
    },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-charcoal">Your Right‑Size Partner</h2>
          <p className="mt-4 text-charcoal-light">
            Bhisey strikes the perfect balance for a company of any size: we are big enough to provide the essential skills,
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
            quote="I have had a very positive experience working with Bhisey over the past eight years. They have partnered with us in designing and building very sophisticated applications in the use of precision medicine for cancer therapy selection. I highly recommend them for their expertise, professionalism and value."
          />
          <TestimonialCard
            logo="/logo2.png"
            name="Goran Skorput"
            title="CTO"
            company="HuddleUp"
            quote="Bhisey was HuddleUp’s software design and development partner for several years, helping to bring HuddleUp to the market. The team at Bhisey Software is excellent to work with, responsive, strategic, and attentive. Their technical knowledge is excellent as well as attention to detail and quick response to arising needs and changing priorities. The well-managed team boasted transparency and strong organizational skills."
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
                <li className="flex items-center gap-2 text-charcoal"><span aria-hidden>✉️</span> contact@Bhiseysoft.com</li>
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
      <ContactSection />
    </>
  );
}

import Image from 'next/image';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Link from "next/link";
import { Rocket, Wand2, Layers, Cloud, Smartphone, BarChart3, Brain, GitBranch, Square } from 'lucide-react';
import ContactCompact from '@/components/forms/ContactCompact';
import { ContactSection } from '../../../components/reusable';

export const metadata = {
  title: 'Product Driven Engagement | Bhisey Software',
  description:
    'Your goals drive our engagement strategy. We align teams, processes, and delivery to your requirements.',
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

function GoalsIntro() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-charcoal">Your Goals, Our Commitment</h2>
          <p className="mt-4 text-charcoal-light">
            At Bhisey, your product goals drive our engagement strategy. Whether launching a new product,
            transitioning to a new platform, or upgrading an existing solution, we meticulously structure our
            teams and processes to align with your goals and requirements.
          </p>
        </div>
      </Container>
    </Section>
  );
}

function GoalCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="rounded-xl border border-accent-100 bg-white p-6 shadow-sm">
      <div className="mb-6 text-accent-600" aria-hidden>
        {icon}
      </div>
      <div className="text-charcoal font-medium">{label}</div>
    </div>
  );
}

function GoalsGrid() {
  const cards = [
    { icon: <Square className="h-7 w-7" />, label: 'MVP' },
    { icon: <Rocket className="h-7 w-7" />, label: 'New product development' },
    { icon: <Wand2 className="h-7 w-7" />, label: 'Product redesign' },
    { icon: <Layers className="h-7 w-7" />, label: 'Feature upgrade' },
    { icon: <Cloud className="h-7 w-7" />, label: 'Cloud migration' },
    { icon: <Smartphone className="h-7 w-7" />, label: 'Mobile enablement' },
    { icon: <BarChart3 className="h-7 w-7" />, label: 'Enhanced analytics' },
    { icon: <Brain className="h-7 w-7" />, label: 'AI/ML integration' },
    { icon: <GitBranch className="h-7 w-7" />, label: 'CI/CD enablement' },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <GoalCard key={c.label} icon={c.icon} label={c.label} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function HighlightBanner() {
  return (
    <Section spacing="md" className="bg-white">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="rounded-xl bg-gradient-to-r from-accent-100 to-accent-200 p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold md:text-3xl">
              <span className="bg-gradient-to-r from-accent-500 to-accent-700 bg-clip-text text-transparent">
                We help you build great products and solutions that take your business to the next level
              </span>
            </h2>
            <p className="mt-3 text-base text-accent-700">Accelerating discovery and innovation</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function TestimonialCard({ logo, name, title, company, quote }: { logo: string; name: string; title: string; company: string; quote: string }) {
  return (
    <div className="rounded-xl border border-accent-100 bg-white p-6">
      <div className="mb-4 flex items-center gap-3">
        <Image src={logo} alt="Company logo" width={120} height={28} />
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
            name="Justin Bingham"
            title="CTO"
            company="Appex"
            quote="On the product and technology side of our business, Bhisey is our most valuable and trusted partner. Their team members have become invaluable, long‑term members of our Development, QA, and Product teams. At Appex, we’ve standardized on AWS, and Bhisey has been instrumental in our buildout and ongoing AWS cloud operations across our portfolio."
          />
          <TestimonialCard
            logo="/logo2.png"
            name="Matt Racki"
            title="CTO"
            company="Epion Health"
            quote="Bhisey Software acts as a core member of our team, and they have been involved in all of our major projects. They helped us build a mobile‑first website, as well as a lot of features and functions on several of our products. Bhisey has performed really well. Their team has really helped to bring our numbers up."
          />
        </div>
      </Container>
    </Section>
  );
}

function LifecycleCurve() {
  const phases = [
    { title: 'Discovery Phase', people: 'PM, SA, BA, UI/UX, BE dev, DevOps', bullets: ['MVP (must have functionality)', 'Functional requirements', 'Solution architecture and DB design', 'UI/UX design concept and flows', 'Development environment setup', 'Backlog'], time: '3 weeks' },
    { title: 'Team Ramp‑up, Core functionality development', people: 'PM, SA, BA, UI/UX, BE Devs, DevOps', bullets: ['PoC for key integrations', 'User authentication and authorization (core mechanism)', 'User management'], time: '1.5 months' },
    { title: 'Full Speed Features Development', people: 'PM, SA, BA, UI/UX, 2–3 BE Devs, 1–3 FE Devs, QA, DevOps', bullets: ['Core functionality development', 'Admin functionality development', 'Reporting', 'Other features'], time: '6 months' },
    { title: 'Stabilization, Regression Testing, Delivery', people: 'PM, SA, BA, 1–2 BE Devs, 1–2 FE Devs, QA, DevOps', bullets: ['Fully developed and tested MVP scope', 'Deployed to UAT env', 'Product documentation', 'User and admin manuals', 'Team is ready for next phase', 'US‑based production support'], time: '6.5 months' },
    { title: 'UAT & Deployment', people: 'PM, SA, BE Dev, FE Dev, DevOps, QA', bullets: ['User acceptance', 'Solution deployed', 'Staging/production environment'], time: '7 months' },
    { title: 'Ongoing Support', people: 'PM, BE Dev, FE Dev, DevOps, QA', bullets: ['Maintenance', 'Support', 'Ongoing improvements'], time: '' },
  ];

  const timeline = ['3 weeks', '1.5 months', '6 months', '6.5 months', '7 months', ''];

  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-charcoal">Flexible team configuration to match your product lifecycle requirements</h2>
          <p className="mt-4 text-charcoal-light">
            Our teams can rapidly scale up and down to optimize timeliness and cost throughout the product development lifecycle. Managed by your US‑based Delivery Manager, resource allocation is seamless and transparent to your team.
          </p>
        </div>

        <div className="relative mt-10">
          {/* Orange arc behind the phases */}
          <svg
            className="pointer-events-none absolute inset-x-0 -top-6 hidden h-36 w-full md:block"
            viewBox="0 0 1200 140"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path d="M0,120 C180,20 420,20 620,90 C820,160 1040,140 1200,90" fill="none" stroke="#E97817" strokeWidth="3" />
          </svg>

          {/* Phases grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-6">
            {phases.map((p) => (
              <div key={p.title} className="rounded-xl border border-accent-100 bg-white p-4">
                <h3 className="text-sm font-semibold text-accent-600">{p.title}</h3>
                <p className="mt-2 text-xs text-charcoal-light">{p.people}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-charcoal">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom timeline aligned under columns */}
          <div className="mt-4 border-t border-accent-100 pt-3">
            <div className="grid grid-cols-6 text-center text-xs text-charcoal-light">
              {timeline.map((t, idx) => (
                <div key={idx} className="min-h-[1rem]">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ProductCard({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-accent-100 bg-white shadow-sm">
      <div className="relative h-40 w-full">
        <Image src={src} alt="Case study" fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 text-charcoal font-semibold">{title}</h3>
        <a href="/case-studies" className="mt-3 inline-flex items-center text-accent-500 hover:text-accent-600">Learn More <span aria-hidden className="ml-2">→</span></a>
      </div>
    </div>
  );
}

function ProductsShowcase() {
  const items = [
    { src: '/home1.png', title: 'Deployed Resources: Improving Logistical Support to Aid Responders in the Wake of Sho…' },
    { src: '/home2.png', title: 'Bhisey supports Trapelo on the journey to AWS Cloud ensuring HIPAA‑Compliance' },
    { src: '/home3.png', title: 'Helix eSports: Elevating the Gaming Experience With Data‑Powered Advancement' },
  ];
  return (
    <Section className="bg-white">
      <Container>
        <h2 className="mb-8 text-center text-3xl font-bold text-charcoal">Products that make a difference</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((i) => (
            <ProductCard key={i.title} src={i.src} title={i.title} />
          ))}
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
            Please provide your contact details and some information about your project, and our Team will respond promptly to see how we can best assist you.
            To send us an RFP, simply attach the document to the form below.
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

export default function ProductDrivenEngagementPage() {
  return (
    <>
      <Hero />
      <GoalsIntro />
      <GoalsGrid />
      <HighlightBanner />
      <Testimonials />
      <LifecycleCurve />
      <ProductsShowcase />
      <ContactSection />
    </>
  );
}

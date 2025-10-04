import React from 'react';
import { HeroBanner, ClientLogoMarquee, BhiseyDifferenceGrid, TestimonialsVideoWall, CostSavingsTable, ServiceContactSection } from '@/components/reusable';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Link from 'next/link';

export const metadata = {
  title: 'Software Product Development | Bhisey',
  description: 'End-to-end software product development services accelerating delivery, quality and innovation.'
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
          <span className="text-orange-500">Product Engineering.</span>{" "}
          {/* <span className="text-gray-800">Delivered</span> */}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-12">
          Tap into our 30-year track record of building great products that create a competitive advantage, grow revenues, and increase operational efficiency
        </p>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Talk to an Expert
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
// NOTE: This page is an implementation scaffold; adjust copy and imagery to exactly match design screenshots.
export default function SoftwareProductDevelopmentPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <Hero />
      

      {/* The Bhisey Difference Section (variant heading) */}
      <BhiseyDifferenceGrid
        title="The Bhisey Difference: Designed to Build"
        className="bg-white"
        items={[
          { title: 'US-based Project Leadership', description: 'Senior delivery leadership acts as an extension of your product team.' },
          { title: 'Optimized Global Talent and Skill Mix', description: 'Blended onshore/offshore team strategy for capability + cost efficiency.' },
          { title: 'On-demand Hard-to-find Experts', description: 'Rapid access to architects, DevSecOps, data, AI/ML and UX specialists.' },
          { title: 'Cost-effective US-based UX Talent', description: 'Award-winning user experience at a fraction of typical US rates.' }
        ]}
      />

      {/* Dynamic Team Structure placeholder */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-12">Dynamic Team Structure</h2>
          <div className="w-full rounded-lg border border-accent-100 bg-white p-8 text-center text-sm text-charcoal-light">[Timeline / Arc Diagram Placeholder – implement SVG + columns]</div>
        </Container>
      </Section>

      {/* Product Aspirations Grid */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-6">Your Product Aspirations: Delivered</h2>
          <p className="mx-auto mb-12 max-w-4xl text-center text-sm md:text-base text-charcoal-light">We have been helping clients meet and exceed their goals and expectations for over three decades – whether it’s launching a new product, upgrading an existing solution, or transitioning to a modern platform.</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {['MVP Acceleration','Application Re-architecture','Cloud Migration','Mobile Enablement','UX Redesign','Process Automation','Data Analytics','AI/ML Integration'].map(item => (
              <div key={item} className="rounded-lg border border-accent-100 bg-white p-6 text-center shadow-sm transition hover:shadow-md">
                <p className="text-sm font-medium text-charcoal">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials (simplified reuse of existing video wall or slider) */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-12">We turn Ideas into Products.\nChallenges into Wins.\nProduct Owners into Heroes.</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[1,2].map(i => (
              <div key={i} className="rounded-lg border border-accent-100 bg-white p-6 shadow-sm">
                <div className="mb-4 h-6 w-24 bg-gray-200 rounded" />
                <h3 className="mb-1 text-sm font-semibold text-charcoal">Person Name</h3>
                <p className="mb-4 text-xs text-charcoal-light">Role, Company</p>
                <div className="rounded-md bg-emerald-50/80 p-4 text-xs leading-relaxed text-charcoal">Testimonial text placeholder. Replace with real client quote matching screenshot copy.</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Bhisey Comparison Tabs placeholder */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-10">Why Bhisey?</h2>
          <div className="rounded-lg border border-accent-100 bg-white p-8 text-sm text-charcoal-light">[Tabbed comparison component placeholder – Hire Team vs Offshore Talent vs Bhisey Product Engineering]</div>
        </Container>
      </Section>

      {/* Cost Savings Table reuse */}
      <CostSavingsTable heading="Lower Cost of Ownership.\nNo-compromise Quality." />

      {/* Pillars of Product Success placeholder */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-6">Pillars of Product Success</h2>
          <p className="mx-auto mb-12 max-w-4xl text-center text-sm md:text-base text-charcoal-light">Each project we undertake is anchored in our five pillars of success, providing a strong foundation for a product that not only meets your goals today, but can also scale and grow to serve you well into the future.</p>
          <div className="grid gap-6 md:grid-cols-5">
            {['On Time and On Budget','Quality from Day One','Secure from the Ground up','Architected for Scale','Adaptable to Change'].map(pillar => (
              <div key={pillar} className="rounded-lg border border-accent-100 bg-white p-6 shadow-sm text-center md:text-left">
                <h3 className="mb-3 text-sm font-semibold text-charcoal">{pillar}</h3>
                <p className="text-xs leading-relaxed text-charcoal-light">Short supporting copy placeholder. Replace with final copy from design.</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Agile Methodologies placeholder */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-10">Agile, Your Way</h2>
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {['Scrum','Kanban','Lean','XP','Crystal','Dynamic System','Feature Driven'].map(m => (
              <div key={m} className="rounded-xl border border-accent-100 bg-white px-6 py-4 text-xs font-medium text-charcoal shadow-sm">{m}</div>
            ))}
          </div>
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div className="text-sm leading-relaxed text-charcoal-light space-y-4">
              <p>While our teams are assembled from all over the world, they are all fluent in the language of Agile.</p>
              <p>Whether you have a preferred methodology for us to follow or need a hand establishing one, we’ll put our extensive Agile experience to work for you.</p>
            </div>
            <div className="rounded-lg border border-accent-100 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-sm font-semibold text-charcoal">Justin Bingham - CTO, Appex</h3>
              <div className="rounded-md bg-emerald-50/80 p-4 text-xs leading-relaxed text-charcoal">The entire Bhisey team slipped seamlessly into our Agile framework. We have product releases every other week, which allows us to continuously deliver value and adapt to user feedback.</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Case Studies reuse pattern */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-12">Transforming Great Ideas into Amazing Products</h2>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {[1,2,3].map(i => (
              <div key={i} className="group overflow-hidden rounded-lg border border-accent-100 bg-white shadow-sm transition hover:shadow-md">
                <div className="relative h-40 w-full bg-gray-200" />
                <div className="p-4">
                  <p className="mb-4 line-clamp-3 text-xs font-medium leading-snug text-charcoal">Case study headline placeholder {i}</p>
                  <Link href="#" className="inline-flex items-center text-xs font-semibold text-accent-500 hover:text-accent-600">Learn More →</Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Section (service variant) */}
      <ServiceContactSection id="contact-product" title="See How We Can Bring Your Product to Life" />
    </main>
  );
}

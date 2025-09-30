import React from 'react';
import { HeroBanner, ClientLogoMarquee, KandaDifferenceGrid, TestimonialsVideoWall, CostSavingsTable, ServiceContactSection } from '@/components/reusable';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Link from 'next/link';

export const metadata = {
  title: 'Software Product Development | Kanda',
  description: 'End-to-end software product development services accelerating delivery, quality and innovation.'
};

// NOTE: This page is an implementation scaffold; adjust copy and imagery to exactly match design screenshots.
export default function SoftwareProductDevelopmentPage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <HeroBanner
        alignment="left"
        overlay="gradient"
        variant="compact"
        title="Product Engineering"
        subtitle="Tap into our 30-year track record of building great products that create a competitive advantage, grow revenues, and increase operational efficiency"
        primaryCta={{ href: '#contact-product', text: 'Talk to an Expert' }}
        className="bg-gradient-to-b from-accent-800 via-accent-700 to-accent-600 text-white"
      />

      {/* Bullet value props under hero (two column list on md+) */}
      <Section className="bg-gradient-to-b from-accent-700 via-accent-600 to-white pt-0" spacing="lg">
        <Container>
          <div className="grid gap-8 text-white/90 md:grid-cols-2 text-sm md:text-base leading-relaxed">
            <ul className="space-y-3 list-disc list-inside">
              <li>Modernize the customer experience</li>
              <li>Empower users with data and insights</li>
            </ul>
            <ul className="space-y-3 list-disc list-inside">
              <li>Streamline and automate processes</li>
              <li>Accelerate business agility and innovation</li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* Client Spotlight + CTA Panel */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-charcoal md:text-4xl mb-2">Client Spotlight</h2>
            <p className="text-sm md:text-base text-charcoal-light">Trusted by 350+ Clients Worldwide</p>
          </div>
          <ClientLogoMarquee speed="fast" pauseOnHover className="mb-12 bg-accent-50/60 rounded-md" logos={[] as any} showTitle={false} />
          <div className="rounded-xl bg-gradient-to-br from-accent-600 via-accent-500 to-accent-600 p-10 md:p-16 text-center text-white shadow-md">
            <h3 className="mb-4 text-xl md:text-2xl font-semibold tracking-tight">Product Challenges? Solved.</h3>
            <p className="mb-8 text-sm md:text-base text-white/90">Can’t-miss deadlines and impossibly tight budget?</p>
            <Link href="#contact-product" className="inline-flex items-center rounded-md bg-white/95 px-6 py-3 text-sm font-semibold text-accent-600 shadow hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-accent-300">
              Talk to our Product Engineering Experts →
            </Link>
          </div>
        </Container>
      </Section>

      {/* The Kanda Difference Section (variant heading) */}
      <KandaDifferenceGrid
        title="The Kanda Difference: Designed to Build"
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

      {/* Why Kanda Comparison Tabs placeholder */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-10">Why Kanda?</h2>
          <div className="rounded-lg border border-accent-100 bg-white p-8 text-sm text-charcoal-light">[Tabbed comparison component placeholder – Hire Team vs Offshore Talent vs Kanda Product Engineering]</div>
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
              <div className="rounded-md bg-emerald-50/80 p-4 text-xs leading-relaxed text-charcoal">The entire Kanda team slipped seamlessly into our Agile framework. We have product releases every other week, which allows us to continuously deliver value and adapt to user feedback.</div>
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

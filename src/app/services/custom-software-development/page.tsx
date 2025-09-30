import React from 'react';
import { HeroBanner, ClientLogoMarquee, KandaDifferenceGrid, TestimonialsVideoWall, CostSavingsTable, ServiceContactSection, AwardsRecognitionGrid } from '@/components/reusable';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Link from 'next/link';

export const metadata = {
  title: 'Custom Software Development | Kanda',
  description: 'Custom software development services delivering innovation, speed, and measurable business value.'
};

export default function CustomSoftwareDevelopmentPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <HeroBanner
        alignment="left"
        overlay="gradient"
        variant="compact"
        title="Custom Software Development"
        subtitle="Software Innovation. Delivered. Leverage our 30-year track record, and depth and breadth of technical expertise of building software solutions that help our Clients achieve competitive advantage, grow revenues, encapsulate core competency, save on opportunity costs, and increase operational efficiency."
        primaryCta={{ href: '#contact-custom-software', text: 'Talk to an Expert' }}
        className="bg-gradient-to-b from-accent-800 via-accent-700 to-accent-600 text-white"
      />

      {/* Intro Secondary Paragraph */}
      {/* Secondary intro strip with improved contrast (darker overlay removed, readable text color) */}
      <Section className="bg-gradient-to-b from-accent-700 via-accent-600 to-white pt-0" spacing="lg">
        <Container>
          <p className="max-w-5xl text-sm md:text-base leading-relaxed text-white/90 drop-shadow">
            We are a full-service Custom Software Development, Cloud Engineering, Data Analytics, DevOps and ML/AI company blending in-depth domain expertise, exceptional engineering talent, rigorous agile development processes, commitment to client IP protection. We are committed to customer success, which is proven by hundreds of successful deployments and market launches over Kanda's long operational heritage.
          </p>
        </Container>
      </Section>

      {/* Client Spotlight + CTA Panel */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-charcoal md:text-4xl mb-2">Client Spotlight</h2>
            <p className="text-sm md:text-base text-charcoal-light">Trusted by 350+ Clients Worldwide</p>
          </div>
          <ClientLogoMarquee speed="fast" pauseOnHover className="mb-1 bg-accent-50/60 rounded-md" logos={[] as any} showTitle={false} />
          <div className="rounded-xl bg-gradient-to-br from-accent-600 via-accent-500 to-accent-600 p-10 md:p-16 text-center text-black shadow-md">
            <h3 className="mb-4 text-black text-xl md:text-2xl font-semibold tracking-tight">Software Development Challenges? Solved.</h3>
            <p className="mb-8 text-sm md:text-base text-black">Can't-miss deadlines and impossibly tight budget?</p>
            <Link href="#contact-custom-software" className="inline-flex items-center rounded-md bg-white/95 px-6 py-3 text-sm font-semibold text-accent-600 shadow hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-accent-300">
              Talk to our Experts →
            </Link>
          </div>
        </Container>
      </Section>

      {/* The Kanda Difference */}
      <KandaDifferenceGrid
        title="The Kanda Difference"
        className="bg-white"
        items={[
          { title: 'Partner by Design', description: 'We embed seamlessly with your team ensuring transparency, velocity, and shared goals.' },
          { title: 'Product Driven Engagement', description: 'Outcome-oriented collaboration focused on measurable value and user impact.' },
          { title: 'People You Can Count On', description: 'Battle-tested engineers, architects, designers, and analysts with long tenure.' },
          { title: 'Proven Success', description: 'Hundreds of deliveries across regulated, high-stakes, and innovation-driven domains.' }
        ]}
      />

      {/* Designed to Deliver Section */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <div className="mx-auto mb-1 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Designed to Deliver Faster Time to Innovation</h2>
            <p className="text-base md:text-lg text-charcoal-light">Every project team is structured to optimize your custom software development objectives and business goals.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: 'US-based Project Leadership', text: 'Our Delivery Manager is a senior technology leader that becomes an extension of your team, ensuring your software development milestones and goals are met from kickoff to delivery.' },
              { title: 'Optimized Global Talent and Skill Mix', text: 'Our teams are strategically staffed to deliver industry-leading breadth and depth of technology skills and expertise while optimizing delivery costs.' },
              { title: 'On-demand Hard-to-find Experts', text: 'Specialized resources like business analysts, architects, DevSecOps, AI/ML engineers, and others can be added on-demand to serve specific software project requirements.' },
              { title: 'Cost-effective US-based UX Talent', text: 'Our partnership with Bentley University\'s User Experience Center enables us to deliver award-winning designs and user experiences at an affordable price point.' }
            ].map(card => (
              <div key={card.title} className="rounded-lg border border-accent-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                <h3 className="mb-3 text-lg font-semibold text-charcoal">{card.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal-light">{card.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Software Development Services (single highlighted card per screenshot) */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <h2 className="mb-10 text-3xl md:text-4xl font-bold text-charcoal">Software Development Services</h2>
          <div className="rounded-lg border border-accent-100 p-8 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-charcoal">Cloud Engineering</h3>
            <p className="text-sm leading-relaxed text-charcoal-light">
              Whether you are already in the Cloud, considering Cloud Migration or looking to develop a Cloud-Native application, Kanda will back you up with our in-depth cloud engineering expertise and over 30+ years of experience modernizing legacy solutions and developing innovative applications for companies ranging from startups to large enterprises. We excel in private, hybrid and public cloud environments helping our clients build high-performance scalable and secure solutions to maximize return on cloud initiatives, increase business agility, reduce costs and lower risks.
            </p>
          </div>
        </Container>
      </Section>

      {/* Awards & Partnerships */}
  <AwardsRecognitionGrid />

      {/* Testimonials Video Wall */}
      <TestimonialsVideoWall
        heading="See what people have to say about Kanda"
        main={{ id: 'L9szwQd8z0w' }}
        side={[{ id: 'Xr1g6URZ7Hk' }, { id: 'tHcN1qQn7eE' }, { id: 'b4RJd9fWfWc' }]}
      />

      {/* Industry Expertise (grid style in screenshot rather than tab panel) */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <h2 className="mb-1 text-center text-3xl md:text-4xl font-bold text-charcoal">Industry Expertise</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {['Healthcare','Life Sciences','Real Estate','Marketing and Advertising','Retail and eCommerce','Finance and Banking','Education and E-Learning','Travel and Hospitality','Technology','Logistics and Transportation','Manufacturing'].map(item => (
              <div key={item} className="flex flex-col justify-between rounded-lg border border-accent-100 bg-white p-6 text-center shadow-sm transition hover:shadow-md">
                <p className="text-sm font-medium text-charcoal">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section className="bg-white" spacing="xl">
        <Container>
          <h2 className="mb-1 text-center text-3xl md:text-4xl font-bold text-charcoal">Case Studies</h2>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {[
              { title: 'Deployed Resources: Improving Logistical Support to Aid Responders in the Wake of Sh...', image: '/case1.jpg' },
              { title: 'Biosimulation Tool Performing in Silico Experiments', image: '/case2.jpg' },
              { title: 'Engineering Takeover and Full Platform Development for a Globally Recognized Healthcare...', image: '/case3.jpg' }
            ].map(card => (
              <div key={card.title} className="group overflow-hidden rounded-lg border border-accent-100 bg-white shadow-sm transition hover:shadow-md">
                <div className="relative h-40 w-full bg-gray-200" />
                <div className="p-4">
                  <p className="mb-4 line-clamp-3 text-xs font-medium leading-snug text-charcoal">{card.title}</p>
                  <Link href="#" className="inline-flex items-center text-xs font-semibold text-accent-500 hover:text-accent-600">Learn More →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="#" className="rounded-full border border-accent-300 px-6 py-2 text-xs font-medium text-charcoal hover:bg-accent-50">Read More →</Link>
          </div>
        </Container>
      </Section>

      {/* Cost Savings Table */}
      <CostSavingsTable />

      {/* Contact Section */}
      <ServiceContactSection />
    </main>
  );
}

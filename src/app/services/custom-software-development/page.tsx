import React from 'react';
import { HeroBanner, ClientLogoMarquee, BhiseyDifferenceGrid, TestimonialsVideoWall, CostSavingsTable, ServiceContactSection, AwardsRecognitionGrid } from '@/components/reusable';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import Link from 'next/link';

export const metadata = {
  title: 'Custom Software Development | Bhisey',
  description: 'Custom software development services delivering innovation, speed, and measurable business value.'
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
          <span className="text-orange-500">Custom Software.</span>{" "}
          <span className="text-gray-800">Development</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-12">
          Software Innovation. Delivered. Leverage our 30-year track record, and depth and breadth of technical expertise of building software solutions that help our Clients achieve competitive advantage, grow revenues, encapsulate core competency, save on opportunity costs, and increase operational efficiency.
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

export default function CustomSoftwareDevelopmentPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <Hero />
     

      {/* The Bhisey Difference */}
      <BhiseyDifferenceGrid
        title="The Bhisey Difference"
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
              Whether you are already in the Cloud, considering Cloud Migration or looking to develop a Cloud-Native application, Bhisey will back you up with our in-depth cloud engineering expertise and over 30+ years of experience modernizing legacy solutions and developing innovative applications for companies ranging from startups to large enterprises. We excel in private, hybrid and public cloud environments helping our clients build high-performance scalable and secure solutions to maximize return on cloud initiatives, increase business agility, reduce costs and lower risks.
            </p>
          </div>
        </Container>
      </Section>

      {/* Awards & Partnerships */}
  <AwardsRecognitionGrid />

      {/* Testimonials Video Wall */}
      <TestimonialsVideoWall
        heading="See what people have to say about Bhisey"
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

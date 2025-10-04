import React from 'react';
import Link from "next/link";
import { 
  ProvenSuccessBanner,
  LegacyOfTrustGrid,
  GradientCTAStrip,
  TestimonialsVideoWall,
  AwardsRecognitionGrid,
  FeaturedSuccessStories,
  ContactSection,
  ClientLogoMarquee,
} from '@/components/reusable';

export const metadata = {
  title: 'Proven Success | Bhisey Software',
  description: 'Track record of helping clients gain competitive advantage, revenue, and efficiency.'
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


export default function ProvenSuccessPage() {
  return (
    <>
      <Hero />
      {/* <ClientLogoMarquee 
        logos={[
          { name: 'Client1', src: '/logo1.png', alt: 'Client1' },
          { name: 'Client2', src: '/logo2.png', alt: 'Client2' },
          { name: 'Client3', src: '/logo3.png', alt: 'Client3' },
          { name: 'Client4', src: '/logo4.png', alt: 'Client4' },
          { name: 'Client5', src: '/logo5.png', alt: 'Client5' },
          { name: 'Client6', src: '/logo6.png', alt: 'Client6' },
        ]}
        title="Client Spotlight"
        speed="slow"
        pauseOnHover
      /> */}
      <LegacyOfTrustGrid />
      <GradientCTAStrip />
      <TestimonialsVideoWall 
        main={{ id: 'dQw4w9WgXcQ' }}
        side={[{ id: 'JkK8g6FMEXE' }, { id: 'QB7ACr7pUuE' }, { id: 'Ks-_Mh1QhMc' }]} />
      <AwardsRecognitionGrid />
      <FeaturedSuccessStories />
      <ContactSection />
    </>
  );
}
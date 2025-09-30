import React from 'react';
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
  title: 'Proven Success | Kanda Software',
  description: 'Track record of helping clients gain competitive advantage, revenue, and efficiency.'
};

export default function ProvenSuccessPage() {
  return (
    <>
      <ProvenSuccessBanner />
      <ClientLogoMarquee 
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
      />
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
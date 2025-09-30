import React from 'react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Image from 'next/image';

interface AwardItem { img: string; title: string; subtitle: string; }

export interface AwardsRecognitionGridProps { awards?: AwardItem[]; }

const DEFAULT: AwardItem[] = [
  { img: '/award1.png', title: 'IAOP 2024', subtitle: 'Top 100 Outsourcing Companies' },
  { img: '/award2.png', title: 'Inc.5000', subtitle: '10 years in a Row' },
  { img: '/award3.png', title: 'Health Tech Digital Awards', subtitle: 'Best COVID-19 Solution for Workplace Management' },
  { img: '/award4.png', title: 'Bio-IT', subtitle: 'Best Patient-Centric Software for Lifestage and Trapezio Platforms' },
];

export const AwardsRecognitionGrid: React.FC<AwardsRecognitionGridProps> = ({ awards = DEFAULT }) => {
  return (
    <Section spacing="xl" className="bg-white">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-charcoal md:text-4xl">Awards and Recognition</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {awards.map(a => (
            <div key={a.title} className="flex flex-col items-center rounded-lg border border-accent-100 bg-white p-6 text-center shadow-sm transition hover:shadow-md">
              <div className="relative mb-4 h-32 w-32">
                <Image src={a.img} alt={a.title} fill className="object-contain" />
              </div>
              <p className="text-sm font-semibold text-charcoal">{a.title}</p>
              <p className="mt-2 text-xs leading-snug text-charcoal-light">{a.subtitle}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default AwardsRecognitionGrid;

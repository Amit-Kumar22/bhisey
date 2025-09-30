import React from 'react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import Image from 'next/image';
import Link from 'next/link';

interface Story { img: string; title: string; excerpt: string; href: string; }

const DEFAULT: Story[] = [
  { img: '/case1.png', title: 'A HIPAA Compliant Cloud Strategy: Choosing a Cloud Service Provider', excerpt: '', href: '/case-studies/hipaa-cloud' },
  { img: '/case2.png', title: 'Astellas: Business-Critical Ethics And Compliance Platform Development', excerpt: '', href: '/case-studies/astellas' },
  { img: '/case3.png', title: 'A leading exclusive invitation-only Online Retailer', excerpt: '', href: '/case-studies/retailer' },
];

export const FeaturedSuccessStories: React.FC<{ stories?: Story[] }> = ({ stories = DEFAULT }) => {
  return (
    <Section spacing="xl" className="bg-white">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-charcoal md:text-4xl">Featured Success Stories</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {stories.map(s => (
            <Link key={s.title} href={s.href} className="group block overflow-hidden rounded-lg border border-accent-100 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent-400">
              <div className="relative h-40 w-full overflow-hidden">
                <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold leading-snug text-charcoal">{s.title}</h3>
                <div className="mt-3 inline-flex items-center text-sm font-medium text-accent-600">
                  Learn More <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedSuccessStories;

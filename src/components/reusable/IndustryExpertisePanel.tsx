'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

interface IndustryItem {
  title: string;
  description: string;
  href: string;
  image: string;
  keyPoints: string[];
  clientCount?: number;
}

interface IndustryExpertisePanelProps {
  title: string;
  subtitle?: string;
  industries: IndustryItem[];
  className?: string;
}

export const IndustryExpertisePanel: React.FC<IndustryExpertisePanelProps> = ({
  title,
  subtitle,
  industries,
  className = ''
}) => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <Section className={`py-20 bg-white ${className}`}>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-charcoal-light max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Industry Tabs */}
          <div className="space-y-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeIndustry === index
                    ? 'bg-accent-500 text-white shadow-lg'
                    : 'bg-background-light hover:bg-accent-50 text-charcoal'
                }`}
                onClick={() => setActiveIndustry(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">
                    {industry.title}
                  </h3>
                  <ChevronRight 
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeIndustry === index ? 'rotate-90' : ''
                    }`}
                  />
                </div>
                
                {activeIndustry === index && (
                  <div className="mt-4 animate-fade-in-up">
                    <p className="mb-4 opacity-90">
                      {industry.description}
                    </p>
                    
                    <ul className="space-y-2 mb-4">
                      {industry.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <ChevronRight className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm opacity-90">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {industry.clientCount && (
                      <div className="text-sm opacity-90 mb-4">
                        <strong>{industry.clientCount}+</strong> successful projects delivered
                      </div>
                    )}
                    
                    <Link
                      href={industry.href}
                      className="inline-flex items-center text-sm font-semibold text-accent-300 hover:text-white transition-colors duration-200"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Industry Image */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={industries[activeIndustry]?.image || '/home1.png'}
                alt={industries[activeIndustry]?.title || 'Industry expertise'}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Overlay with industry info */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent-500/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-xl font-bold mb-2">
                  {industries[activeIndustry]?.title}
                </h4>
                <p className="text-sm opacity-90">
                  Specialized solutions for {industries[activeIndustry]?.title.toLowerCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default IndustryExpertisePanel;
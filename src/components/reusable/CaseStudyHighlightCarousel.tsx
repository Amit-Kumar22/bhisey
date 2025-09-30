'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

interface CaseStudy {
  title: string;
  client: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
  results?: string;
}

interface CaseStudyHighlightCarouselProps {
  title: string;
  subtitle?: string;
  caseStudies: CaseStudy[];
  viewAllLink?: {
    text: string;
    href: string;
  };
  className?: string;
}

export const CaseStudyHighlightCarousel: React.FC<CaseStudyHighlightCarouselProps> = ({
  title,
  subtitle,
  caseStudies,
  viewAllLink,
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  if (caseStudies.length === 0) {
    return null;
  }

  const currentCase = caseStudies[currentSlide];

  return (
    <Section className={`py-20 bg-accent-500 text-white ${className}`}>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Case Study Content */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {currentCase.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs font-semibold bg-accent-500 text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {currentCase.title}
              </h3>
              
              <p className="text-accent-300 text-lg font-semibold mb-4">
                {currentCase.client}
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {currentCase.description}
              </p>
              
              {currentCase.results && (
                <div className="bg-accent-500 bg-opacity-20 rounded-lg p-6 mb-8">
                  <h4 className="text-lg font-bold text-accent-300 mb-2">Results</h4>
                  <p className="text-gray-300">{currentCase.results}</p>
                </div>
              )}
              
              <Link
                href={currentCase.href}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-charcoal bg-accent-300 border border-transparent rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 transition-colors duration-200"
              >
                View Case Study
              </Link>
            </div>
            
            {/* Case Study Image */}
            <div className="relative">
              <div className="relative w-full h-80 lg:h-96 rounded-lg overflow-hidden">
                <Image
                  src={currentCase.image}
                  alt={currentCase.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          {caseStudies.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-colors duration-200"
                aria-label="Previous case study"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-colors duration-200"
                aria-label="Next case study"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}
        </div>
        
        {/* Dots Navigation */}
        {caseStudies.length > 1 && (
          <div className="flex justify-center space-x-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 ${
                  index === currentSlide
                    ? 'bg-accent-500'
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label={`Go to case study ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : 'false'}
              />
            ))}
          </div>
        )}
        
        {viewAllLink && (
          <div className="text-center mt-12">
            <Link
              href={viewAllLink.href}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-charcoal bg-accent-300 border border-transparent rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 transition-colors duration-200"
            >
              {viewAllLink.text}
            </Link>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default CaseStudyHighlightCarousel;
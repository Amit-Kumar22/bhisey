'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import type { TestimonialSliderProps } from '@/types';

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  title = 'What Our Clients Say',
  variant = 'standard',
  autoPlay = true,
  autoPlayInterval = 5000,
  showNavigation = true,
  showDots = true,
  showTitle = true,
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) {
        setIsPlaying(false);
      }
    };
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (isPlaying && !prefersReducedMotion && testimonials.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, prefersReducedMotion, testimonials.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPlaying(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsPlaying(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToPrevious();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToNext();
    } else if (event.key === ' ') {
      event.preventDefault();
      setIsPlaying(!isPlaying);
    }
  };

  const sectionClasses = [
    variant === 'compact' ? 'py-12' : 'py-20',
    variant === 'large' ? 'py-32' : '',
    'bg-background-light',
    className
  ].filter(Boolean).join(' ');

  if (testimonials.length === 0) {
    return (
      <Section className={sectionClasses}>
        <Container>
          <div className="text-center py-12">
            <p className="text-lg text-charcoal-light">
              No testimonials available.
            </p>
          </div>
        </Container>
      </Section>
    );
  }

  const currentTestimonial = testimonials[currentSlide];

  return (
    <Section 
      className={sectionClasses}
      aria-label={ariaLabel || 'Client testimonials'}
      {...props}
    >
      <Container>
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
              {title}
            </h2>
          </div>
        )}
        
        <div 
          ref={sliderRef}
          className="relative max-w-4xl mx-auto"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Testimonial slider"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center relative">
            <Quote className="w-12 h-12 text-accent-300 mx-auto mb-6" aria-hidden="true" />
            
            <blockquote className="text-lg md:text-xl leading-relaxed text-charcoal mb-8">
              &ldquo;{currentTestimonial.quote}&rdquo;
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              {currentTestimonial.image && (
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={currentTestimonial.image}
                    alt={`${currentTestimonial.author} photo`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
              )}
              
              <div className="text-left">
                <cite className="block text-lg font-semibold text-charcoal not-italic">
                  {currentTestimonial.author}
                </cite>
                <p className="text-base text-charcoal-light">
                  {currentTestimonial.title}
                  {currentTestimonial.company && (
                    <span>, {currentTestimonial.company}</span>
                  )}
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          {showNavigation && testimonials.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-charcoal" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-charcoal" />
              </button>
            </>
          )}
        </div>
        
        {/* Dots Navigation */}
        {showDots && testimonials.length > 1 && (
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 ${
                  index === currentSlide
                    ? 'bg-accent-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : 'false'}
              />
            ))}
          </div>
        )}
        
        {/* Screen Reader Information */}
        <div className="sr-only" aria-live="polite">
          Testimonial {currentSlide + 1} of {testimonials.length}
        </div>
        
        {prefersReducedMotion && autoPlay && (
          <div className="mt-4 text-center">
            <p className="text-sm text-charcoal-light">
              Auto-play paused due to motion preference settings
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default TestimonialSlider;
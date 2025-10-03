"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { fetchCaseStudies } from '@/store/slices/caseStudiesSlice';

// Testimonials data
const testimonials = [
  {
    id: '1',
    name: 'Daniel Ruvinsky',
    title: 'Lead Software Architect, Docurated',
    company: 'Quark Docurated',
    rating: 99,
    quote: 'Thanks to Kanda\'s efforts, the client was acquired by another company, a major goal. Kanda\'s diligence, attention to detail, and systematic approach made for a successful partnership. Their willingness to work hard and solve problems as they stood out.'
  },
  {
    id: '2',
    name: 'Krishna Boppana',
    title: 'Head of Technology, Havas',
    company: 'HAVAS',
    rating: 99,
    quote: 'Kanda put together an excellent team of business analysts, project managers, and technical resources who are seasoned professionals and developed new data pipelines processing terabytes of data in GCP leveraging BigQuery, Python, TensorFlow, BigQuery\'s machine learning functionality for optimization, and dashboards in Data Studio for the reporting.'
  },
  {
    id: '3',
    name: 'Andrew Duggan',
    title: 'CEO, medque',
    company: 'MEDQUE',
    rating: 99,
    quote: 'Kanda proved to be an exceptional choice for our development needs. They were much more of a partner to our startup than a vendor. The more reliable than our in-house members of our development organization, and the results showed that. Our customers are extremely pleased with the desktop and mobile applications. I would definitely recommend hiring Kanda for any and all of your development needs.'
  },
  {
    id: '4',
    name: 'Micah Jasny',
    title: 'Botanical Coordinator, Native Plant Trust',
    company: 'Native Plant Trust',
    rating: 99,
    quote: 'As a conservation nonprofit, Kanda has been critical to helping us revolutionize how we collect, manage, and store data. Their user staff is incredibly passionate about the work we do and have been very flexible in finding solutions. Their tech staff is always available and incredibly quick to respond if there is ever an issue.'
  }
];

// Why Kanda features data
const whyKandaFeatures = [
  {
    number: '01',
    title: '30+ years of Best Practices in software product development and deployment'
  },
  {
    number: '02', 
    title: 'Breadth and Depth of Technology Expertise at your fingertips'
  },
  {
    number: '03',
    title: 'Seamless integration with your engineering culture and development practices'
  },
  {
    number: '04',
    title: 'Agile at our Core'
  },
  {
    number: '05',
    title: 'Rapidly scale teams up (or down) maximizing efficiency and cost'
  },
  {
    number: '06',
    title: 'Experts in Faster Time to Market without sacrificing High Quality'
  }
];

export default function CaseStudiesPage() {
  const dispatch = useAppDispatch();
  const { items: caseStudies, status, error } = useAppSelector((state) => state.caseStudies);
  
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedContentType, setSelectedContentType] = useState('All Content Types');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    dispatch(fetchCaseStudies());
  }, [dispatch]);

  // Extract unique industries from backend data
  const industries = useMemo(() => {
    const uniqueIndustries = new Set<string>();
    caseStudies.forEach(study => {
      if (study.industry) {
        uniqueIndustries.add(study.industry);
      }
    });
    return ['All Industries', ...Array.from(uniqueIndustries).sort()];
  }, [caseStudies]);

  // Content types based on tags or default categories
  const contentTypes = useMemo(() => {
    const uniqueTypes = new Set<string>();
    caseStudies.forEach(study => {
      // You can add a contentType field or derive from tags
      if (study.techStack && Array.isArray(study.techStack)) {
        study.techStack.forEach(tech => uniqueTypes.add(tech));
      }
    });
    return ['All Content Types', ...Array.from(uniqueTypes).sort()].slice(0, 10); // Limit to 10
  }, [caseStudies]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Filter case studies based on selected filters from backend data
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(study => {
      const industryMatch = selectedIndustry === 'All Industries' || study.industry === selectedIndustry;
      const contentTypeMatch = selectedContentType === 'All Content Types' || 
        (study.techStack && study.techStack.includes(selectedContentType));
      return industryMatch && contentTypeMatch;
    });
  }, [caseStudies, selectedIndustry, selectedContentType]);

  // Get image URL helper
  const getImageUrl = (heroImage: any) => {
    if (!heroImage) return '/api/placeholder/600/400';
    if (typeof heroImage === 'string') return heroImage;
    if (heroImage.url) return heroImage.url;
    return '/api/placeholder/600/400';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Section className="py-16 bg-accent-500" spacing="none">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Case Studies
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              350+ Clients trust Kanda Software with their business-critical software development initiatives
            </p>
          </div>
        </Container>
      </Section>

      {/* Filters Section - Dynamic from Backend */}
      <Section className="py-8 bg-white border-b border-gray-200" spacing="none">
        <Container>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Industry Filter */}
            <div className="relative">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 min-w-[200px]"
                disabled={status === 'loading'}
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Content Type Filter */}
            <div className="relative">
              <select
                value={selectedContentType}
                onChange={(e) => setSelectedContentType(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 min-w-[200px]"
                disabled={status === 'loading'}
              >
                {contentTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Case Studies Grid - Backend Data */}
      <Section className="py-16" spacing="none">
        <Container>
          {/* Loading State */}
          {status === 'loading' && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent-600"></div>
              <p className="mt-4 text-gray-600">Loading case studies...</p>
            </div>
          )}

          {/* Error State */}
          {status === 'error' && (
            <div className="text-center py-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-red-600 font-semibold mb-2">Error loading case studies</p>
                <p className="text-red-500 text-sm">{error || 'Something went wrong'}</p>
              </div>
            </div>
          )}

          {/* No Results */}
          {status === 'idle' && filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No case studies found matching your filters.</p>
            </div>
          )}

          {/* Case Studies Grid */}
          {status === 'idle' && filteredCaseStudies.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredCaseStudies.map((study) => (
                  <article key={study.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-video bg-gradient-to-br from-accent-300 to-accent-600 relative">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                          <svg className="w-10 h-10 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9H21ZM19 21H5V3H13V9H19V21Z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      {study.industry && (
                        <div className="mb-2">
                          <span className="inline-block px-3 py-1 bg-accent-100 text-accent-600 text-sm rounded-full font-medium">
                            {study.industry}
                          </span>
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight line-clamp-3">
                        {study.title}
                      </h3>
                      {study.clientName && (
                        <p className="text-gray-600 text-sm mb-4">
                          Client: <span className="font-semibold">{study.clientName}</span>
                        </p>
                      )}
                      <Link 
                        href={`/resource/case-study/${study.slug}`}
                        className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700 transition-colors"
                      >
                        Learn More 
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button - Only show if there are more than 10 items */}
              {filteredCaseStudies.length > 10 && (
                <div className="text-center mt-12">
                  <button className="bg-accent-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-accent-700 transition-colors duration-200">
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-16 bg-accent-500" spacing="none">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Testimonials
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`bg-white rounded-lg p-6 transition-all duration-300 ${
                    index === currentTestimonial ? 'md:col-span-2 md:row-span-1' : ''
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-accent-600">{testimonial.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-sm font-semibold text-accent-600">{testimonial.company}</p>
                  </div>

                  {index === currentTestimonial && (
                    <blockquote className="text-gray-700 leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-white rounded-full hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 bg-white rounded-full hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Kanda Section */}
      <Section className="py-16 bg-white" spacing="none">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Kanda?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyKandaFeatures.map((feature) => (
              <div key={feature.number} className="text-center">
                <div className="text-6xl font-bold text-accent-600 mb-4">
                  {feature.number}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section className="py-16 bg-accent-500" spacing="none">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Reach out to see how we can help
            </h2>
            
            {/* Partner Logos */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 mx-auto">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#4285F4"/>
                    <circle cx="12" cy="12" r="6" fill="#34A853"/>
                    <circle cx="12" cy="12" r="2" fill="#EA4335"/>
                  </svg>
                </div>
                <p className="text-white text-sm font-medium">Google Cloud</p>
                <p className="text-white/80 text-xs">Premier Partner</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 mx-auto">
                  <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.2 14.5l1.3-3.8 3.8 1.3-1.3 3.8-3.8-1.3zm5.1-8.4l3.8 1.3-1.3 3.8-3.8-1.3 1.3-3.8zm-8.1 3.8l3.8 1.3-1.3 3.8-3.8-1.3 1.3-3.8z"/>
                  </svg>
                </div>
                <p className="text-white text-sm font-medium">AWS Advanced</p>
                <p className="text-white/80 text-xs">Consulting Partner</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 mx-auto">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <rect width="24" height="24" fill="#00BCF2"/>
                    <rect x="6" y="6" width="12" height="12" fill="#FFB900"/>
                    <rect x="6" y="6" width="6" height="6" fill="#F25022"/>
                    <rect x="12" y="6" width="6" height="6" fill="#7FBA00"/>
                    <rect x="6" y="12" width="6" height="6" fill="#00A4EF"/>
                  </svg>
                </div>
                <p className="text-white text-sm font-medium">Microsoft</p>
                <p className="text-white/80 text-xs">Gold Partner</p>
              </div>
            </div>

            <button className="bg-white text-accent-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              Contact Us →
            </button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
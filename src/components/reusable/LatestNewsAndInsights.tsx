'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

interface NewsItem {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  date: string;
  category: string;
  readTime?: string;
}

interface LatestNewsAndInsightsProps {
  title: string;
  subtitle?: string;
  newsItems: NewsItem[];
  viewAllLink?: {
    text: string;
    href: string;
  };
  className?: string;
}

export const LatestNewsAndInsights: React.FC<LatestNewsAndInsightsProps> = ({
  title,
  subtitle,
  newsItems,
  viewAllLink,
  className = ''
}) => {
  return (
    <Section className={`py-20 bg-background-light ${className}`}>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 text-xs font-semibold bg-accent-500 text-white rounded-full">
                    {item.category}
                  </span>
                  {item.readTime && (
                    <span className="text-xs text-charcoal-light">
                      {item.readTime}
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-accent-500 transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-charcoal-light text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-charcoal-light">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  
                  <div className="flex items-center text-accent-500 group-hover:text-accent-600 transition-colors duration-300">
                    <span className="text-sm font-semibold mr-2">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {viewAllLink && (
          <div className="text-center mt-12">
            <Link
              href={viewAllLink.href}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-accent-500 border border-transparent rounded-md hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 transition-colors duration-200"
            >
              {viewAllLink.text}
            </Link>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default LatestNewsAndInsights;
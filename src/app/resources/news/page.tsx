"use client";

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

// News data structure
interface NewsItem {
  id: string;
  title: string;
  excerpt?: string;
  date: string;
  image: string;
  featured?: boolean;
}

// News data - matching the content from the screenshots
const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Bhisey Upgrades to ISO/IEC 27001:2022 Certification for Enhanced Information Security',
    date: 'August 06, 2025',
    image: '/images/news/iso-certification.jpg',
    featured: true
  },
  {
    id: '2',
    title: 'Bhisey Software Named Among Top 100 Medical Software Development Companies of 2025 by Techreviewer.co',
    date: 'August 05, 2025',
    image: '/images/news/top-100-medical.jpg'
  },
  {
    id: '3',
    title: 'Bhisey Software Achieves AWS Healthcare Services Competency',
    date: 'May 28, 2025',
    image: '/images/news/aws-healthcare.jpg'
  },
  {
    id: '4',
    title: 'Bhisey Software Welcomes MediaPedia as New Client to Build Groundbreaking Media Bias Rating System',
    date: 'March 05, 2025',
    image: '/images/news/mediapedia.jpg'
  },
  {
    id: '5',
    title: 'Bhisey Software Achieves Microsoft\'s Solutions Partner Designation for Data & AI',
    date: 'November 25, 2024',
    image: '/images/news/microsoft-partner.jpg'
  },
  {
    id: '6',
    title: 'Bhisey Begins Initiative with Crafting Minds Group to Launch AI-Powered Platform for Students with Learning Disabilities',
    date: 'November 25, 2024',
    image: '/images/news/crafting-minds.jpg'
  },
  {
    id: '7',
    title: 'Bhisey and Fraud Protection Network, Inc. Launch Database Optimization for Tenant Screening Platform',
    date: 'July 25, 2024',
    image: '/images/news/fraud-protection.jpg'
  },
  {
    id: '8',
    title: 'Bhisey Software Wins Gold and Silver in the 11th Annual 2024 Globee® Awards for Technology',
    date: 'July 16, 2024',
    image: '/images/news/globee-awards.jpg'
  }
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <Section className="py-16" spacing="none">
        <Container>
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
              News
            </h1>
          </div>

          {/* News Grid */}
          <div className="space-y-8">
            {/* Featured News Article */}
            {featuredNews && (
              <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3">
                    <div className="aspect-video lg:aspect-square bg-gray-100 relative">
                      <div className="w-full h-full bg-gradient-to-br from-accent-300 to-accent-600 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9H21ZM19 21H5V3H13V9H19V21Z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <div className="mb-4">
                      <span className="text-sm text-gray-600">{featuredNews.date}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                      {featuredNews.title}
                    </h2>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700 transition-colors text-lg"
                    >
                      Learn More 
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            )}

            {/* Regular News Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularNews.map((item) => (
                <article key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video bg-gray-100 relative">
                    <div className="w-full h-full bg-gradient-to-br from-accent-300 to-accent-600 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9H21ZM19 21H5V3H13V9H19V21Z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-sm text-gray-600">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700 transition-colors"
                    >
                      Learn More 
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Newsletter Signup Section */}
      <Section className="bg-accent-600 py-16 mb-2" spacing="none">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Stay up to date on latest industry trends, 
                  technology and innovation insights
                </h2>
              </div>
              <div className="lg:col-span-1">
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email*</label>
                    <input
                      type="email"
                      placeholder="Enter you email"
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50"
                    />
                  </div>
                  <button className="bg-white text-accent-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    Subscribe
                  </button>
                  <div className="flex items-start gap-2 text-white/90 text-sm">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="mt-1 w-4 h-4 text-accent-600 bg-white/10 border-white/30 rounded focus:ring-white/50"
                    />
                    <label htmlFor="privacy" className="leading-relaxed">
                      I accept the{' '}
                      <a href="#" className="text-white underline hover:no-underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

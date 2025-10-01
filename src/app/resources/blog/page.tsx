"use client";

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { ContactSection } from '@/components/reusable/ContactSection';

// Blog data structure
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean;
}

// Mock blog data - matching the screenshots
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Predictive Analytics in Commercial Real Estate: Forecasting Occupancy, Rent, and Maintenance Needs',
    excerpt: 'The commercial real estate (CRE) industry is dealing with a lot of change right now. The economy is shifting, tenants want different things, and there\'s constant pressure to get more value out of properties. In this climate, the old way of making decisions, which was often based on...',
    date: 'September 25, 2025',
    category: 'Real Estate',
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: '2',
    title: 'Cloud Migration for Hospitals Is No Longer Optional: How to Do It Right',
    excerpt: '',
    date: 'September 18, 2025',
    category: 'Healthcare',
    image: '/api/placeholder/300/200'
  },
  {
    id: '3',
    title: 'IRS Modernization and Taxpayer Expectations: Is Your Firm\'s Software Ready?',
    excerpt: '',
    date: 'September 11, 2025',
    category: 'Finance and Banking',
    image: '/api/placeholder/300/200'
  },
  {
    id: '4',
    title: 'From Bricks to Bots: Exploring Generative AI in Commercial Real Estate',
    excerpt: '',
    date: 'September 04, 2025',
    category: 'Real Estate',
    image: '/api/placeholder/300/200'
  },
  {
    id: '5',
    title: 'The Future of Drug Development Runs on Omics Data Platforms',
    excerpt: '',
    date: 'August 27, 2025',
    category: 'Life Sciences',
    image: '/api/placeholder/300/200'
  },
  {
    id: '6',
    title: 'How to Improve Patient Engagement with Digital Health Tools',
    excerpt: '',
    date: 'August 21, 2025',
    category: 'Healthcare',
    image: '/api/placeholder/300/200'
  },
  {
    id: '7',
    title: 'Machine Learning for Fraud Detection: Evolving Strategies for a Digital World',
    excerpt: '',
    date: 'August 14, 2025',
    category: 'CyberSecurity',
    image: '/api/placeholder/300/200'
  },
  {
    id: '8',
    title: 'Software Development Life Cycle (SDLC): Helping You Understand Simply and Completely',
    excerpt: '',
    date: 'August 08, 2025',
    category: 'General',
    image: '/api/placeholder/300/200'
  },
  {
    id: '9',
    title: 'Navigating Big Data Governance: Essential Roles and Frameworks',
    excerpt: '',
    date: 'June 18, 2025',
    category: 'General',
    image: '/api/placeholder/300/200'
  },
  {
    id: '10',
    title: 'Data Lake vs. Data Mesh: Which Architecture Best Solves Your Enterprise Silos?',
    excerpt: '',
    date: 'June 12, 2025',
    category: 'General',
    image: '/api/placeholder/300/200'
  },
  {
    id: '11',
    title: 'Computational Neuroscience Simulations: Combining Science and Technology',
    excerpt: '',
    date: 'June 05, 2025',
    category: 'Healthcare',
    image: '/api/placeholder/300/200'
  },
  {
    id: '12',
    title: 'Applications of Computer Simulation Software in Medicine and Pharmaceuticals',
    excerpt: '',
    date: 'May 29, 2025',
    category: 'Healthcare',
    image: '/api/placeholder/300/200'
  }
];

const categories = ['All Industries', 'Healthcare', 'Real Estate', 'Finance and Banking', 'Life Sciences', 'CyberSecurity', 'General'];
const tags = ['All Tags', 'Cloud Migration', 'Predictive Analytics', 'AI', 'Machine Learning', 'Data Governance'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Industries');
  const [selectedTag, setSelectedTag] = useState('All Tags');

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">

      {/* Main Content */}
      <Section className="py-16" spacing="none">
        <Container>
          {/* Filter Section */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-black mb-8">
              Discover Latest Insights
            </h1>
          </div>
          <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-start">
            <div className="relative">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 min-w-[180px]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <select 
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 min-w-[150px]"
              >
                {tags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Article - Left Side */}
            {featuredPost && (
              <div className="lg:col-span-2">
                <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-video bg-gray-100 relative">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">{featuredPost.date}</span>
                      <span className="px-3 py-1 bg-accent-100 text-accent-600 text-sm rounded-full font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
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
              </div>
            )}

            {/* Article List - Right Side */}
            <div className="space-y-6">
              {regularPosts.slice(0, 5).map((post) => (
                <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex">
                    <div className="w-24 h-20 bg-gray-100 flex-shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-600">{post.date}</span>
                        <span className="px-2 py-1 bg-accent-100 text-accent-600 text-xs rounded-full font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-tight line-clamp-2">
                        {post.title}
                      </h3>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-accent-600 text-xs font-semibold hover:text-accent-700 transition-colors"
                      >
                        Learn More 
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Additional Articles Grid */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.slice(5).map((post) => (
                <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-video bg-gray-100">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-600">{post.date}</span>
                      <span className="px-3 py-1 bg-accent-100 text-accent-600 text-sm rounded-full font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                      {post.title}
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 text-left lg:text-left">
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
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { fetchBlogs } from '@/store/slices/blogsSlice';

export default function BlogPage() {
  const dispatch = useAppDispatch();
  const { items: blogs, status, error } = useAppSelector((state) => state.blogs);
  
  const [selectedCategory, setSelectedCategory] = useState('All Industries');
  const [selectedTag, setSelectedTag] = useState('All Tags');

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // Extract unique categories and tags from backend data
  const categories = useMemo(() => {
    const uniqueCategories = new Set<string>();
    blogs.forEach(blog => {
      if (blog.tags && Array.isArray(blog.tags)) {
        blog.tags.forEach(tag => {
          // Check if tag looks like a category (capitalize first letter)
          if (tag && tag.length > 0) {
            uniqueCategories.add(tag);
          }
        });
      }
    });
    return ['All Industries', ...Array.from(uniqueCategories).sort()];
  }, [blogs]);

  const tags = useMemo(() => {
    const uniqueTags = new Set<string>();
    blogs.forEach(blog => {
      if (blog.tags && Array.isArray(blog.tags)) {
        blog.tags.forEach(tag => {
          if (tag && tag.length > 0) {
            uniqueTags.add(tag);
          }
        });
      }
    });
    return ['All Tags', ...Array.from(uniqueTags).sort()];
  }, [blogs]);

  // Filter blogs based on selected category and tag
  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const categoryMatch = selectedCategory === 'All Industries' || 
        (blog.tags && blog.tags.includes(selectedCategory));
      const tagMatch = selectedTag === 'All Tags' || 
        (blog.tags && blog.tags.includes(selectedTag));
      return categoryMatch && tagMatch;
    });
  }, [blogs, selectedCategory, selectedTag]);

  // Format date helper
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return 'No date';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Invalid date';
    }
  };

  // Get category from tags (first tag)
  const getCategory = (tags: string[] | undefined) => {
    if (!tags || tags.length === 0) return 'General';
    return tags[0];
  };

  // Get image URL helper
  const getImageUrl = (heroImage: any) => {
    if (!heroImage) return '/api/placeholder/600/400';
    if (typeof heroImage === 'string') return heroImage;
    if (heroImage.url) return heroImage.url;
    return '/api/placeholder/600/400';
  };

  const featuredPost = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const regularPosts = filteredBlogs.slice(1);

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

          {/* Dropdown Filters - Dynamic from Backend */}
          <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-start">
            <div className="relative">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 min-w-[180px]"
                disabled={status === 'loading'}
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
                disabled={status === 'loading'}
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

          {/* Loading State */}
          {status === 'loading' && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent-600"></div>
              <p className="mt-4 text-gray-600">Loading blogs...</p>
            </div>
          )}

          {/* Error State */}
          {status === 'error' && (
            <div className="text-center py-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-red-600 font-semibold mb-2">Error loading blogs</p>
                <p className="text-red-500 text-sm">{error || 'Something went wrong'}</p>
              </div>
            </div>
          )}

          {/* No Results */}
          {status === 'idle' && filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blogs found matching your filters.</p>
            </div>
          )}

          {/* Blog Grid - Backend Data */}
          {status === 'idle' && filteredBlogs.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Featured Article - Left Side */}
              {featuredPost && (
                <div className="lg:col-span-2">
                  <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="aspect-video bg-gray-100 relative">
                      <Image 
                        src={getImageUrl(featuredPost.heroImage)} 
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-600">{formatDate(featuredPost.publishedAt)}</span>
                        <span className="px-3 py-1 bg-accent-100 text-accent-600 text-sm rounded-full font-medium">
                          {getCategory(featuredPost.tags)}
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-600 text-base leading-relaxed mb-6">
                        {featuredPost.excerpt || 'Read more to discover insights...'}
                      </p>
                      <Link 
                        href={`/resource/blog/${featuredPost.slug}`}
                        className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700 transition-colors"
                      >
                        Learn More 
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </div>
              )}

              {/* Article List - Right Side */}
              <div className="space-y-6">
                {regularPosts.slice(0, 5).map((post) => (
                  <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex">
                      <div className="w-24 h-20 bg-gray-100 flex-shrink-0 relative">
                        <Image 
                          src={getImageUrl(post.heroImage)} 
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-600">{formatDate(post.publishedAt)}</span>
                          <span className="px-2 py-1 bg-accent-100 text-accent-600 text-xs rounded-full font-medium">
                            {getCategory(post.tags)}
                          </span>
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-tight line-clamp-2">
                          {post.title}
                        </h3>
                        <Link 
                          href={`/resource/blog/${post.slug}`}
                          className="inline-flex items-center text-accent-600 text-xs font-semibold hover:text-accent-700 transition-colors"
                        >
                          Learn More 
                          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Additional Articles Grid - Backend Data */}
          {status === 'idle' && regularPosts.length > 5 && (
            <div className="mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.slice(5).map((post) => (
                  <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="aspect-video bg-gray-100 relative">
                      <Image 
                        src={getImageUrl(post.heroImage)} 
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-600">{formatDate(post.publishedAt)}</span>
                        <span className="px-3 py-1 bg-accent-100 text-accent-600 text-sm rounded-full font-medium">
                          {getCategory(post.tags)}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                        {post.title}
                      </h3>
                      <Link 
                        href={`/resource/blog/${post.slug}`}
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
            </div>
          )}
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
/**
 * GET /api/v1/search
 * Aggregated multi-index search across content types
 */

import { NextRequest } from 'next/server';
import { createPaginatedResponse, createErrorResponse } from '@/lib/api';
import { validateQuery } from '@/lib/api';
import { SearchQueryParamsSchema } from '@/lib/validation';

export async function GET(request: NextRequest) {
  try {
    // Validate query parameters
    const { q, type, page, pageSize } = validateQuery(request, SearchQueryParamsSchema);
    
    // TODO: Replace with actual database search (Postgres full-text or OpenSearch)
    // For now, implement basic search across mock data
    const searchResults: any[] = [];
    const query = q.toLowerCase();

    // Mock blog posts
    const mockBlogPosts = [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        type: 'blog' as const,
        title: 'DevOps Best Practices for 2024',
        excerpt: 'Explore the latest DevOps trends and best practices that will shape software development in 2024.',
        slug: 'devops-best-practices-2024',
        url: '/blog/devops-best-practices-2024',
        publishedAt: '2024-01-15T10:00:00.000Z',
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174001',
        type: 'blog' as const,
        title: 'Cloud Security Fundamentals Every CTO Should Know',
        excerpt: 'Essential cloud security principles and implementation strategies.',
        slug: 'cloud-security-fundamentals',
        url: '/blog/cloud-security-fundamentals',
        publishedAt: '2024-02-01T10:00:00.000Z',
      },
    ];

    // Mock case studies
    const mockCaseStudies = [
      {
        id: '123e4567-e89b-12d3-a456-426614174100',
        type: 'case' as const,
        title: 'Healthcare Platform Modernization',
        excerpt: 'How we helped MedTech Solutions modernize their healthcare platform.',
        slug: 'healthcare-platform-modernization',
        url: '/case-studies/healthcare-platform-modernization',
        publishedAt: '2024-01-15T00:00:00.000Z',
      },
    ];

    // Mock services
    const mockServices = [
      {
        id: '123e4567-e89b-12d3-a456-426614174200',
        type: 'service' as const,
        title: 'DevOps Consulting',
        excerpt: 'Streamline your development and operations with our expert DevOps consulting services.',
        slug: 'devops-consulting',
        url: '/services/devops-consulting',
        publishedAt: '2024-01-01T00:00:00.000Z',
      },
    ];

    // Mock news
    const mockNews = [
      {
        id: '123e4567-e89b-12d3-a456-426614174300',
        type: 'news' as const,
        title: 'BHESI Wins Innovation Award 2024',
        excerpt: 'We are proud to announce that BHESI has won the Healthcare Innovation Award for 2024.',
        slug: 'bhesi-wins-innovation-award-2024',
        url: '/news/bhesi-wins-innovation-award-2024',
        publishedAt: '2024-03-15T00:00:00.000Z',
      },
    ];

    // Mock pages
    const mockPages = [
      {
        id: '123e4567-e89b-12d3-a456-426614174400',
        type: 'page' as const,
        title: 'About BHESI',
        excerpt: 'Learn about our mission to transform healthcare through technology innovation.',
        slug: 'about',
        url: '/about',
        publishedAt: '2024-01-01T00:00:00.000Z',
      },
    ];

    // Combine all content types
    let allContent = [...mockBlogPosts, ...mockCaseStudies, ...mockServices, ...mockNews, ...mockPages];

    // Filter by type if specified
    if (type) {
      allContent = allContent.filter(item => item.type === type);
    }

    // Search across title and excerpt
    const filteredContent = allContent.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.excerpt.toLowerCase().includes(query)
    );

    // Sort by relevance (simple title match first, then excerpt match)
    filteredContent.sort((a, b) => {
      const aInTitle = a.title.toLowerCase().includes(query);
      const bInTitle = b.title.toLowerCase().includes(query);
      
      if (aInTitle && !bInTitle) return -1;
      if (!aInTitle && bInTitle) return 1;
      
      // Sort by publication date if relevance is equal
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

    // Calculate pagination
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedResults = filteredContent.slice(startIndex, endIndex);
    const totalItems = filteredContent.length;

    return createPaginatedResponse(paginatedResults, page, pageSize, totalItems);
    
  } catch (error) {
    return createErrorResponse(error);
  }
}
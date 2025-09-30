/**
 * GET /api/v1/blog/posts
 * List blog posts with filtering and pagination
 */

import { NextRequest } from 'next/server';
import { createPaginatedResponse, createErrorResponse } from '@/lib/api';
import { validateQuery } from '@/lib/api';
import { BlogPostQuerySchema } from '@/lib/validation';

export async function GET(request: NextRequest) {
  try {
    // Validate query parameters
    const { page, pageSize, tag, author, q } = validateQuery(request, BlogPostQuerySchema);
    
    // TODO: Replace with actual database call
    let mockBlogPosts = [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        slug: 'devops-best-practices-2024',
        title: 'DevOps Best Practices for 2024',
        excerpt: 'Explore the latest DevOps trends and best practices that will shape software development in 2024.',
        body: '<p>DevOps continues to evolve with new tools and methodologies...</p>',
        authorId: '123e4567-e89b-12d3-a456-426614174999',
        tags: ['devops', 'automation', 'best-practices'],
        readingMinutes: 8,
        heroImage: {
          id: 'blog-1',
          url: '/images/blog-devops-2024.jpg',
          alt: 'DevOps best practices',
          width: 1200,
          height: 630,
          mimeType: 'image/jpeg',
        },
        seo: {
          title: 'DevOps Best Practices for 2024 | BHESI Blog',
          description: 'Discover the latest DevOps trends and best practices for modern software development.',
          keywords: ['devops', 'automation', 'ci-cd', 'best-practices'],
        },
        publishedAt: '2024-01-15T10:00:00.000Z',
        updatedAt: new Date().toISOString(),
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174001',
        slug: 'cloud-security-fundamentals',
        title: 'Cloud Security Fundamentals Every CTO Should Know',
        excerpt: 'Essential cloud security principles and implementation strategies for enterprise applications.',
        body: '<p>Cloud security is paramount in today\'s digital landscape...</p>',
        authorId: '123e4567-e89b-12d3-a456-426614174998',
        tags: ['cloud', 'security', 'enterprise'],
        readingMinutes: 12,
        heroImage: {
          id: 'blog-2',
          url: '/images/blog-cloud-security.jpg',
          alt: 'Cloud security fundamentals',
          width: 1200,
          height: 630,
          mimeType: 'image/jpeg',
        },
        seo: {
          title: 'Cloud Security Fundamentals | BHESI Blog',
          description: 'Learn essential cloud security principles every CTO should understand.',
          keywords: ['cloud security', 'enterprise', 'compliance'],
        },
        publishedAt: '2024-02-01T10:00:00.000Z',
        updatedAt: new Date().toISOString(),
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174002',
        slug: 'microservices-architecture-guide',
        title: 'The Complete Guide to Microservices Architecture',
        excerpt: 'Learn how to design, implement, and scale microservices architecture for modern applications.',
        body: '<p>Microservices architecture has become the standard for scalable applications...</p>',
        authorId: '123e4567-e89b-12d3-a456-426614174999',
        tags: ['microservices', 'architecture', 'scalability'],
        readingMinutes: 15,
        heroImage: {
          id: 'blog-3',
          url: '/images/blog-microservices.jpg',
          alt: 'Microservices architecture guide',
          width: 1200,
          height: 630,
          mimeType: 'image/jpeg',
        },
        seo: {
          title: 'Complete Guide to Microservices Architecture | BHESI Blog',
          description: 'Comprehensive guide to designing and implementing microservices architecture.',
          keywords: ['microservices', 'architecture', 'scalability', 'design patterns'],
        },
        publishedAt: '2024-03-01T10:00:00.000Z',
        updatedAt: new Date().toISOString(),
      },
    ];

    // Apply filters
    if (tag) {
      mockBlogPosts = mockBlogPosts.filter(post => 
        post.tags.includes(tag)
      );
    }

    if (author) {
      mockBlogPosts = mockBlogPosts.filter(post => 
        post.authorId === author
      );
    }

    if (q) {
      const query = q.toLowerCase();
      mockBlogPosts = mockBlogPosts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Calculate pagination
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedPosts = mockBlogPosts.slice(startIndex, endIndex);
    const totalItems = mockBlogPosts.length;

    return createPaginatedResponse(paginatedPosts, page, pageSize, totalItems);
    
  } catch (error) {
    return createErrorResponse(error);
  }
}
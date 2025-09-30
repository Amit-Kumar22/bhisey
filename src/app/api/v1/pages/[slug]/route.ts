/**
 * GET /api/v1/pages/[slug]
 * Generic marketing page endpoint
 */

import { NextRequest } from 'next/server';
import { createStandardResponse, createErrorResponse, NotFoundError } from '@/lib/api';
import { validateQuery, validateParams } from '@/lib/api';
import { PageQuerySchema } from '@/lib/validation';
import { SlugParamSchema } from '@/lib/api';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Validate parameters
    const { slug } = validateParams(params, SlugParamSchema);
    
    // Validate query parameters
    const { draft } = validateQuery(request, PageQuerySchema);
    
    // TODO: Replace with actual database call
    // For now, return mock page data
    const mockPages: Record<string, any> = {
      'about': {
        id: '123e4567-e89b-12d3-a456-426614174000',
        slug: 'about',
        title: 'About BHESI',
        hero: {
          title: 'Transforming Healthcare Through Innovation',
          subtitle: 'Leading healthcare technology solutions for better patient outcomes',
          backgroundImage: {
            id: 'hero-1',
            url: '/images/about-hero.jpg',
            alt: 'Healthcare innovation',
            width: 1920,
            height: 1080,
            mimeType: 'image/jpeg',
          },
          ctaText: 'Learn More',
          ctaUrl: '/services',
        },
        sections: [
          {
            type: 'richText',
            html: '<p>BHESI is a leading healthcare technology company focused on improving patient outcomes through innovative solutions.</p>',
          },
          {
            type: 'metrics',
            items: [
              { label: 'Years of Experience', value: '15+', unit: 'years' },
              { label: 'Successful Projects', value: '500+', accent: true },
              { label: 'Healthcare Partners', value: '50+' },
            ],
          },
        ],
        seo: {
          title: 'About BHESI - Healthcare Technology Innovation',
          description: 'Learn about BHESI\'s mission to transform healthcare through innovative technology solutions and expert consulting services.',
          keywords: ['healthcare technology', 'innovation', 'consulting'],
        },
        publishedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      'why-kanda': {
        id: '123e4567-e89b-12d3-a456-426614174001',
        slug: 'why-kanda',
        title: 'Why Choose Kanda',
        hero: {
          title: 'Why Leading Companies Choose Kanda',
          subtitle: 'Proven expertise, innovative solutions, measurable results',
        },
        sections: [
          {
            type: 'richText',
            html: '<p>Kanda has been delivering exceptional technology solutions for over two decades.</p>',
          },
        ],
        seo: {
          title: 'Why Choose Kanda - Proven Technology Excellence',
          description: 'Discover why leading companies trust Kanda for their technology transformation needs.',
        },
        publishedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    };

    const page = mockPages[slug];
    
    if (!page) {
      throw new NotFoundError(`Page '${slug}' not found`);
    }

    // If draft is not requested and page is not published, return 404
    if (!draft && !page.publishedAt) {
      throw new NotFoundError(`Page '${slug}' not found`);
    }

    return createStandardResponse(page, 200, 'short');
    
  } catch (error) {
    return createErrorResponse(error);
  }
}
/**
 * GET /api/v1/services/[slug]
 * Get specific service by slug
 */

import { NextRequest } from 'next/server';
import { createStandardResponse, createErrorResponse, NotFoundError } from '@/lib/api';
import { validateParams } from '@/lib/api';
import { SlugParamSchema } from '@/lib/api';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Validate parameters
    const { slug } = validateParams(params, SlugParamSchema);
    
    // TODO: Replace with actual database call
    const mockServices: Record<string, any> = {
      'devops-consulting': {
        id: '123e4567-e89b-12d3-a456-426614174000',
        slug: 'devops-consulting',
        name: 'DevOps Consulting',
        excerpt: 'Streamline your development and operations with our expert DevOps consulting services.',
        hero: {
          title: 'DevOps Consulting Excellence',
          subtitle: 'Transform your development lifecycle with proven methodologies',
          backgroundImage: {
            id: 'service-hero-1',
            url: '/images/devops-hero.jpg',
            alt: 'DevOps consulting services',
            width: 1920,
            height: 1080,
            mimeType: 'image/jpeg',
          },
          ctaText: 'Get Started',
          ctaUrl: '/contact',
        },
        bodySections: [
          {
            type: 'richText',
            html: '<h2>Our DevOps Approach</h2><p>We help organizations streamline their development and operations processes through automation, continuous integration, and modern deployment strategies.</p>',
          },
          {
            type: 'metrics',
            items: [
              { label: 'Deployment Time Reduction', value: '90%', accent: true },
              { label: 'System Reliability', value: '99.9%', unit: '%' },
              { label: 'Projects Delivered', value: '200+' },
            ],
          },
          {
            type: 'cta',
            heading: 'Ready to Transform Your DevOps?',
            text: 'Let our experts help you implement modern DevOps practices.',
            ctas: [
              { label: 'Schedule Consultation', url: '/contact', variant: 'primary' },
              { label: 'View Case Studies', url: '/case-studies', variant: 'secondary' },
            ],
          },
        ],
        tags: ['devops', 'automation', 'ci-cd', 'infrastructure'],
        publishedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      'cloud-migration': {
        id: '123e4567-e89b-12d3-a456-426614174001',
        slug: 'cloud-migration',
        name: 'Cloud Migration',
        excerpt: 'Seamlessly migrate your infrastructure to the cloud with minimal downtime.',
        hero: {
          title: 'Expert Cloud Migration Services',
          subtitle: 'Move to the cloud with confidence and minimal disruption',
        },
        bodySections: [
          {
            type: 'richText',
            html: '<h2>Cloud Migration Strategy</h2><p>Our comprehensive cloud migration approach ensures a smooth transition with optimized performance and cost efficiency.</p>',
          },
        ],
        tags: ['cloud', 'migration', 'aws', 'azure', 'infrastructure'],
        publishedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    };

    const service = mockServices[slug];
    
    if (!service) {
      throw new NotFoundError(`Service '${slug}' not found`);
    }

    return createStandardResponse(service, 200, 'short');
    
  } catch (error) {
    return createErrorResponse(error);
  }
}
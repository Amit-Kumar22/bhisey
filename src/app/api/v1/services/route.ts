/**
 * GET /api/v1/services
 * List all published services
 */

import { NextRequest } from 'next/server';
import { createPaginatedResponse, createErrorResponse } from '@/lib/api';
import { validateQuery } from '@/lib/api';
import { ServiceQuerySchema } from '@/lib/validation';

export async function GET(request: NextRequest) {
  try {
    // Validate query parameters
    const { page, pageSize, include } = validateQuery(request, ServiceQuerySchema);
    
    // TODO: Replace with actual database call
    // For now, return mock services data
    const mockServices = [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        slug: 'devops-consulting',
        name: 'DevOps Consulting',
        excerpt: 'Streamline your development and operations with our expert DevOps consulting services.',
        tags: ['devops', 'automation', 'ci-cd'],
        updatedAt: new Date().toISOString(),
        ...(include === 'full' && {
          hero: {
            title: 'DevOps Consulting Excellence',
            subtitle: 'Transform your development lifecycle',
          },
          bodySections: [
            {
              type: 'richText',
              html: '<p>Our DevOps consulting services help organizations optimize their development and deployment processes.</p>',
            },
          ],
        }),
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174001',
        slug: 'cloud-migration',
        name: 'Cloud Migration',
        excerpt: 'Seamlessly migrate your infrastructure to the cloud with minimal downtime.',
        tags: ['cloud', 'migration', 'aws', 'azure'],
        updatedAt: new Date().toISOString(),
        ...(include === 'full' && {
          hero: {
            title: 'Cloud Migration Services',
            subtitle: 'Move to the cloud with confidence',
          },
          bodySections: [
            {
              type: 'richText',
              html: '<p>Our cloud migration services ensure a smooth transition to cloud infrastructure.</p>',
            },
          ],
        }),
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174002',
        slug: 'security-audit',
        name: 'Security Audit',
        excerpt: 'Comprehensive security assessments to protect your digital assets.',
        tags: ['security', 'audit', 'compliance'],
        updatedAt: new Date().toISOString(),
        ...(include === 'full' && {
          hero: {
            title: 'Security Audit Services',
            subtitle: 'Protect your business with expert security assessments',
          },
          bodySections: [
            {
              type: 'richText',
              html: '<p>Our security audit services help identify and mitigate potential vulnerabilities.</p>',
            },
          ],
        }),
      },
    ];

    // Calculate pagination
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedServices = mockServices.slice(startIndex, endIndex);
    const totalItems = mockServices.length;

    return createPaginatedResponse(paginatedServices, page, pageSize, totalItems);
    
  } catch (error) {
    return createErrorResponse(error);
  }
}
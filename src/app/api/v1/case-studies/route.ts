/**
 * GET /api/v1/case-studies
 * List case studies with filtering and pagination
 */

import { NextRequest } from 'next/server';
import { createPaginatedResponse, createErrorResponse } from '@/lib/api';
import { validateQuery } from '@/lib/api';
import { CaseStudyQuerySchema } from '@/lib/validation';

export async function GET(request: NextRequest) {
  try {
    // Validate query parameters
    const queryParams = validateQuery(request, CaseStudyQuerySchema);
    const { page, pageSize, service, vertical, tag, q } = queryParams;
    
    // TODO: Replace with actual database call
    // For now, return mock case studies data
    let mockCaseStudies = [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        slug: 'healthcare-platform-modernization',
        title: 'Healthcare Platform Modernization',
        clientName: 'MedTech Solutions',
        industry: 'Healthcare',
        services: ['devops-consulting', 'cloud-migration'],
        verticals: ['healthcare'],
        challenge: 'Legacy healthcare platform needed modernization to improve patient care and operational efficiency.',
        solution: 'Implemented cloud-native architecture with microservices, automated CI/CD pipelines, and enhanced security measures.',
        results: [
          { label: 'Patient Processing Time', value: '75%', unit: 'reduction', accent: true },
          { label: 'System Uptime', value: '99.9%', unit: '%' },
          { label: 'Cost Savings', value: '$2M', unit: 'annually' },
        ],
        techStack: ['AWS', 'Kubernetes', 'Docker', 'React', 'Node.js', 'PostgreSQL'],
        heroImage: {
          id: 'case-1',
          url: '/images/case-study-healthcare.jpg',
          alt: 'Healthcare platform modernization',
          width: 1200,
          height: 800,
          mimeType: 'image/jpeg',
        },
        publishedAt: '2024-01-15T00:00:00.000Z',
        updatedAt: new Date().toISOString(),
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174001',
        slug: 'fintech-security-enhancement',
        title: 'FinTech Security Enhancement',
        clientName: 'SecureBank Corp',
        industry: 'Financial Services',
        services: ['security-audit', 'devops-consulting'],
        verticals: ['finance'],
        challenge: 'Financial institution required enhanced security measures to meet regulatory compliance.',
        solution: 'Implemented zero-trust architecture, advanced threat detection, and automated security monitoring.',
        results: [
          { label: 'Security Incidents', value: '95%', unit: 'reduction', accent: true },
          { label: 'Compliance Score', value: '100%', unit: '%' },
          { label: 'Audit Time', value: '60%', unit: 'reduction' },
        ],
        techStack: ['Azure', 'Terraform', 'Vault', 'Splunk', 'Python'],
        heroImage: {
          id: 'case-2',
          url: '/images/case-study-fintech.jpg',
          alt: 'FinTech security enhancement',
          width: 1200,
          height: 800,
          mimeType: 'image/jpeg',
        },
        publishedAt: '2024-02-01T00:00:00.000Z',
        updatedAt: new Date().toISOString(),
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174002',
        slug: 'ecommerce-scalability-solution',
        title: 'E-commerce Scalability Solution',
        clientName: 'Global Retail Inc',
        industry: 'Retail',
        services: ['cloud-migration', 'devops-consulting'],
        verticals: ['retail'],
        challenge: 'E-commerce platform struggled with high traffic loads during peak shopping seasons.',
        solution: 'Migrated to cloud infrastructure with auto-scaling, implemented CDN, and optimized database performance.',
        results: [
          { label: 'Load Capacity', value: '10x', unit: 'increase', accent: true },
          { label: 'Page Load Time', value: '3x', unit: 'faster' },
          { label: 'Uptime During Peak', value: '100%', unit: '%' },
        ],
        techStack: ['AWS', 'CloudFront', 'RDS', 'ElastiCache', 'Lambda'],
        heroImage: {
          id: 'case-3',
          url: '/images/case-study-ecommerce.jpg',
          alt: 'E-commerce scalability solution',
          width: 1200,
          height: 800,
          mimeType: 'image/jpeg',
        },
        publishedAt: '2024-03-01T00:00:00.000Z',
        updatedAt: new Date().toISOString(),
      },
    ];

    // Apply filters
    if (service) {
      mockCaseStudies = mockCaseStudies.filter(cs => 
        cs.services.includes(service)
      );
    }

    if (vertical) {
      mockCaseStudies = mockCaseStudies.filter(cs => 
        cs.verticals.includes(vertical)
      );
    }

    if (tag) {
      mockCaseStudies = mockCaseStudies.filter(cs => 
        cs.techStack.some(tech => tech.toLowerCase().includes(tag.toLowerCase())) ||
        cs.services.some(svc => svc.includes(tag)) ||
        cs.verticals.some(vert => vert.includes(tag))
      );
    }

    if (q) {
      const query = q.toLowerCase();
      mockCaseStudies = mockCaseStudies.filter(cs => 
        cs.title.toLowerCase().includes(query) ||
        cs.clientName.toLowerCase().includes(query) ||
        cs.industry.toLowerCase().includes(query) ||
        cs.challenge.toLowerCase().includes(query) ||
        cs.solution.toLowerCase().includes(query)
      );
    }

    // Calculate pagination
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedCaseStudies = mockCaseStudies.slice(startIndex, endIndex);
    const totalItems = mockCaseStudies.length;

    return createPaginatedResponse(paginatedCaseStudies, page, pageSize, totalItems);
    
  } catch (error) {
    return createErrorResponse(error);
  }
}
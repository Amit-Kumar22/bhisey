/**
 * GET /api/v1/case-studies/[slug]
 * Get specific case study by slug
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
    const mockCaseStudies: Record<string, any> = {
      'healthcare-platform-modernization': {
        id: '123e4567-e89b-12d3-a456-426614174000',
        slug: 'healthcare-platform-modernization',
        title: 'Healthcare Platform Modernization',
        clientName: 'MedTech Solutions',
        industry: 'Healthcare',
        services: ['devops-consulting', 'cloud-migration'],
        verticals: ['healthcare'],
        challenge: 'Legacy healthcare platform was struggling with scalability issues, manual deployment processes, and increasing security concerns. The existing system could not handle the growing patient load and lacked modern security measures required for healthcare data protection.',
        solution: 'We implemented a comprehensive modernization strategy including cloud-native architecture with microservices, automated CI/CD pipelines, containerization with Docker and Kubernetes, and enhanced security measures including zero-trust architecture and end-to-end encryption.',
        results: [
          { label: 'Patient Processing Time', value: '75%', unit: 'reduction', accent: true },
          { label: 'System Uptime', value: '99.9%', unit: '%' },
          { label: 'Cost Savings', value: '$2M', unit: 'annually' },
          { label: 'Deployment Time', value: '90%', unit: 'faster' },
        ],
        techStack: ['AWS', 'Kubernetes', 'Docker', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Terraform'],
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
      'fintech-security-enhancement': {
        id: '123e4567-e89b-12d3-a456-426614174001',
        slug: 'fintech-security-enhancement',
        title: 'FinTech Security Enhancement',
        clientName: 'SecureBank Corp',
        industry: 'Financial Services',
        services: ['security-audit', 'devops-consulting'],
        verticals: ['finance'],
        challenge: 'Financial institution required enhanced security measures to meet stringent regulatory compliance requirements and protect against increasing cyber threats.',
        solution: 'Implemented zero-trust architecture, advanced threat detection systems, automated security monitoring, and comprehensive audit logging to ensure regulatory compliance.',
        results: [
          { label: 'Security Incidents', value: '95%', unit: 'reduction', accent: true },
          { label: 'Compliance Score', value: '100%', unit: '%' },
          { label: 'Audit Time', value: '60%', unit: 'reduction' },
          { label: 'Threat Detection', value: '99.8%', unit: 'accuracy' },
        ],
        techStack: ['Azure', 'Terraform', 'Vault', 'Splunk', 'Python', 'SIEM', 'WAF'],
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
    };

    const caseStudy = mockCaseStudies[slug];
    
    if (!caseStudy) {
      throw new NotFoundError(`Case study '${slug}' not found`);
    }

    return createStandardResponse(caseStudy, 200, 'short');
    
  } catch (error) {
    return createErrorResponse(error);
  }
}
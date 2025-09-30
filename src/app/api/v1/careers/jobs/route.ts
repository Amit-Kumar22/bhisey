/**
 * GET /api/v1/careers/jobs
 * List available job openings with filtering
 */

import { NextRequest } from 'next/server';
import { createPaginatedResponse, createErrorResponse } from '@/lib/api';
import { validateQuery } from '@/lib/api';
import { JobQuerySchema } from '@/lib/validation';

export async function GET(request: NextRequest) {
  try {
    // Validate query parameters
    const { page, pageSize, location, department, remote } = validateQuery(request, JobQuerySchema);
    
    // TODO: Replace with actual database call
    let mockJobs = [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        slug: 'senior-devops-engineer',
        title: 'Senior DevOps Engineer',
        department: 'Engineering',
        location: 'New York, NY',
        remote: true,
        description: 'We are seeking an experienced DevOps Engineer to join our growing team and help scale our infrastructure.',
        requirements: [
          '5+ years of DevOps experience',
          'Strong experience with AWS/Azure',
          'Proficiency in Kubernetes and Docker',
          'Experience with Infrastructure as Code (Terraform/CloudFormation)',
          'Strong scripting skills (Python, Bash)',
        ],
        benefits: [
          'Competitive salary and equity',
          'Full health, dental, and vision insurance',
          'Flexible work arrangements',
          '401(k) with company matching',
          'Professional development budget',
        ],
        status: 'open',
        postedAt: '2024-01-15T00:00:00.000Z',
        updatedAt: new Date().toISOString(),
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174001',
        slug: 'cloud-security-specialist',
        title: 'Cloud Security Specialist',
        department: 'Security',
        location: 'San Francisco, CA',
        remote: true,
        description: 'Join our security team to help design and implement robust cloud security solutions.',
        requirements: [
          '3+ years of cloud security experience',
          'Strong knowledge of security frameworks (NIST, ISO 27001)',
          'Experience with security tools (SIEM, WAF, IDS/IPS)',
          'Cloud platform certifications preferred',
          'Incident response experience',
        ],
        benefits: [
          'Competitive salary package',
          'Comprehensive health benefits',
          'Remote-first culture',
          'Learning and certification budget',
          'Flexible PTO policy',
        ],
        status: 'open',
        postedAt: '2024-02-01T00:00:00.000Z',
        updatedAt: new Date().toISOString(),
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174002',
        slug: 'healthcare-solutions-architect',
        title: 'Healthcare Solutions Architect',
        department: 'Consulting',
        location: 'Chicago, IL',
        remote: false,
        description: 'Lead healthcare technology initiatives and architect solutions for our healthcare clients.',
        requirements: [
          '7+ years of healthcare IT experience',
          'Strong architecture and design skills',
          'Knowledge of healthcare standards (HL7, FHIR)',
          'Experience with EHR/EMR systems',
          'Healthcare compliance knowledge (HIPAA)',
        ],
        benefits: [
          'Executive compensation package',
          'Premium health benefits',
          'Company car allowance',
          'Stock options',
          'Executive development programs',
        ],
        status: 'open',
        postedAt: '2024-03-01T00:00:00.000Z',
        updatedAt: new Date().toISOString(),
      },
    ];

    // Apply filters
    if (location) {
      mockJobs = mockJobs.filter(job => 
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (department) {
      mockJobs = mockJobs.filter(job => 
        job.department.toLowerCase().includes(department.toLowerCase())
      );
    }

    if (remote !== undefined) {
      mockJobs = mockJobs.filter(job => job.remote === remote);
    }

    // Only show open positions
    mockJobs = mockJobs.filter(job => job.status === 'open');

    // Calculate pagination
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedJobs = mockJobs.slice(startIndex, endIndex);
    const totalItems = mockJobs.length;

    return createPaginatedResponse(paginatedJobs, page, pageSize, totalItems);
    
  } catch (error) {
    return createErrorResponse(error);
  }
}
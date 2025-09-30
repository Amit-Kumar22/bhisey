/**
 * GET /api/v1/careers/jobs/[slug]
 * Get specific job posting by slug
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
    const mockJobs: Record<string, any> = {
      'senior-devops-engineer': {
        id: '123e4567-e89b-12d3-a456-426614174000',
        slug: 'senior-devops-engineer',
        title: 'Senior DevOps Engineer',
        department: 'Engineering',
        location: 'New York, NY',
        remote: true,
        description: `
          <h2>About the Role</h2>
          <p>We are seeking an experienced DevOps Engineer to join our growing team and help scale our infrastructure to support millions of users worldwide.</p>
          
          <h3>What You'll Do</h3>
          <ul>
            <li>Design and implement scalable cloud infrastructure</li>
            <li>Build and maintain CI/CD pipelines</li>
            <li>Monitor system performance and optimize for efficiency</li>
            <li>Collaborate with development teams on deployment strategies</li>
            <li>Implement security best practices and compliance measures</li>
          </ul>
          
          <h3>What We Offer</h3>
          <p>Join a team of passionate professionals dedicated to transforming healthcare through technology innovation.</p>
        `,
        requirements: [
          '5+ years of DevOps experience',
          'Strong experience with AWS/Azure cloud platforms',
          'Proficiency in Kubernetes and Docker containerization',
          'Experience with Infrastructure as Code (Terraform/CloudFormation)',
          'Strong scripting skills (Python, Bash, PowerShell)',
          'Experience with monitoring tools (Prometheus, Grafana, ELK)',
          'Knowledge of security best practices',
          'Experience with microservices architecture',
        ],
        benefits: [
          'Competitive salary range: $120k - $160k',
          'Equity package with high growth potential',
          'Full health, dental, and vision insurance',
          'Flexible work arrangements and remote options',
          '401(k) with 6% company matching',
          '$3,000 annual professional development budget',
          'Unlimited PTO policy',
          'Top-tier equipment and home office setup',
        ],
        status: 'open',
        postedAt: '2024-01-15T00:00:00.000Z',
        updatedAt: new Date().toISOString(),
      },
      'cloud-security-specialist': {
        id: '123e4567-e89b-12d3-a456-426614174001',
        slug: 'cloud-security-specialist',
        title: 'Cloud Security Specialist',
        department: 'Security',
        location: 'San Francisco, CA',
        remote: true,
        description: `
          <h2>About the Role</h2>
          <p>Join our security team to help design and implement robust cloud security solutions for our healthcare clients.</p>
          
          <h3>Key Responsibilities</h3>
          <ul>
            <li>Develop and implement cloud security strategies</li>
            <li>Conduct security assessments and audits</li>
            <li>Design secure architectures for healthcare applications</li>
            <li>Respond to security incidents and perform forensic analysis</li>
            <li>Ensure compliance with healthcare regulations (HIPAA, HITECH)</li>
          </ul>
        `,
        requirements: [
          '3+ years of cloud security experience',
          'Strong knowledge of security frameworks (NIST, ISO 27001)',
          'Experience with security tools (SIEM, WAF, IDS/IPS)',
          'Cloud platform security certifications (AWS/Azure)',
          'Incident response and forensic analysis experience',
          'Knowledge of healthcare compliance requirements',
          'Experience with vulnerability assessment tools',
        ],
        benefits: [
          'Competitive salary range: $110k - $145k',
          'Performance-based bonuses',
          'Comprehensive health benefits',
          'Remote-first culture with occasional travel',
          'Learning and certification budget ($5,000/year)',
          'Flexible PTO policy',
          'Professional conference attendance',
        ],
        status: 'open',
        postedAt: '2024-02-01T00:00:00.000Z',
        updatedAt: new Date().toISOString(),
      },
    };

    const job = mockJobs[slug];
    
    if (!job || job.status !== 'open') {
      throw new NotFoundError(`Job '${slug}' not found or no longer available`);
    }

    return createStandardResponse(job, 200, 'short');
    
  } catch (error) {
    return createErrorResponse(error);
  }
}
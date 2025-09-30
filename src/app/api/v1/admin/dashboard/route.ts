/**
 * GET /api/v1/admin/dashboard
 * Admin dashboard with summary metrics
 */

import { NextRequest } from 'next/server';
import { createStandardResponse, createErrorResponse } from '@/lib/api';
import { requireReviewer } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Authenticate and authorize user
    await requireReviewer()(request);
    
    // TODO: Replace with actual database aggregations
    const mockMetrics = {
      totalUsers: 25,
      totalSubmissions: 148,
      totalContentItems: 89,
      recentActivity: [
        {
          id: '1',
          type: 'form_submission',
          description: 'New contact form submission from John Doe',
          timestamp: '2024-03-15T10:30:00.000Z',
          userId: undefined,
        },
        {
          id: '2',
          type: 'blog_post',
          description: 'Published new blog post: DevOps Best Practices',
          timestamp: '2024-03-15T09:15:00.000Z',
          userId: '123e4567-e89b-12d3-a456-426614174999',
        },
        {
          id: '3',
          type: 'case_study',
          description: 'Updated case study: Healthcare Platform Modernization',
          timestamp: '2024-03-14T16:20:00.000Z',
          userId: '123e4567-e89b-12d3-a456-426614174999',
        },
        {
          id: '4',
          type: 'service',
          description: 'Created new service: AI Consulting',
          timestamp: '2024-03-14T14:10:00.000Z',
          userId: '123e4567-e89b-12d3-a456-426614174998',
        },
        {
          id: '5',
          type: 'job_application',
          description: 'New job application for Senior DevOps Engineer',
          timestamp: '2024-03-14T11:45:00.000Z',
          userId: undefined,
        },
      ],
      submissionsByStatus: {
        new: 23,
        reviewed: 89,
        archived: 36,
      },
      contentByType: {
        services: 12,
        verticals: 8,
        caseStudies: 15,
        blogPosts: 32,
        news: 18,
        pages: 6,
      },
      monthlyGrowth: {
        submissions: 12.5, // percentage
        contentItems: 8.3,
        users: 4.2,
      },
    };

    return createStandardResponse(mockMetrics, 200, 'no-cache');
    
  } catch (error) {
    return createErrorResponse(error);
  }
}
/**
 * GET /api/v1/admin/form-submissions
 * List form submissions with filtering for admin
 */

import { NextRequest } from 'next/server';
import { createPaginatedResponse, createErrorResponse } from '@/lib/api';
import { validateQuery } from '@/lib/api';
import { FormSubmissionQuerySchema } from '@/lib/validation';
import { requireReviewer } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Authenticate and authorize user
    await requireReviewer()(request);
    
    // Validate query parameters
    const { page, pageSize, formType, status, startDate, endDate } = validateQuery(request, FormSubmissionQuerySchema);
    
    // TODO: Replace with actual database call
    let mockSubmissions = [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        formType: 'CONTACT',
        payload: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          company: 'Tech Corp',
          message: 'Interested in your DevOps consulting services...',
          consent: true,
        },
        status: 'NEW',
        notes: null,
        createdAt: '2024-03-15T10:30:00.000Z',
        updatedAt: '2024-03-15T10:30:00.000Z',
        meta: {
          ipHash: 'abc123...',
          userAgent: 'Mozilla/5.0...',
        },
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174001',
        formType: 'APPLICATION',
        payload: {
          jobId: '123e4567-e89b-12d3-a456-426614174000',
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          phone: '+1-555-0123',
          linkedin: 'https://linkedin.com/in/janesmith',
          coverLetter: 'I am excited about the DevOps Engineer position...',
        },
        status: 'REVIEWED',
        notes: 'Strong candidate, scheduled for interview',
        createdAt: '2024-03-14T14:15:00.000Z',
        updatedAt: '2024-03-15T09:00:00.000Z',
        meta: {
          ipHash: 'def456...',
          userAgent: 'Mozilla/5.0...',
        },
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174002',
        formType: 'NEWSLETTER',
        payload: {
          email: 'subscriber@example.com',
          firstName: 'Alex',
          preferences: ['weekly', 'announcements'],
        },
        status: 'REVIEWED',
        notes: 'Added to newsletter list',
        createdAt: '2024-03-13T16:45:00.000Z',
        updatedAt: '2024-03-13T16:45:00.000Z',
        meta: {
          ipHash: 'ghi789...',
          userAgent: 'Mozilla/5.0...',
        },
      },
    ];

    // Apply filters
    if (formType) {
      mockSubmissions = mockSubmissions.filter(sub => sub.formType === formType);
    }

    if (status) {
      mockSubmissions = mockSubmissions.filter(sub => sub.status === status);
    }

    if (startDate) {
      mockSubmissions = mockSubmissions.filter(sub => 
        new Date(sub.createdAt) >= new Date(startDate)
      );
    }

    if (endDate) {
      mockSubmissions = mockSubmissions.filter(sub => 
        new Date(sub.createdAt) <= new Date(endDate)
      );
    }

    // Calculate pagination
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedSubmissions = mockSubmissions.slice(startIndex, endIndex);
    const totalItems = mockSubmissions.length;

    return createPaginatedResponse(paginatedSubmissions, page, pageSize, totalItems);
    
  } catch (error) {
    return createErrorResponse(error);
  }
}
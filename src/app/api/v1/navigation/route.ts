/**
 * GET /api/v1/navigation
 * Returns structured navigation tree
 */

import { NextRequest } from 'next/server';
import { createStandardResponse, createErrorResponse } from '@/lib/api';

export async function GET(request: NextRequest) {
  try {
    // TODO: Replace with actual database call
    // For now, return mock navigation data
    const navigationData = {
      primary: [
        {
          id: '1',
          label: 'Services',
          path: '/services',
          children: [
            { id: '1-1', label: 'DevOps', path: '/services/devops' },
            { id: '1-2', label: 'Cloud', path: '/services/cloud' },
            { id: '1-3', label: 'Security', path: '/services/security' },
          ],
        },
        {
          id: '2',
          label: 'Verticals',
          path: '/verticals',
          children: [
            { id: '2-1', label: 'Healthcare', path: '/verticals/healthcare' },
            { id: '2-2', label: 'Finance', path: '/verticals/finance' },
          ],
        },
        { id: '3', label: 'Case Studies', path: '/case-studies' },
        { id: '4', label: 'Blog', path: '/blog' },
        { id: '5', label: 'About', path: '/about' },
        { id: '6', label: 'Contact', path: '/contact' },
      ],
      footer: [
        {
          title: 'Services',
          items: [
            { id: 'f-1', label: 'DevOps Consulting', path: '/services/devops' },
            { id: 'f-2', label: 'Cloud Migration', path: '/services/cloud' },
            { id: 'f-3', label: 'Security Audit', path: '/services/security' },
          ],
        },
        {
          title: 'Company',
          items: [
            { id: 'f-4', label: 'About Us', path: '/about' },
            { id: 'f-5', label: 'Careers', path: '/careers' },
            { id: 'f-6', label: 'News', path: '/news' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { id: 'f-7', label: 'Blog', path: '/blog' },
            { id: 'f-8', label: 'Case Studies', path: '/case-studies' },
            { id: 'f-9', label: 'Partners', path: '/partners' },
          ],
        },
      ],
    };

    return createStandardResponse(navigationData, 200, 'short');
    
  } catch (error) {
    return createErrorResponse(error);
  }
}
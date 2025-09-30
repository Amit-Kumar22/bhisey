/**
 * CRUD operations for services in admin panel
 * POST /api/v1/admin/services - Create service
 * GET /api/v1/admin/services - List all services (including drafts)
 */

import { NextRequest } from 'next/server';
import { createSuccessResponse, createPaginatedResponse, createErrorResponse } from '@/lib/api';
import { validateBody, validateQuery } from '@/lib/api';
import { CreateServiceSchema, PaginationQuerySchema } from '@/lib/validation';
import { requireEditor } from '@/lib/auth';
import { serviceRepository } from '@/repositories';

export async function GET(request: NextRequest) {
  try {
    // Authenticate and authorize user
    await requireEditor()(request);
    
    // Validate query parameters
    const { page, pageSize } = validateQuery(request, PaginationQuerySchema);
    
    // TODO: Replace with actual database call
    const mockServices = [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        slug: 'devops-consulting',
        name: 'DevOps Consulting',
        excerpt: 'Streamline your development and operations...',
        tags: ['devops', 'automation'],
        publishedAt: '2024-01-01T00:00:00.000Z',
        createdAt: '2024-01-01T00:00:00.000Z',
        updatedAt: new Date().toISOString(),
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174001',
        slug: 'cloud-migration',
        name: 'Cloud Migration',
        excerpt: 'Seamlessly migrate your infrastructure...',
        tags: ['cloud', 'migration'],
        publishedAt: null, // Draft
        createdAt: '2024-03-10T00:00:00.000Z',
        updatedAt: new Date().toISOString(),
      },
    ];

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedServices = mockServices.slice(startIndex, endIndex);
    const totalItems = mockServices.length;

    return createPaginatedResponse(paginatedServices, page, pageSize, totalItems);
    
  } catch (error) {
    return createErrorResponse(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    // Authenticate and authorize user
    const user = await requireEditor()(request);
    
    // Validate request body
    const serviceData = await validateBody(request, CreateServiceSchema);
    
    // TODO: Check if slug is already taken
    // const existingService = await serviceRepository.findBySlug(serviceData.slug);
    // if (existingService) {
    //   throw new ConflictError(`Service with slug '${serviceData.slug}' already exists`);
    // }
    
    // TODO: Replace with actual database call
    const newService = {
      id: '123e4567-e89b-12d3-a456-426614174999',
      slug: serviceData.slug,
      name: serviceData.name,
      excerpt: serviceData.excerpt,
      hero: serviceData.hero,
      bodySections: serviceData.bodySections,
      tags: serviceData.tags,
      publishedAt: serviceData.publishedAt || null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    // TODO: Log audit entry
    // await auditLogService.log({
    //   userId: user.userId,
    //   action: 'CREATE',
    //   entityType: 'SERVICE',
    //   entityId: newService.id,
    //   after: newService,
    //   ipHash: getClientIPHash(request),
    // });

    return createSuccessResponse(newService, 201);
    
  } catch (error) {
    return createErrorResponse(error);
  }
}
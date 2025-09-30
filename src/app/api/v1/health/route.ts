/**
 * GET /api/v1/health
 * System health check endpoint
 */

import { NextRequest } from 'next/server';
import { createHealthResponse, createErrorResponse } from '@/lib/api';

export async function GET(request: NextRequest) {
  try {
    return createHealthResponse();
  } catch (error) {
    return createErrorResponse(error);
  }
}
/**
 * POST /api/v1/forms/consent
 * Cookie preferences/consent form endpoint
 */

import { NextRequest } from 'next/server';
import { createSuccessResponse, createErrorResponse } from '@/lib/api';
import { validateBody, getClientIP, getUserAgent } from '@/lib/api';
import { ConsentFormSchema } from '@/lib/validation';
import { formSubmissionRepository } from '@/repositories';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    // Validate request body
    const consentData = await validateBody(request, ConsentFormSchema);
    
    // Extract metadata
    const clientIP = getClientIP(request);
    const userAgent = getUserAgent(request);
    
    // Hash IP for privacy
    const salt = process.env.IP_HASH_SALT || 'default-salt-change-in-production';
    const ipHash = crypto.createHash('sha256').update(clientIP + salt).digest('hex');
    
    // Create consent record
    const submission = await formSubmissionRepository.create({
      formType: 'CONSENT',
      payload: {
        necessary: consentData.necessary,
        analytics: consentData.analytics,
        marketing: consentData.marketing,
        preferences: consentData.preferences,
      },
      status: 'REVIEWED', // Consent forms are automatically processed
      meta: {
        ipHash,
        userAgent,
        submittedAt: new Date().toISOString(),
      },
    });

    // TODO: Update user's cookie preferences in session/database
    // This would typically set secure, httpOnly cookies with the preferences
    
    const responseData = {
      id: submission.id,
      message: 'Cookie preferences updated successfully',
      preferences: consentData,
    };

    return createSuccessResponse(responseData, 201);
    
  } catch (error) {
    return createErrorResponse(error);
  }
}
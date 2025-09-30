/**
 * POST /api/v1/forms/contact
 * Contact form submission endpoint
 */

import { NextRequest } from 'next/server';
import { createSuccessResponse, createErrorResponse } from '@/lib/api';
import { validateBody, getClientIP, getUserAgent } from '@/lib/api';
import { ContactFormSchema } from '@/lib/validation';
import { formSubmissionRepository } from '@/repositories';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    // Validate request body
    const formData = await validateBody(request, ContactFormSchema);
    
    // Extract metadata
    const clientIP = getClientIP(request);
    const userAgent = getUserAgent(request);
    
    // Hash IP for privacy (with salt)
    const salt = process.env.IP_HASH_SALT || 'default-salt-change-in-production';
    const ipHash = crypto.createHash('sha256').update(clientIP + salt).digest('hex');
    
    // TODO: Implement rate limiting check here
    // await checkContactFormRateLimit(ipHash);
    
    // Create form submission
    const submission = await formSubmissionRepository.create({
      formType: 'CONTACT',
      payload: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        consent: formData.consent,
        attachment: formData.attachment,
      },
      status: 'NEW',
      meta: {
        ipHash,
        userAgent,
        submittedAt: new Date().toISOString(),
      },
    });

    // TODO: Queue background tasks
    // - Send acknowledgment email to user
    // - Send notification to admin
    // - Process any attachments
    
    const responseData = {
      id: submission.id,
      message: 'Thank you for your message. We will get back to you soon.',
      submittedAt: submission.createdAt,
    };

    return createSuccessResponse(responseData, 201);
    
  } catch (error) {
    return createErrorResponse(error);
  }
}
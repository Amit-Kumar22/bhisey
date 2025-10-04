import { VercelRequest, VercelResponse } from '@vercel/node';
import { caseStudyController } from '../../backend/src/controllers/caseStudyController';
import { applyMiddleware } from '../../lib/vercel-helpers';
import { authenticate } from '../../backend/src/middleware/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;
  
  if (typeof id !== 'string') {
    return res.status(400).json({ success: false, error: { code: 'invalid_id', message: 'Invalid case study ID' } });
  }

  // Attach id to params for Express controller compatibility
  (req as any).params = { id };

  if (req.method === 'GET') {
    return applyMiddleware(req, res, caseStudyController.getOne);
  }
  if (req.method === 'PUT') {
    return applyMiddleware(req, res, caseStudyController.update, [authenticate]);
  }
  if (req.method === 'DELETE') {
    return applyMiddleware(req, res, caseStudyController.delete, [authenticate]);
  }
  return res.status(405).json({ success: false, error: { code: 'method_not_allowed', message: 'Method not allowed' } });
}

import { VercelRequest, VercelResponse } from '@vercel/node';
import { caseStudyController } from '../../backend/src/controllers/caseStudyController';
import { applyMiddleware } from '../../lib/vercel-helpers';
import { authenticate } from '../../backend/src/middleware/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    return applyMiddleware(req, res, caseStudyController.getAll);
  }
  if (req.method === 'POST') {
    return applyMiddleware(req, res, caseStudyController.create, [authenticate]);
  }
  return res.status(405).json({ success: false, error: { code: 'method_not_allowed', message: 'Method not allowed' } });
}

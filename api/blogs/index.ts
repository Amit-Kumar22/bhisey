import { VercelRequest, VercelResponse } from '@vercel/node';
import { blogController } from '../../backend/src/controllers/blogController';
import { applyMiddleware } from '../../lib/vercel-helpers';
import { authenticate } from '../../backend/src/middleware/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    return applyMiddleware(req, res, blogController.getAll);
  }
  if (req.method === 'POST') {
    return applyMiddleware(req, res, blogController.create, [authenticate]);
  }
  return res.status(405).json({ success: false, error: { code: 'method_not_allowed', message: 'Method not allowed' } });
}

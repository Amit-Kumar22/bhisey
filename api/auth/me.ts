import { VercelRequest, VercelResponse } from '@vercel/node';
import { authController } from '../../backend/src/controllers/authController';
import { applyMiddleware } from '../../lib/vercel-helpers';
import { authenticate } from '../../backend/src/middleware/auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    return applyMiddleware(req, res, authController.me, [authenticate]);
  }
  return res.status(405).json({ success: false, error: { code: 'method_not_allowed', message: 'Method not allowed' } });
}

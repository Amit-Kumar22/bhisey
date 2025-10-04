import { VercelRequest, VercelResponse } from '@vercel/node';
import { authController } from '../../backend/src/controllers/authController';
import { applyMiddleware } from '../../lib/vercel-helpers';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method === 'POST') {
    return applyMiddleware(req, res, authController.login);
  }
  
  return res.status(405).json({ success: false, error: { code: 'method_not_allowed', message: 'Method not allowed' } });
}

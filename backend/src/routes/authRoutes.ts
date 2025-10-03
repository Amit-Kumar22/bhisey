import { Router } from 'express';
import { login, logout, refresh, me } from '../controllers/authController';
import { validateBody } from '../middleware/validate';
import { loginSchema } from '../validation/schemas';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.post('/login', validateBody(loginSchema), login);
router.post('/refresh', refresh); // separate schema for refresh if needed
router.post('/logout', logout);
router.get('/me', requireAuth, me);

export default router;
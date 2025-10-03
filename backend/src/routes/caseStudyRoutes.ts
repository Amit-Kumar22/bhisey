import { Router } from 'express';
import { listCaseStudies, getCaseStudy, createCaseStudy, updateCaseStudy, deleteCaseStudy } from '../controllers/caseStudyController';
import { validateBody } from '../middleware/validate';
import { caseStudyCreateSchema, caseStudyUpdateSchema } from '../validation/schemas';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.get('/', listCaseStudies);
router.get('/:slug', getCaseStudy);
router.post('/', requireAuth, validateBody(caseStudyCreateSchema), createCaseStudy);
router.put('/:id', requireAuth, validateBody(caseStudyUpdateSchema), updateCaseStudy);
router.delete('/:id', requireAuth, deleteCaseStudy);

export default router;
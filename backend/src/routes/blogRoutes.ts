import { Router } from 'express';
import { listBlogs, getBlog, createBlog, updateBlog, deleteBlog } from '../controllers/blogController';
import { validateBody } from '../middleware/validate';
import { blogCreateSchema, blogUpdateSchema } from '../validation/schemas';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.get('/', listBlogs);
router.get('/:slug', getBlog);
router.post('/', requireAuth, validateBody(blogCreateSchema), createBlog);
router.put('/:id', requireAuth, validateBody(blogUpdateSchema), updateBlog);
router.delete('/:id', requireAuth, deleteBlog);

export default router;
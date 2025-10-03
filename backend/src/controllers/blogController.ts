import { Request, Response, NextFunction } from 'express';
import { BlogModel } from '../models/BlogModel';
import { createError } from '../middleware/errorHandler';
import { sanitizeContent } from '../utils/sanitize';

export async function listBlogs(_req: Request, res: Response, next: NextFunction) {
  try {
    const blogs = await BlogModel.all();
    res.json({ success: true, data: blogs });
  } catch (e) { next(e); }
}

export async function getBlog(req: Request, res: Response, next: NextFunction) {
  try {
    const blog = await BlogModel.findBySlug(req.params.slug);
    if (!blog) return next(createError(404, 'Blog not found', 'not_found'));
    res.json({ success: true, data: blog });
  } catch (e) { next(e); }
}

export async function createBlog(req: Request, res: Response, next: NextFunction) {
  try {
    // Build payload with only allowed fields
    const payload: any = {
      title: req.body.title,
      slug: req.body.slug,
      body: sanitizeContent(req.body.content || req.body.body),
      authorId: (req as any).user?.id || 'system' // From auth middleware
    };
    
    if (req.body.excerpt) payload.excerpt = req.body.excerpt;
    if (req.body.tags) payload.tags = req.body.tags;
    if (req.body.heroImage) {
      // Convert string to JSON object for database
      payload.heroImage = typeof req.body.heroImage === 'string' 
        ? { url: req.body.heroImage } 
        : req.body.heroImage;
    }
    
    const blog = await BlogModel.create(payload);
    res.status(201).json({ success: true, data: blog });
  } catch (e) { next(e); }
}

export async function updateBlog(req: Request, res: Response, next: NextFunction) {
  try {
    // Build payload with only allowed fields
    const payload: any = {};
    
    // Handle content -> body mapping
    if (req.body.content) {
      payload.body = sanitizeContent(req.body.content);
    } else if (req.body.body) {
      payload.body = sanitizeContent(req.body.body);
    }
    
    // Add other allowed fields
    if (req.body.title) payload.title = req.body.title;
    if (req.body.slug) payload.slug = req.body.slug;
    if (req.body.excerpt) payload.excerpt = req.body.excerpt;
    if (req.body.tags) payload.tags = req.body.tags;
    if (req.body.heroImage) {
      // Convert string to JSON object for database
      payload.heroImage = typeof req.body.heroImage === 'string' 
        ? { url: req.body.heroImage } 
        : req.body.heroImage;
    }
    
    const blog = await BlogModel.update(req.params.id, payload);
    if (!blog) return next(createError(404, 'Blog not found', 'not_found'));
    res.json({ success: true, data: blog });
  } catch (e) { next(e); }
}

export async function deleteBlog(req: Request, res: Response, next: NextFunction) {
  try {
    await BlogModel.delete(req.params.id);
    res.status(204).send();
  } catch (e) { next(e); }
}
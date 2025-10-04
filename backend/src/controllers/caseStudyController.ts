import { Request, Response, NextFunction } from 'express';
import { CaseStudyModel } from '../models/CaseStudyModel';
import { createError } from '../middleware/errorHandler';
import { sanitizeContent } from '../utils/sanitize';

export async function listCaseStudies(_req: Request, res: Response, next?: NextFunction): Promise<void> {
  try {
    const items = await CaseStudyModel.all();
    res.json({ success: true, data: items });
  } catch (e: any) { 
    if (e.message?.includes('timeout')) {
      res.status(503).json({ 
        success: false, 
        error: { 
          code: 'database_unavailable', 
          message: 'Database connection timeout. Please check database server status.' 
        } 
      });
      return;
    }
    if (next) next(e);
    else throw e; 
  }
}

export async function getCaseStudy(req: Request, res: Response, next?: NextFunction) {
  try {
    const item = await CaseStudyModel.findBySlug(req.params.slug);
    if (!item) return next?.(createError(404, 'Case study not found', 'not_found'));
    res.json({ success: true, data: item });
  } catch (e) { if (next) next(e); else throw e; }
}

export async function createCaseStudy(req: Request, res: Response, next?: NextFunction) {
  try {
    // Build payload with only allowed fields
    const payload: any = {
      title: req.body.title,
      slug: req.body.slug,
      clientName: req.body.clientName,
      industry: req.body.industry,
      challenge: sanitizeContent(req.body.challenge || ''),
      solution: sanitizeContent(req.body.content || req.body.solution || '')
    };
    
    if (req.body.results) payload.results = req.body.results;
    if (req.body.techStack) payload.techStack = req.body.techStack;
    if (req.body.heroImage) {
      // Convert string to JSON object for database
      payload.heroImage = typeof req.body.heroImage === 'string' 
        ? { url: req.body.heroImage } 
        : req.body.heroImage;
    }
    
    const item = await CaseStudyModel.create(payload);
    res.status(201).json({ success: true, data: item });
  } catch (e) { if (next) next(e); else throw e; }
}

export async function updateCaseStudy(req: Request, res: Response, next?: NextFunction) {
  try {
    // Build payload with only allowed fields
    const payload: any = {};
    
    // Handle content -> solution mapping
    if (req.body.content) {
      payload.solution = sanitizeContent(req.body.content);
    } else if (req.body.solution) {
      payload.solution = sanitizeContent(req.body.solution);
    }
    
    // Add other allowed fields
    if (req.body.title) payload.title = req.body.title;
    if (req.body.slug) payload.slug = req.body.slug;
    if (req.body.clientName) payload.clientName = req.body.clientName;
    if (req.body.industry) payload.industry = req.body.industry;
    if (req.body.challenge) payload.challenge = sanitizeContent(req.body.challenge);
    if (req.body.results) payload.results = req.body.results;
    if (req.body.techStack) payload.techStack = req.body.techStack;
    if (req.body.heroImage) {
      // Convert string to JSON object for database
      payload.heroImage = typeof req.body.heroImage === 'string' 
        ? { url: req.body.heroImage } 
        : req.body.heroImage;
    }
    
    const item = await CaseStudyModel.update(req.params.id, payload);
    if (!item) return next?.(createError(404, 'Case study not found', 'not_found'));
    res.json({ success: true, data: item });
  } catch (e) { if (next) next(e); else throw e; }
}

export async function deleteCaseStudy(req: Request, res: Response, next?: NextFunction) {
  try {
    await CaseStudyModel.delete(req.params.id);
    res.status(204).send();
  } catch (e) { 
    if (next) next(e);
    else throw e;
  }
}

export const caseStudyController = {
  getAll: listCaseStudies,
  getOne: getCaseStudy,
  create: createCaseStudy,
  update: updateCaseStudy,
  delete: deleteCaseStudy
};
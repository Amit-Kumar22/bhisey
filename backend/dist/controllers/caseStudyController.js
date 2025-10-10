"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caseStudyController = void 0;
exports.listCaseStudies = listCaseStudies;
exports.getCaseStudy = getCaseStudy;
exports.createCaseStudy = createCaseStudy;
exports.updateCaseStudy = updateCaseStudy;
exports.deleteCaseStudy = deleteCaseStudy;
const CaseStudyModel_1 = require("../models/CaseStudyModel");
const errorHandler_1 = require("../middleware/errorHandler");
const sanitize_1 = require("../utils/sanitize");
async function listCaseStudies(_req, res, next) {
    var _a;
    try {
        const items = await CaseStudyModel_1.CaseStudyModel.all();
        res.json({ success: true, data: items });
    }
    catch (e) {
        if ((_a = e.message) === null || _a === void 0 ? void 0 : _a.includes('timeout')) {
            res.status(503).json({
                success: false,
                error: {
                    code: 'database_unavailable',
                    message: 'Database connection timeout. Please check database server status.'
                }
            });
            return;
        }
        if (next)
            next(e);
        else
            throw e;
    }
}
async function getCaseStudy(req, res, next) {
    try {
        const item = await CaseStudyModel_1.CaseStudyModel.findBySlug(req.params.slug);
        if (!item)
            return next === null || next === void 0 ? void 0 : next((0, errorHandler_1.createError)(404, 'Case study not found', 'not_found'));
        res.json({ success: true, data: item });
    }
    catch (e) {
        if (next)
            next(e);
        else
            throw e;
    }
}
async function createCaseStudy(req, res, next) {
    try {
        // Build payload with only allowed fields
        const payload = {
            title: req.body.title,
            slug: req.body.slug,
            clientName: req.body.clientName,
            industry: req.body.industry,
            challenge: (0, sanitize_1.sanitizeContent)(req.body.challenge || ''),
            solution: (0, sanitize_1.sanitizeContent)(req.body.content || req.body.solution || '')
        };
        if (req.body.results)
            payload.results = req.body.results;
        if (req.body.techStack)
            payload.techStack = req.body.techStack;
        if (req.body.heroImage) {
            // Convert string to JSON object for database
            payload.heroImage = typeof req.body.heroImage === 'string'
                ? { url: req.body.heroImage }
                : req.body.heroImage;
        }
        const item = await CaseStudyModel_1.CaseStudyModel.create(payload);
        res.status(201).json({ success: true, data: item });
    }
    catch (e) {
        if (next)
            next(e);
        else
            throw e;
    }
}
async function updateCaseStudy(req, res, next) {
    try {
        // Build payload with only allowed fields
        const payload = {};
        // Handle content -> solution mapping
        if (req.body.content) {
            payload.solution = (0, sanitize_1.sanitizeContent)(req.body.content);
        }
        else if (req.body.solution) {
            payload.solution = (0, sanitize_1.sanitizeContent)(req.body.solution);
        }
        // Add other allowed fields
        if (req.body.title)
            payload.title = req.body.title;
        if (req.body.slug)
            payload.slug = req.body.slug;
        if (req.body.clientName)
            payload.clientName = req.body.clientName;
        if (req.body.industry)
            payload.industry = req.body.industry;
        if (req.body.challenge)
            payload.challenge = (0, sanitize_1.sanitizeContent)(req.body.challenge);
        if (req.body.results)
            payload.results = req.body.results;
        if (req.body.techStack)
            payload.techStack = req.body.techStack;
        if (req.body.heroImage) {
            // Convert string to JSON object for database
            payload.heroImage = typeof req.body.heroImage === 'string'
                ? { url: req.body.heroImage }
                : req.body.heroImage;
        }
        const item = await CaseStudyModel_1.CaseStudyModel.update(req.params.id, payload);
        if (!item)
            return next === null || next === void 0 ? void 0 : next((0, errorHandler_1.createError)(404, 'Case study not found', 'not_found'));
        res.json({ success: true, data: item });
    }
    catch (e) {
        if (next)
            next(e);
        else
            throw e;
    }
}
async function deleteCaseStudy(req, res, next) {
    try {
        await CaseStudyModel_1.CaseStudyModel.delete(req.params.id);
        res.status(204).send();
    }
    catch (e) {
        if (next)
            next(e);
        else
            throw e;
    }
}
exports.caseStudyController = {
    getAll: listCaseStudies,
    getOne: getCaseStudy,
    create: createCaseStudy,
    update: updateCaseStudy,
    delete: deleteCaseStudy
};
//# sourceMappingURL=caseStudyController.js.map
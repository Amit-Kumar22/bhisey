"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCaseStudies = listCaseStudies;
exports.getCaseStudy = getCaseStudy;
exports.createCaseStudy = createCaseStudy;
exports.updateCaseStudy = updateCaseStudy;
exports.deleteCaseStudy = deleteCaseStudy;
const CaseStudyModel_1 = require("../models/CaseStudyModel");
const errorHandler_1 = require("../middleware/errorHandler");
const sanitize_1 = require("../utils/sanitize");
async function listCaseStudies(_req, res, next) {
    try {
        const items = await CaseStudyModel_1.CaseStudyModel.all();
        res.json({ success: true, data: items });
    }
    catch (e) {
        next(e);
    }
}
async function getCaseStudy(req, res, next) {
    try {
        const item = await CaseStudyModel_1.CaseStudyModel.findBySlug(req.params.slug);
        if (!item)
            return next((0, errorHandler_1.createError)(404, 'Case study not found', 'not_found'));
        res.json({ success: true, data: item });
    }
    catch (e) {
        next(e);
    }
}
async function createCaseStudy(req, res, next) {
    try {
        const sanitized = { ...req.body, content: (0, sanitize_1.sanitizeContent)(req.body.content) };
        const item = await CaseStudyModel_1.CaseStudyModel.create(sanitized);
        res.status(201).json({ success: true, data: item });
    }
    catch (e) {
        next(e);
    }
}
async function updateCaseStudy(req, res, next) {
    try {
        const payload = req.body.content ? { ...req.body, content: (0, sanitize_1.sanitizeContent)(req.body.content) } : req.body;
        const item = await CaseStudyModel_1.CaseStudyModel.update(req.params.id, payload);
        if (!item)
            return next((0, errorHandler_1.createError)(404, 'Case study not found', 'not_found'));
        res.json({ success: true, data: item });
    }
    catch (e) {
        next(e);
    }
}
async function deleteCaseStudy(req, res, next) {
    try {
        await CaseStudyModel_1.CaseStudyModel.delete(req.params.id);
        res.status(204).send();
    }
    catch (e) {
        next(e);
    }
}
//# sourceMappingURL=caseStudyController.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listBlogs = listBlogs;
exports.getBlog = getBlog;
exports.createBlog = createBlog;
exports.updateBlog = updateBlog;
exports.deleteBlog = deleteBlog;
const BlogModel_1 = require("../models/BlogModel");
const errorHandler_1 = require("../middleware/errorHandler");
const sanitize_1 = require("../utils/sanitize");
async function listBlogs(_req, res, next) {
    try {
        const blogs = await BlogModel_1.BlogModel.all();
        res.json({ success: true, data: blogs });
    }
    catch (e) {
        next(e);
    }
}
async function getBlog(req, res, next) {
    try {
        const blog = await BlogModel_1.BlogModel.findBySlug(req.params.slug);
        if (!blog)
            return next((0, errorHandler_1.createError)(404, 'Blog not found', 'not_found'));
        res.json({ success: true, data: blog });
    }
    catch (e) {
        next(e);
    }
}
async function createBlog(req, res, next) {
    try {
        const sanitized = { ...req.body, content: (0, sanitize_1.sanitizeContent)(req.body.content) };
        const blog = await BlogModel_1.BlogModel.create(sanitized);
        res.status(201).json({ success: true, data: blog });
    }
    catch (e) {
        next(e);
    }
}
async function updateBlog(req, res, next) {
    try {
        const payload = req.body.content ? { ...req.body, content: (0, sanitize_1.sanitizeContent)(req.body.content) } : req.body;
        const blog = await BlogModel_1.BlogModel.update(req.params.id, payload);
        if (!blog)
            return next((0, errorHandler_1.createError)(404, 'Blog not found', 'not_found'));
        res.json({ success: true, data: blog });
    }
    catch (e) {
        next(e);
    }
}
async function deleteBlog(req, res, next) {
    try {
        await BlogModel_1.BlogModel.delete(req.params.id);
        res.status(204).send();
    }
    catch (e) {
        next(e);
    }
}
//# sourceMappingURL=blogController.js.map
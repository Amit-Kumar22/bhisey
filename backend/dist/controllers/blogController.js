"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogController = void 0;
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
        if (next)
            next(e);
        else
            throw e;
    }
}
async function getBlog(req, res, next) {
    try {
        const blog = await BlogModel_1.BlogModel.findBySlug(req.params.slug);
        if (!blog)
            return next === null || next === void 0 ? void 0 : next((0, errorHandler_1.createError)(404, 'Blog not found', 'not_found'));
        res.json({ success: true, data: blog });
    }
    catch (e) {
        if (next)
            next(e);
        else
            throw e;
    }
}
async function createBlog(req, res, next) {
    var _a;
    try {
        // Build payload with only allowed fields
        const payload = {
            title: req.body.title,
            slug: req.body.slug,
            body: (0, sanitize_1.sanitizeContent)(req.body.content || req.body.body),
            authorId: ((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) || 'system' // From auth middleware
        };
        if (req.body.excerpt)
            payload.excerpt = req.body.excerpt;
        if (req.body.tags)
            payload.tags = req.body.tags;
        if (req.body.heroImage) {
            // Convert string to JSON object for database
            payload.heroImage = typeof req.body.heroImage === 'string'
                ? { url: req.body.heroImage }
                : req.body.heroImage;
        }
        const blog = await BlogModel_1.BlogModel.create(payload);
        res.status(201).json({ success: true, data: blog });
    }
    catch (e) {
        if (next)
            next(e);
        else
            throw e;
    }
}
async function updateBlog(req, res, next) {
    try {
        // Build payload with only allowed fields
        const payload = {};
        // Handle content -> body mapping
        if (req.body.content) {
            payload.body = (0, sanitize_1.sanitizeContent)(req.body.content);
        }
        else if (req.body.body) {
            payload.body = (0, sanitize_1.sanitizeContent)(req.body.body);
        }
        // Add other allowed fields
        if (req.body.title)
            payload.title = req.body.title;
        if (req.body.slug)
            payload.slug = req.body.slug;
        if (req.body.excerpt)
            payload.excerpt = req.body.excerpt;
        if (req.body.tags)
            payload.tags = req.body.tags;
        if (req.body.heroImage) {
            // Convert string to JSON object for database
            payload.heroImage = typeof req.body.heroImage === 'string'
                ? { url: req.body.heroImage }
                : req.body.heroImage;
        }
        const blog = await BlogModel_1.BlogModel.update(req.params.id, payload);
        if (!blog)
            return next === null || next === void 0 ? void 0 : next((0, errorHandler_1.createError)(404, 'Blog not found', 'not_found'));
        res.json({ success: true, data: blog });
    }
    catch (e) {
        if (next)
            next(e);
        else
            throw e;
    }
}
async function deleteBlog(req, res, next) {
    try {
        await BlogModel_1.BlogModel.delete(req.params.id);
        res.status(204).send();
    }
    catch (e) {
        if (next)
            next(e);
        else
            throw e;
    }
}
exports.blogController = {
    getAll: listBlogs,
    getOne: getBlog,
    create: createBlog,
    update: updateBlog,
    delete: deleteBlog
};
//# sourceMappingURL=blogController.js.map
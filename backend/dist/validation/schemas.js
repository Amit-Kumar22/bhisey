"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caseStudyUpdateSchema = exports.caseStudyCreateSchema = exports.blogUpdateSchema = exports.blogCreateSchema = exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6)
});
exports.blogCreateSchema = zod_1.z.object({
    title: zod_1.z.string().min(3),
    slug: zod_1.z.string().min(3).regex(/^[a-z0-9-]+$/),
    content: zod_1.z.string().min(10),
    excerpt: zod_1.z.string().optional(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
    heroImage: zod_1.z.union([zod_1.z.string(), zod_1.z.object({ url: zod_1.z.string() }), zod_1.z.any()]).optional()
}).passthrough();
exports.blogUpdateSchema = zod_1.z.object({
    title: zod_1.z.string().min(3).optional(),
    slug: zod_1.z.string().min(3).regex(/^[a-z0-9-]+$/).optional(),
    content: zod_1.z.string().min(10).optional(),
    excerpt: zod_1.z.string().optional(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
    heroImage: zod_1.z.union([zod_1.z.string(), zod_1.z.object({ url: zod_1.z.string() }), zod_1.z.any()]).optional()
}).passthrough();
exports.caseStudyCreateSchema = zod_1.z.object({
    title: zod_1.z.string().min(3),
    slug: zod_1.z.string().min(3).regex(/^[a-z0-9-]+$/),
    content: zod_1.z.string().min(10),
    clientName: zod_1.z.string().min(1),
    industry: zod_1.z.string().min(1),
    challenge: zod_1.z.string().min(1),
    results: zod_1.z.array(zod_1.z.any()).optional(),
    techStack: zod_1.z.array(zod_1.z.string()).optional(),
    heroImage: zod_1.z.union([zod_1.z.string(), zod_1.z.object({ url: zod_1.z.string() }), zod_1.z.any()]).optional()
}).passthrough();
exports.caseStudyUpdateSchema = zod_1.z.object({
    title: zod_1.z.string().min(3).optional(),
    slug: zod_1.z.string().min(3).regex(/^[a-z0-9-]+$/).optional(),
    content: zod_1.z.string().min(10).optional(),
    clientName: zod_1.z.string().optional(),
    industry: zod_1.z.string().optional(),
    challenge: zod_1.z.string().optional(),
    results: zod_1.z.array(zod_1.z.any()).optional(),
    techStack: zod_1.z.array(zod_1.z.string()).optional(),
    heroImage: zod_1.z.union([zod_1.z.string(), zod_1.z.object({ url: zod_1.z.string() }), zod_1.z.any()]).optional()
}).passthrough();
//# sourceMappingURL=schemas.js.map
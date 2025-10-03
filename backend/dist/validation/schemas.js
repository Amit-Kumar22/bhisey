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
    content: zod_1.z.string().min(10)
});
exports.blogUpdateSchema = exports.blogCreateSchema.partial();
exports.caseStudyCreateSchema = zod_1.z.object({
    title: zod_1.z.string().min(3),
    slug: zod_1.z.string().min(3).regex(/^[a-z0-9-]+$/),
    content: zod_1.z.string().min(10)
});
exports.caseStudyUpdateSchema = exports.caseStudyCreateSchema.partial();
//# sourceMappingURL=schemas.js.map
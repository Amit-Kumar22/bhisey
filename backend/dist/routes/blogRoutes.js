"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogController_1 = require("../controllers/blogController");
const validate_1 = require("../middleware/validate");
const schemas_1 = require("../validation/schemas");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.get('/', blogController_1.listBlogs);
router.get('/:slug', blogController_1.getBlog);
router.post('/', auth_1.requireAuth, (0, validate_1.validateBody)(schemas_1.blogCreateSchema), blogController_1.createBlog);
router.put('/:id', auth_1.requireAuth, (0, validate_1.validateBody)(schemas_1.blogUpdateSchema), blogController_1.updateBlog);
router.delete('/:id', auth_1.requireAuth, blogController_1.deleteBlog);
exports.default = router;
//# sourceMappingURL=blogRoutes.js.map
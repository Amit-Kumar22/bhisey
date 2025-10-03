"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const validate_1 = require("../middleware/validate");
const schemas_1 = require("../validation/schemas");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.post('/login', (0, validate_1.validateBody)(schemas_1.loginSchema), authController_1.login);
router.post('/refresh', authController_1.refresh); // separate schema for refresh if needed
router.post('/logout', authController_1.logout);
router.get('/me', auth_1.requireAuth, authController_1.me);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map
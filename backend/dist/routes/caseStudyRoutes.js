"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const caseStudyController_1 = require("../controllers/caseStudyController");
const validate_1 = require("../middleware/validate");
const schemas_1 = require("../validation/schemas");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.get('/', caseStudyController_1.listCaseStudies);
router.get('/:slug', caseStudyController_1.getCaseStudy);
router.post('/', auth_1.requireAuth, (0, validate_1.validateBody)(schemas_1.caseStudyCreateSchema), caseStudyController_1.createCaseStudy);
router.put('/:id', auth_1.requireAuth, (0, validate_1.validateBody)(schemas_1.caseStudyUpdateSchema), caseStudyController_1.updateCaseStudy);
router.delete('/:id', auth_1.requireAuth, caseStudyController_1.deleteCaseStudy);
exports.default = router;
//# sourceMappingURL=caseStudyRoutes.js.map
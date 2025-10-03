"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = validateBody;
const errorHandler_1 = require("./errorHandler");
function validateBody(schema) {
    return (req, _res, next) => {
        try {
            req.body = schema.parse(req.body);
            next();
        }
        catch (e) {
            return next((0, errorHandler_1.createError)(400, 'Validation failed', 'validation_error', e.errors));
        }
    };
}
//# sourceMappingURL=validate.js.map
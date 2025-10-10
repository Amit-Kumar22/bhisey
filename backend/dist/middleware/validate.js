"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = validateBody;
function validateBody(schema) {
    return (req, res, next) => {
        var _a;
        process.stderr.write('\n🔍 VALIDATING REQUEST\n');
        process.stderr.write('Body: ' + JSON.stringify(req.body, null, 2) + '\n');
        try {
            const parsed = schema.parse(req.body);
            req.body = parsed;
            process.stderr.write('✅ VALIDATION PASSED\n\n');
            next();
        }
        catch (e) {
            process.stderr.write('❌ VALIDATION FAILED\n');
            process.stderr.write('Raw error: ' + JSON.stringify(e, null, 2) + '\n');
            const formattedErrors = ((_a = e.issues) === null || _a === void 0 ? void 0 : _a.map((err) => ({
                field: err.path.join('.') || 'root',
                message: err.message,
                code: err.code
            }))) || [];
            process.stderr.write('Formatted: ' + JSON.stringify(formattedErrors, null, 2) + '\n\n');
            return res.status(400).json({
                success: false,
                error: {
                    code: 'validation_error',
                    message: 'Validation failed',
                    details: formattedErrors
                }
            });
        }
    };
}
//# sourceMappingURL=validate.js.map
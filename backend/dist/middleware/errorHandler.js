"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = notFound;
exports.errorHandler = errorHandler;
exports.createError = createError;
const logger_1 = __importDefault(require("../utils/logger"));
function notFound(_req, res) {
    res.status(404).json({ success: false, error: { code: 'not_found', message: 'Resource not found' } });
}
function errorHandler(err, _req, res, _next) {
    const status = err.status || 500;
    if (status >= 500) {
        logger_1.default.error({ err }, 'Unhandled error');
    }
    res.status(status).json({
        success: false,
        error: {
            code: err.code || 'internal_error',
            message: err.message || 'Internal Server Error',
            details: err.details,
        }
    });
}
function createError(status, message, code, details) {
    const error = new Error(message);
    error.status = status;
    error.code = code;
    error.details = details;
    return error;
}
//# sourceMappingURL=errorHandler.js.map
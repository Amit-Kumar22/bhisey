"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = requireAuth;
const jwt_1 = require("../utils/jwt");
const errorHandler_1 = require("./errorHandler");
function requireAuth(req, _res, next) {
    var _a;
    const header = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
    if (!header || !header.startsWith('Bearer ')) {
        return next((0, errorHandler_1.createError)(401, 'Missing or invalid authorization header', 'unauthorized'));
    }
    try {
        const token = header.split(' ')[1];
        const payload = (0, jwt_1.verifyAccessToken)(token);
        req.user = { id: payload.sub, email: payload.email };
        next();
    }
    catch (e) {
        return next((0, errorHandler_1.createError)(401, 'Invalid or expired token', 'unauthorized'));
    }
}
//# sourceMappingURL=auth.js.map
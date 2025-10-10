"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
exports.login = login;
exports.refresh = refresh;
exports.logout = logout;
exports.me = me;
const AdminModel_1 = require("../models/AdminModel");
const jwt_1 = require("../utils/jwt");
const errorHandler_1 = require("../middleware/errorHandler");
async function login(req, res, next) {
    var _a;
    try {
        const { email, password } = req.body;
        const admin = await AdminModel_1.AdminModel.findByEmail(email);
        if (!admin) {
            const error = (0, errorHandler_1.createError)(401, 'Invalid credentials', 'invalid_credentials');
            if (next) {
                next(error);
                return;
            }
            res.status(401).json({ success: false, error: { code: 'invalid_credentials', message: 'Invalid credentials' } });
            return;
        }
        if (!admin.active) {
            const error = (0, errorHandler_1.createError)(403, 'Account inactive', 'forbidden');
            if (next) {
                next(error);
                return;
            }
            res.status(403).json({ success: false, error: { code: 'forbidden', message: 'Account inactive' } });
            return;
        }
        // Require ADMIN role for now
        if (!((_a = admin.roles) === null || _a === void 0 ? void 0 : _a.includes('ADMIN'))) {
            const error = (0, errorHandler_1.createError)(403, 'Forbidden', 'forbidden');
            if (next) {
                next(error);
                return;
            }
            res.status(403).json({ success: false, error: { code: 'forbidden', message: 'Forbidden' } });
            return;
        }
        const valid = await AdminModel_1.AdminModel.verifyPassword(admin, password);
        if (!valid) {
            const error = (0, errorHandler_1.createError)(401, 'Invalid credentials', 'invalid_credentials');
            if (next) {
                next(error);
                return;
            }
            res.status(401).json({ success: false, error: { code: 'invalid_credentials', message: 'Invalid credentials' } });
            return;
        }
        const accessToken = (0, jwt_1.signAccessToken)({ sub: admin.id, email: admin.email });
        const refreshToken = (0, jwt_1.signRefreshToken)({ sub: admin.id, email: admin.email });
        res.json({ success: true, data: { token: accessToken, refreshToken, user: { id: admin.id, email: admin.email, roles: admin.roles } } });
    }
    catch (e) {
        if (next)
            next(e);
        else
            throw e;
    }
}
async function refresh(req, res, next) {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken)
            return next === null || next === void 0 ? void 0 : next((0, errorHandler_1.createError)(400, 'Missing refresh token', 'validation_error'));
        const payload = (0, jwt_1.verifyRefreshToken)(refreshToken);
        const accessToken = (0, jwt_1.signAccessToken)({ sub: payload.sub, email: payload.email });
        const newRefresh = (0, jwt_1.signRefreshToken)({ sub: payload.sub, email: payload.email });
        res.json({ success: true, data: { token: accessToken, refreshToken: newRefresh } });
    }
    catch (e) {
        if (next)
            return next((0, errorHandler_1.createError)(401, 'Invalid refresh token', 'unauthorized'));
        else
            throw (0, errorHandler_1.createError)(401, 'Invalid refresh token', 'unauthorized');
    }
}
async function logout(_req, res) {
    // For stateless JWT, client just discards tokens. Implement blacklist if needed.
    res.json({ success: true, data: { message: 'Logged out' } });
}
async function me(req, res, next) {
    try {
        // if using requireAuth middleware, user is attached
        // @ts-ignore
        const user = req.user;
        if (!user)
            return next === null || next === void 0 ? void 0 : next((0, errorHandler_1.createError)(401, 'Unauthorized', 'unauthorized'));
        res.json({ success: true, data: user });
    }
    catch (e) {
        if (next)
            next(e);
        else
            throw e;
    }
}
exports.authController = {
    login,
    refresh,
    logout,
    me
};
//# sourceMappingURL=authController.js.map
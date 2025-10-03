"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signAccessToken = signAccessToken;
exports.signRefreshToken = signRefreshToken;
exports.verifyAccessToken = verifyAccessToken;
exports.verifyRefreshToken = verifyRefreshToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const accessOpts = { expiresIn: env_1.env.ACCESS_TOKEN_TTL };
const refreshOpts = { expiresIn: env_1.env.REFRESH_TOKEN_TTL };
function signAccessToken(payload) {
    return jsonwebtoken_1.default.sign({ ...payload, type: 'access' }, env_1.env.JWT_ACCESS_SECRET, accessOpts);
}
function signRefreshToken(payload) {
    return jsonwebtoken_1.default.sign({ ...payload, type: 'refresh' }, env_1.env.JWT_REFRESH_SECRET, refreshOpts);
}
function verifyAccessToken(token) {
    return jsonwebtoken_1.default.verify(token, env_1.env.JWT_ACCESS_SECRET);
}
function verifyRefreshToken(token) {
    return jsonwebtoken_1.default.verify(token, env_1.env.JWT_REFRESH_SECRET);
}
//# sourceMappingURL=jwt.js.map
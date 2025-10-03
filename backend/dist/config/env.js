"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(process.cwd(), '.env') });
function required(name, value) {
    if (!value) {
        throw new Error(`Missing required environment variable ${name}`);
    }
    return value;
}
// Support legacy / alternate variable names to reduce setup friction.
// (Your current .env used JWT_SECRET & JWT_EXPIRES_IN, so we map them here.)
exports.env = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: parseInt(process.env.PORT || '4000', 10),
    DATABASE_URL: required('DATABASE_URL', process.env.DATABASE_URL),
    JWT_ACCESS_SECRET: required('JWT_ACCESS_SECRET', process.env.JWT_ACCESS_SECRET || process.env.JWT_SECRET),
    JWT_REFRESH_SECRET: required('JWT_REFRESH_SECRET', process.env.JWT_REFRESH_SECRET),
    ACCESS_TOKEN_TTL: process.env.ACCESS_TOKEN_TTL || process.env.JWT_EXPIRES_IN || '15m',
    REFRESH_TOKEN_TTL: process.env.REFRESH_TOKEN_TTL || process.env.JWT_REFRESH_EXPIRES_IN || '7d'
};
exports.default = exports.env;
//# sourceMappingURL=env.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModel = void 0;
// Prisma-backed Admin model facade.
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = require("../config/prisma");
class AdminModel {
    static async findByEmail(email) {
        return prisma_1.prisma.user.findUnique({ where: { email } });
    }
    static async create(email, password) {
        const hash = await bcryptjs_1.default.hash(password, 12);
        return prisma_1.prisma.user.create({
            data: {
                email,
                name: email.split('@')[0] || 'Admin',
                passwordHash: hash,
                roles: ['ADMIN'],
                active: true
            }
        });
    }
    static async verifyPassword(admin, password) {
        return bcryptjs_1.default.compare(password, admin.passwordHash);
    }
}
exports.AdminModel = AdminModel;
exports.default = AdminModel;
//# sourceMappingURL=AdminModel.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
// Separate Prisma instance for backend (Express) layer.
// Avoid sharing frontend global to keep clear boundary; reuse if desired later.
exports.prisma = new client_1.PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error']
});
exports.default = exports.prisma;
//# sourceMappingURL=prisma.js.map
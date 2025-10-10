"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
exports.getPool = getPool;
exports.withTransaction = withTransaction;
const pg_1 = require("pg");
const env_1 = require("./env");
/**
 * Database configuration optimized for Vercel serverless environment
 * Uses connection pooling with constraints suitable for serverless functions
 */
let cachedPool = null;
function createPool() {
    // Remove sslmode from connection string if present, as we're setting ssl config explicitly
    let dbUrl = env_1.env.DATABASE_URL;
    if (dbUrl.includes('sslmode=')) {
        dbUrl = dbUrl.replace(/[?&]sslmode=[^&]*/g, '');
    }
    const sslConfig = (() => {
        var _a;
        const sslRequired = ((_a = env_1.env.DATABASE_URL) === null || _a === void 0 ? void 0 : _a.includes('sslmode=require')) || process.env.FORCE_DB_SSL === 'true';
        if (!sslRequired)
            return undefined;
        // For production/serverless, always use SSL with system CAs
        return {
            rejectUnauthorized: true,
            // For development with self-signed certs, set DB_ALLOW_SELF_SIGNED=true
            ...(process.env.DB_ALLOW_SELF_SIGNED === 'true' ? { rejectUnauthorized: false } : {})
        };
    })();
    const config = {
        connectionString: dbUrl,
        // Serverless-optimized settings
        max: 1, // Single connection per function instance
        min: 0,
        idleTimeoutMillis: 10000, // Close idle connections quickly
        connectionTimeoutMillis: 10000,
        statement_timeout: 30000,
        ssl: sslConfig
    };
    return new pg_1.Pool(config);
}
/**
 * Get or create a cached database pool
 * Reuses the same pool across function invocations when possible
 */
function getPool() {
    if (!cachedPool) {
        cachedPool = createPool();
    }
    return cachedPool;
}
// Export a proxy pool that auto-creates on access
exports.pool = new Proxy({}, {
    get(_target, prop) {
        const actualPool = getPool();
        // @ts-ignore
        return actualPool[prop];
    }
});
/**
 * Transaction helper for serverless functions
 */
async function withTransaction(fn) {
    const client = await exports.pool.connect();
    try {
        await client.query('BEGIN');
        const result = await fn(client);
        await client.query('COMMIT');
        return result;
    }
    catch (e) {
        await client.query('ROLLBACK');
        throw e;
    }
    finally {
        client.release();
    }
}
exports.default = exports.pool;
//# sourceMappingURL=db.serverless.js.map
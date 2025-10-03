"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
exports.withTransaction = withTransaction;
const pg_1 = require("pg");
const env_1 = require("./env");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Evaluate flags lazily in case env loading order changes or user modifies at runtime in tests.
function isAllowSelfSigned() {
    return process.env.DB_ALLOW_SELF_SIGNED === 'true';
}
function isNoDbMode() {
    return process.env.NO_DB_MODE === 'true';
}
const debugSsl = process.env.DB_DEBUG_SSL === 'true';
// Optional: Provide a CA cert so we can keep rejectUnauthorized=true with a self-signed / private CA.
// Mechanisms (priority order):
//   1) DB_SSL_CA_PATH=relative/or/absolute/path/to/ca.crt
//   2) DB_SSL_CA_BASE64=base64EncodedPem
//   3) Auto-detect fallback: backend/certs/aiven-ca.crt (if present) with no env vars set
// If PATH or BASE64 provided they take precedence over the auto-detect file.
let caCert;
try {
    const caPath = process.env.DB_SSL_CA_PATH;
    if (caPath) {
        const resolved = path_1.default.isAbsolute(caPath) ? caPath : path_1.default.resolve(process.cwd(), caPath);
        caCert = fs_1.default.readFileSync(resolved, 'utf8');
    }
    else if (process.env.DB_SSL_CA_BASE64) {
        caCert = Buffer.from(process.env.DB_SSL_CA_BASE64, 'base64').toString('utf8');
    }
    else {
        // Auto-detect common default path if present
        const autoPath = path_1.default.resolve(process.cwd(), 'backend/certs/aiven-ca.crt');
        if (fs_1.default.existsSync(autoPath)) {
            caCert = fs_1.default.readFileSync(autoPath, 'utf8');
            if (debugSsl)
                console.log('[DB][SSL] Auto-detected CA at backend/certs/aiven-ca.crt');
        }
    }
}
catch (e) {
    // Log lazily on first pool build to avoid import side effects (logger imports pino etc.)
    // eslint-disable-next-line no-console
    console.error('Failed to load DB CA certificate:', e);
}
let _pool = null;
function buildPool() {
    const sslConfig = (() => {
        var _a;
        const sslRequired = ((_a = env_1.env.DATABASE_URL) === null || _a === void 0 ? void 0 : _a.includes('sslmode=require')) || process.env.FORCE_DB_SSL === 'true';
        if (!sslRequired)
            return undefined;
        if (isAllowSelfSigned() && !caCert) {
            if (debugSsl)
                console.warn('[DB][SSL] Using rejectUnauthorized=false due to DB_ALLOW_SELF_SIGNED=true (DEV ONLY)');
            return { rejectUnauthorized: false }; // DEV convenience, not for prod
        }
        if (caCert) {
            if (debugSsl)
                console.log('[DB][SSL] Loaded custom CA certificate for PostgreSQL connection.');
            return { rejectUnauthorized: true, ca: caCert };
        }
        if (debugSsl)
            console.log('[DB][SSL] Enforcing SSL with default system CAs (no custom CA provided).');
        return { rejectUnauthorized: true }; // Rely on system store / standard CAs
    })();
    if (debugSsl) {
        console.log('[DB][SSL] Final ssl config:', sslConfig);
    }
    return new pg_1.Pool({
        connectionString: env_1.env.DATABASE_URL,
        max: 10,
        idleTimeoutMillis: 30000,
        statement_timeout: 30000,
        ssl: sslConfig
    });
}
exports.pool = new Proxy({}, {
    get(_target, prop) {
        if (isNoDbMode()) {
            throw new Error('NO_DB_MODE enabled: attempted DB access before disabling it.');
        }
        if (!_pool) {
            _pool = buildPool();
        }
        // @ts-ignore
        return _pool[prop];
    }
});
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
//# sourceMappingURL=db.js.map
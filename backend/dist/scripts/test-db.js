"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: path_1.default.resolve(process.cwd(), '.env') });
function loadCa() {
    try {
        if (process.env.DB_SSL_CA_PATH) {
            const p = path_1.default.isAbsolute(process.env.DB_SSL_CA_PATH) ? process.env.DB_SSL_CA_PATH : path_1.default.resolve(process.cwd(), process.env.DB_SSL_CA_PATH);
            return fs_1.default.readFileSync(p, 'utf8');
        }
        if (process.env.DB_SSL_CA_BASE64) {
            return Buffer.from(process.env.DB_SSL_CA_BASE64, 'base64').toString('utf8');
        }
    }
    catch (e) {
        console.error('Failed to load CA in test script:', e);
    }
    return undefined;
}
(async () => {
    const ca = loadCa();
    const allowSelfSigned = process.env.DB_ALLOW_SELF_SIGNED === 'true';
    const conn = process.env.DATABASE_URL;
    if (!conn) {
        console.error('No DATABASE_URL set');
        process.exit(1);
    }
    const sslRequired = conn.includes('sslmode=require') || process.env.FORCE_DB_SSL === 'true';
    const ssl = sslRequired ? (ca ? { rejectUnauthorized: true, ca } : allowSelfSigned ? { rejectUnauthorized: false, checkServerIdentity: () => undefined } : { rejectUnauthorized: true }) : undefined;
    console.log('--- DB Connectivity Test ---');
    console.log('DATABASE_URL host:', conn.replace(/:[^:@/]*@/, ':****@'));
    console.log('sslRequired:', sslRequired);
    console.log('allowSelfSigned:', allowSelfSigned);
    console.log('CA present:', !!ca);
    console.log('Effective ssl object:', ssl);
    const pool = new pg_1.Pool({ connectionString: conn, ssl });
    try {
        const r = await pool.query('SELECT version();');
        console.log('Success! PostgreSQL version:', r.rows[0].version);
        process.exit(0);
    }
    catch (e) {
        console.error('Connection FAILED');
        console.error('Error code:', e.code);
        console.error('Error message:', e.message);
        if (e.stack)
            console.error(e.stack);
        process.exit(2);
    }
    finally {
        pool.end().catch(() => { });
    }
})();
//# sourceMappingURL=test-db.js.map
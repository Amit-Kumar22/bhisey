"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const env_1 = require("./config/env");
const db_1 = require("./config/db");
const logger_1 = __importDefault(require("./utils/logger"));
const MAX_DB_RETRIES = parseInt(process.env.DB_START_RETRIES || '3', 10);
const RETRY_DELAY_MS = parseInt(process.env.DB_START_RETRY_DELAY_MS || '1500', 10);
async function testDbWithRetry() {
    let attempt = 0;
    while (attempt <= MAX_DB_RETRIES) {
        try {
            await db_1.pool.query('SELECT 1');
            if (attempt > 0) {
                logger_1.default.info({ attempt }, 'Database connection succeeded after retries');
            }
            return;
        }
        catch (err) {
            attempt++;
            if (attempt > MAX_DB_RETRIES) {
                throw err;
            }
            logger_1.default.warn({ attempt, remaining: MAX_DB_RETRIES - attempt }, 'Database connect failed, retrying...');
            await new Promise(r => setTimeout(r, RETRY_DELAY_MS));
        }
    }
}
async function start() {
    try {
        if (process.env.NO_DB_MODE === 'true') {
            logger_1.default.warn('NO_DB_MODE enabled: server starting without establishing DB connection. (All DB queries will fail)');
        }
        else if (process.env.SKIP_DB_CHECK === 'true') {
            logger_1.default.warn('SKIP_DB_CHECK enabled: skipping initial database connectivity test. First request will attempt connect.');
            // Do not test now.
        }
        else {
            await testDbWithRetry();
        }
        app_1.default.listen(env_1.env.PORT, () => {
            logger_1.default.info(`Backend server listening on port ${env_1.env.PORT}`);
            if (process.env.DB_ALLOW_SELF_SIGNED === 'true')
                logger_1.default.warn('Running with DB_ALLOW_SELF_SIGNED=true (development only).');
            if (process.env.SKIP_DB_CHECK === 'true')
                logger_1.default.warn('DB connectivity deferred until first query.');
        });
    }
    catch (e) {
        logger_1.default.error(e, 'Failed to start server');
        if ((e === null || e === void 0 ? void 0 : e.code) === 'SELF_SIGNED_CERT_IN_CHAIN') {
            logger_1.default.error('Self-signed certificate detected. Options:');
            logger_1.default.error('  1) Set DB_ALLOW_SELF_SIGNED=true (dev only)');
            logger_1.default.error('  2) Provide proper CA cert / adjust DATABASE_URL SSL params');
            logger_1.default.error('  3) Temporarily set SKIP_DB_CHECK=true to defer connection until first query');
        }
        process.exit(1);
    }
}
start();
//# sourceMappingURL=server.js.map
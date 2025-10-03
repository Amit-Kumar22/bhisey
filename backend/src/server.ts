import app from './app';
import { env } from './config/env';
import { pool } from './config/db';
import logger from './utils/logger';

const MAX_DB_RETRIES = parseInt(process.env.DB_START_RETRIES || '3', 10);
const RETRY_DELAY_MS = parseInt(process.env.DB_START_RETRY_DELAY_MS || '1500', 10);

async function testDbWithRetry(): Promise<void> {
  let attempt = 0;
  while (attempt <= MAX_DB_RETRIES) {
    try {
      await pool.query('SELECT 1');
      if (attempt > 0) {
        logger.info({ attempt }, 'Database connection succeeded after retries');
      }
      return;
    } catch (err) {
      attempt++;
      if (attempt > MAX_DB_RETRIES) {
        throw err;
      }
      logger.warn({ attempt, remaining: MAX_DB_RETRIES - attempt }, 'Database connect failed, retrying...');
      await new Promise(r => setTimeout(r, RETRY_DELAY_MS));
    }
  }
}

async function start() {
  try {
    if (process.env.NO_DB_MODE === 'true') {
      logger.warn('NO_DB_MODE enabled: server starting without establishing DB connection. (All DB queries will fail)');
    } else if (process.env.SKIP_DB_CHECK === 'true') {
      logger.warn('SKIP_DB_CHECK enabled: skipping initial database connectivity test. First request will attempt connect.');
      // Do not test now.
    } else {
      await testDbWithRetry();
    }
    app.listen(env.PORT, () => {
      logger.info(`Backend server listening on port ${env.PORT}`);
      if (process.env.DB_ALLOW_SELF_SIGNED === 'true') logger.warn('Running with DB_ALLOW_SELF_SIGNED=true (development only).');
      if (process.env.SKIP_DB_CHECK === 'true') logger.warn('DB connectivity deferred until first query.');
    });
  } catch (e) {
    logger.error(e, 'Failed to start server');
    if ((e as any)?.code === 'SELF_SIGNED_CERT_IN_CHAIN') {
      logger.error('Self-signed certificate detected. Options:');
      logger.error('  1) Set DB_ALLOW_SELF_SIGNED=true (dev only)');
      logger.error('  2) Provide proper CA cert / adjust DATABASE_URL SSL params');
      logger.error('  3) Temporarily set SKIP_DB_CHECK=true to defer connection until first query');
    }
    process.exit(1);
  }
}

start();
/**
 * Structured logging with Pino
 */

import pino from 'pino';
import { NextRequest } from 'next/server';

// Configure logger based on environment
const logger = pino({
  level: process.env.LOG_LEVEL || (process.env.NODE_ENV === 'production' ? 'info' : 'debug'),
  formatters: {
    level: (label) => ({ level: label }),
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  ...(process.env.NODE_ENV === 'development' && {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
        ignore: 'pid,hostname',
      },
    },
  }),
});

// Request ID generator for tracing
export function generateRequestId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Logger with request context
export class RequestLogger {
  private logger: pino.Logger;
  private requestId: string;
  private startTime: number;

  constructor(requestId?: string) {
    this.requestId = requestId || generateRequestId();
    this.startTime = Date.now();
    this.logger = logger.child({ requestId: this.requestId });
  }

  info(message: string, data?: any): void {
    this.logger.info(data, message);
  }

  error(message: string, error?: Error | any): void {
    this.logger.error({ err: error }, message);
  }

  warn(message: string, data?: any): void {
    this.logger.warn(data, message);
  }

  debug(message: string, data?: any): void {
    this.logger.debug(data, message);
  }

  logRequest(method: string, url: string, statusCode: number, userAgent?: string): void {
    const duration = Date.now() - this.startTime;
    this.logger.info({
      method,
      url,
      statusCode,
      duration,
      userAgent,
      type: 'request',
    }, 'HTTP Request');
  }

  logAuth(userId: string, email: string, action: string, success: boolean): void {
    this.logger.info({
      userId,
      email,
      action,
      success,
      type: 'auth',
    }, `Authentication ${action}`);
  }

  logFormSubmission(formType: string, submissionId: string, ip: string): void {
    this.logger.info({
      formType,
      submissionId,
      ip: this.hashIP(ip),
      type: 'form_submission',
    }, 'Form submission received');
  }

  logError(error: Error, context?: any): void {
    this.logger.error({
      err: error,
      context,
      type: 'error',
    }, 'Application error');
  }

  logSecurityEvent(event: string, details: any, severity: 'low' | 'medium' | 'high' = 'medium'): void {
    this.logger.warn({
      event,
      details,
      severity,
      type: 'security',
    }, `Security event: ${event}`);
  }

  private hashIP(ip: string): string {
    const crypto = require('crypto');
    const salt = process.env.IP_HASH_SALT || 'default-salt';
    return crypto.createHash('sha256').update(ip + salt).digest('hex').substring(0, 16);
  }

  getRequestId(): string {
    return this.requestId;
  }

  getDuration(): number {
    return Date.now() - this.startTime;
  }
}

// Audit logging service
export class AuditLogger {
  private logger: pino.Logger;

  constructor() {
    this.logger = logger.child({ component: 'audit' });
  }

  async logAction(auditData: {
    userId: string;
    action: string;
    entityType: string;
    entityId: string;
    before?: any;
    after?: any;
    ipHash: string;
    requestId?: string;
  }): Promise<void> {
    this.logger.info({
      ...auditData,
      timestamp: new Date().toISOString(),
      type: 'audit',
    }, `Audit: ${auditData.action} ${auditData.entityType}`);

    // TODO: Store in database audit log table
    // await auditRepository.create(auditData);
  }

  async logBulkAction(auditData: {
    userId: string;
    action: string;
    entityType: string;
    entityIds: string[];
    ipHash: string;
    requestId?: string;
  }): Promise<void> {
    this.logger.info({
      ...auditData,
      entityCount: auditData.entityIds.length,
      timestamp: new Date().toISOString(),
      type: 'audit_bulk',
    }, `Bulk audit: ${auditData.action} ${auditData.entityIds.length} ${auditData.entityType}s`);
  }
}

// Performance monitoring
export class PerformanceLogger {
  private logger: pino.Logger;

  constructor() {
    this.logger = logger.child({ component: 'performance' });
  }

  logDatabaseQuery(query: string, duration: number, recordCount?: number): void {
    this.logger.debug({
      query,
      duration,
      recordCount,
      type: 'db_query',
    }, 'Database query executed');
  }

  logCacheOperation(operation: 'hit' | 'miss' | 'set' | 'del', key: string, duration?: number): void {
    this.logger.debug({
      operation,
      key,
      duration,
      type: 'cache_operation',
    }, `Cache ${operation}`);
  }

  logExternalAPI(service: string, endpoint: string, duration: number, statusCode: number): void {
    this.logger.info({
      service,
      endpoint,
      duration,
      statusCode,
      type: 'external_api',
    }, `External API call to ${service}`);
  }
}

// Application-wide logger instances
export const auditLogger = new AuditLogger();
export const performanceLogger = new PerformanceLogger();

// Utility function to create request logger
export function createRequestLogger(request: NextRequest): RequestLogger {
  const requestId = request.headers.get('x-request-id') || generateRequestId();
  return new RequestLogger(requestId);
}

// Export main logger
export default logger;
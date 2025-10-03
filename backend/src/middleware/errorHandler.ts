import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export interface ApiError extends Error {
  status?: number;
  details?: any;
  code?: string;
}

export function notFound(_req: Request, res: Response) {
  res.status(404).json({ success: false, error: { code: 'not_found', message: 'Resource not found' } });
}

export function errorHandler(err: ApiError, _req: Request, res: Response, _next: NextFunction) {
  const status = err.status || 500;
  if (status >= 500) {
    logger.error({ err }, 'Unhandled error');
  }
  res.status(status).json({
    success: false,
    error: {
      code: err.code || 'internal_error',
      message: err.message || 'Internal Server Error',
      ...(err.details && { details: err.details })
    }
  });
}

export function createError(status: number, message: string, code?: string, details?: any): ApiError {
  const error: ApiError = new Error(message);
  error.status = status;
  error.code = code;
  error.details = details;
  return error;
}
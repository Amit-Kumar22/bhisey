import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';
import { createError } from './errorHandler';

export function validateBody(schema: ZodSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    process.stderr.write('\n🔍 VALIDATING REQUEST\n');
    process.stderr.write('Body: ' + JSON.stringify(req.body, null, 2) + '\n');
    try {
      const parsed = schema.parse(req.body);
      req.body = parsed;
      process.stderr.write('✅ VALIDATION PASSED\n\n');
      next();
    } catch (e: any) {
      process.stderr.write('❌ VALIDATION FAILED\n');
      process.stderr.write('Raw error: ' + JSON.stringify(e, null, 2) + '\n');
      
      const formattedErrors = e.issues?.map((err: any) => ({
        field: err.path.join('.') || 'root',
        message: err.message,
        code: err.code
      })) || [];
      
      process.stderr.write('Formatted: ' + JSON.stringify(formattedErrors, null, 2) + '\n\n');
      
      return res.status(400).json({
        success: false,
        error: {
          code: 'validation_error',
          message: 'Validation failed',
          details: formattedErrors
        }
      });
    }
  };
}
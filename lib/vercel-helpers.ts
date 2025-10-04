import { VercelRequest, VercelResponse } from '@vercel/node';
import type { Request, Response, NextFunction } from 'express';

/**
 * Wrapper to apply Express-style middleware to Vercel serverless functions
 * Handles the conversion between Vercel's request/response and Express-style handlers
 */
export async function applyMiddleware(
  req: VercelRequest,
  res: VercelResponse,
  handler: (req: Request, res: Response, next?: NextFunction) => Promise<void> | void,
  middlewares: Array<(req: Request, res: Response, next: NextFunction) => Promise<void> | void> = []
): Promise<void> {
  // Create Express-compatible request/response objects
  const expressReq = req as unknown as Request;
  const expressRes = res as unknown as Response;

  try {
    // Run middlewares in sequence
    for (const middleware of middlewares) {
      await new Promise<void>((resolve, reject) => {
        const next: NextFunction = (err?: any) => {
          if (err) reject(err);
          else resolve();
        };

        const result = middleware(expressReq, expressRes, next);
        
        // If middleware returns a promise, wait for it
        if (result instanceof Promise) {
          result.then(() => resolve()).catch(reject);
        }
      });
    }

    // Execute the main handler with a no-op next function
    const next: NextFunction = (err?: any) => {
      if (err) throw err;
    };
    
    const result = handler(expressReq, expressRes, next);
    if (result instanceof Promise) {
      await result;
    }
  } catch (error) {
    console.error('Error in handler:', error);
    
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        error: {
          code: 'internal_server_error',
          message: process.env.NODE_ENV === 'production' 
            ? 'An internal error occurred' 
            : (error as Error).message
        }
      });
    }
  }
}

/**
 * Parse body for Vercel functions (they don't automatically parse like Express)
 */
export function parseBody(req: VercelRequest): Promise<any> {
  return new Promise((resolve) => {
    if (req.body) {
      resolve(req.body);
    } else {
      resolve({});
    }
  });
}

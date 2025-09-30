/**
 * Custom application error classes for structured error handling
 */

export abstract class AppError extends Error {
  public abstract readonly statusCode: number;
  public abstract readonly code: string;
  public readonly details?: any;

  constructor(message: string, details?: any) {
    super(message);
    this.name = this.constructor.name;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }

  public abstract toJSON(): {
    success: false;
    error: {
      code: string;
      message: string;
      details?: any;
    };
  };
}

export class ValidationError extends AppError {
  public readonly statusCode = 400;
  public readonly code = 'validation_failed';

  constructor(message: string = 'Validation failed', details?: any) {
    super(message, details);
  }

  public toJSON() {
    return {
      success: false as const,
      error: {
        code: this.code,
        message: this.message,
        ...(this.details && { details: this.details }),
      },
    };
  }
}

export class NotFoundError extends AppError {
  public readonly statusCode = 404;
  public readonly code = 'not_found';

  constructor(message: string = 'Resource not found') {
    super(message);
  }

  public toJSON() {
    return {
      success: false as const,
      error: {
        code: this.code,
        message: this.message,
      },
    };
  }
}

export class UnauthorizedError extends AppError {
  public readonly statusCode = 401;
  public readonly code = 'unauthorized';

  constructor(message: string = 'Authentication required') {
    super(message);
  }

  public toJSON() {
    return {
      success: false as const,
      error: {
        code: this.code,
        message: this.message,
      },
    };
  }
}

export class ForbiddenError extends AppError {
  public readonly statusCode = 403;
  public readonly code = 'forbidden';

  constructor(message: string = 'Access denied') {
    super(message);
  }

  public toJSON() {
    return {
      success: false as const,
      error: {
        code: this.code,
        message: this.message,
      },
    };
  }
}

export class ConflictError extends AppError {
  public readonly statusCode = 409;
  public readonly code = 'conflict';

  constructor(message: string = 'Resource conflict') {
    super(message);
  }

  public toJSON() {
    return {
      success: false as const,
      error: {
        code: this.code,
        message: this.message,
      },
    };
  }
}

export class RateLimitError extends AppError {
  public readonly statusCode = 429;
  public readonly code = 'rate_limited';

  constructor(message: string = 'Rate limit exceeded') {
    super(message);
  }

  public toJSON() {
    return {
      success: false as const,
      error: {
        code: this.code,
        message: this.message,
      },
    };
  }
}

export class PayloadTooLargeError extends AppError {
  public readonly statusCode = 413;
  public readonly code = 'payload_too_large';

  constructor(message: string = 'Payload too large') {
    super(message);
  }

  public toJSON() {
    return {
      success: false as const,
      error: {
        code: this.code,
        message: this.message,
      },
    };
  }
}

export class UnsupportedMediaTypeError extends AppError {
  public readonly statusCode = 415;
  public readonly code = 'unsupported_media_type';

  constructor(message: string = 'Unsupported media type') {
    super(message);
  }

  public toJSON() {
    return {
      success: false as const,
      error: {
        code: this.code,
        message: this.message,
      },
    };
  }
}

export class InternalServerError extends AppError {
  public readonly statusCode = 500;
  public readonly code = 'internal_error';

  constructor(message: string = 'Internal server error') {
    super(message);
  }

  public toJSON() {
    return {
      success: false as const,
      error: {
        code: this.code,
        message: this.message,
      },
    };
  }
}

// Helper function to determine if an error is an instance of AppError
export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError;
}

// Helper function to convert any error to a standardized error response
export function normalizeError(error: unknown): {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
} {
  if (isAppError(error)) {
    return error.toJSON();
  }

  // Handle Zod validation errors
  if (error && typeof error === 'object' && 'issues' in error) {
    return {
      success: false,
      error: {
        code: 'validation_failed',
        message: 'Validation failed',
        details: error,
      },
    };
  }

  // Handle generic errors
  const message = error instanceof Error ? error.message : 'Unknown error occurred';
  
  return {
    success: false,
    error: {
      code: 'internal_error',
      message: process.env.NODE_ENV === 'production' ? 'Internal server error' : message,
    },
  };
}
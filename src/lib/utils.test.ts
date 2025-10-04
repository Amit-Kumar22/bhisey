/**
 * Unit tests for utility functions
 */

import {
  cn,
  srOnly,
  a11yHelpers,
  validation,
  animation,
  seo,
  performance,
} from './utils';

describe('Utils - cn (className concatenation)', () => {
  test('should concatenate multiple classes', () => {
    expect(cn('class1', 'class2', 'class3')).toBe('class1 class2 class3');
  });

  test('should filter out falsy values', () => {
    expect(cn('class1', null, undefined, false, 'class2')).toBe('class1 class2');
  });

  test('should handle empty input', () => {
    expect(cn()).toBe('');
  });

  test('should handle only falsy values', () => {
    expect(cn(null, undefined, false)).toBe('');
  });
});

describe('Utils - srOnly (screen reader only)', () => {
  test('should return object with sr-only class', () => {
    const result = srOnly('Hidden text');
    expect(result).toEqual({
      children: 'Hidden text',
      className: 'sr-only',
    });
  });
});

describe('Utils - a11yHelpers (accessibility helpers)', () => {
  test('generateId should create unique IDs', () => {
    const id1 = a11yHelpers.generateId('test');
    const id2 = a11yHelpers.generateId('test');
    expect(id1).toMatch(/^test-/);
    expect(id2).toMatch(/^test-/);
    expect(id1).not.toBe(id2);
  });

  test('ariaLabel should return correct attribute', () => {
    expect(a11yHelpers.ariaLabel('Button label')).toEqual({
      'aria-label': 'Button label',
    });
  });

  test('ariaExpanded should return correct attribute', () => {
    expect(a11yHelpers.ariaExpanded(true)).toEqual({
      'aria-expanded': true,
    });
    expect(a11yHelpers.ariaExpanded(false)).toEqual({
      'aria-expanded': false,
    });
  });

  test('keyboard helpers should identify correct keys', () => {
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    const arrowEvent = new KeyboardEvent('keydown', { key: 'ArrowUp' });
    const otherEvent = new KeyboardEvent('keydown', { key: 'a' });

    expect(a11yHelpers.isEnterOrSpace(enterEvent)).toBe(true);
    expect(a11yHelpers.isEnterOrSpace(spaceEvent)).toBe(true);
    expect(a11yHelpers.isEnterOrSpace(otherEvent)).toBe(false);

    expect(a11yHelpers.isEscape(escapeEvent)).toBe(true);
    expect(a11yHelpers.isEscape(otherEvent)).toBe(false);

    expect(a11yHelpers.isArrowKey(arrowEvent)).toBe(true);
    expect(a11yHelpers.isArrowKey(otherEvent)).toBe(false);
  });
});

describe('Utils - validation', () => {
  describe('email validation', () => {
    test('should validate correct email addresses', () => {
      const validEmails = [
        'test@example.com',
        'user.name@domain.co.uk',
        'user+tag@example.org',
        'user_name@example-domain.com',
      ];

      validEmails.forEach(email => {
        expect(validation.email(email)).toBe(true);
      });
    });

    test('should reject invalid email addresses', () => {
      const invalidEmails = [
        'invalid-email',
        '@example.com',
        'user@',
        'user space@example.com',
        'user..double.dot@example.com',
      ];

      invalidEmails.forEach(email => {
        expect(validation.email(email)).toBe(false);
      });
    });
  });

  describe('phone validation', () => {
    test('should validate correct phone numbers', () => {
      const validPhones = [
        '+1234567890',
        '1234567890',
        '+442079460958',
        '+15551234567',
      ];

      validPhones.forEach(phone => {
        expect(validation.phone(phone)).toBe(true);
      });
    });

    test('should reject invalid phone numbers', () => {
      const invalidPhones = [
        'abc123',
        '+',
        '123',
        '+1234567890123456789', // Too long
        '0123456789', // Cannot start with 0 after country code
        '+01234567890', // Country code cannot start with 0
      ];

      invalidPhones.forEach(phone => {
        expect(validation.phone(phone)).toBe(false);
      });
    });
  });

  describe('message validation', () => {
    test('should validate messages with 30+ characters', () => {
      const validMessage = 'This is a valid message that has more than thirty characters.';
      expect(validation.message(validMessage)).toBe(true);
    });

    test('should reject messages with less than 30 characters', () => {
      const shortMessage = 'Too short';
      expect(validation.message(shortMessage)).toBe(false);
    });

    test('should trim whitespace before validation', () => {
      const messageWithSpaces = '   This is exactly thirty chars   ';
      expect(validation.message(messageWithSpaces)).toBe(false);
    });
  });

  describe('file validation', () => {
    test('should validate correct file types and sizes', () => {
      const validFile = new File(['content'], 'test.pdf', {
        type: 'application/pdf',
      });
      Object.defineProperty(validFile, 'size', { value: 1024 * 1024 }); // 1MB

      const result = validation.file.validateFile(validFile);
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should reject files that are too large', () => {
      const largeFile = new File(['content'], 'test.pdf', {
        type: 'application/pdf',
      });
      Object.defineProperty(largeFile, 'size', { value: 15 * 1024 * 1024 }); // 15MB

      const result = validation.file.validateFile(largeFile);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('File size must be less than 10MB');
    });

    test('should reject invalid file types', () => {
      const invalidFile = new File(['content'], 'test.exe', {
        type: 'application/x-executable',
      });
      Object.defineProperty(invalidFile, 'size', { value: 1024 }); // 1KB

      const result = validation.file.validateFile(invalidFile);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('File type must be PDF, DOC, DOCX, or TXT');
    });
  });
});

describe('Utils - animation', () => {
  test('prefersReducedMotion should return boolean', () => {
    // Mock window.matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    expect(typeof animation.prefersReducedMotion()).toBe('boolean');
  });

  test('safeAnimation should return reduced class when motion is reduced', () => {
    // Mock reduced motion preference
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: true, // Simulate reduced motion preference
      })),
    });

    expect(animation.safeAnimation('animate-spin', 'static')).toBe('static');
  });
});

describe('Utils - seo', () => {
  test('title should add brand suffix by default', () => {
    expect(seo.title('About Us')).toBe('About Us | Bhisey Software');
  });

  test('title should not add brand when includesBrand is false', () => {
    expect(seo.title('Bhisey Software', false)).toBe('Bhisey Software');
  });

  test('description should truncate long descriptions', () => {
    const longDesc = 'A'.repeat(200);
    const result = seo.description(longDesc);
    expect(result.length).toBe(155);
    expect(result.endsWith('...')).toBe(true);
  });

  test('description should not truncate short descriptions', () => {
    const shortDesc = 'Short description';
    expect(seo.description(shortDesc)).toBe(shortDesc);
  });

  test('canonical should generate correct URLs', () => {
    expect(seo.canonical('/about')).toBe('https://Bhisey.com/about');
    expect(seo.canonical('/services', 'https://example.com')).toBe('https://example.com/services');
  });
});

describe('Utils - performance', () => {
  test('debounce should delay function execution', (done) => {
    const mockFn = jest.fn();
    const debouncedFn = performance.debounce(mockFn, 100);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    expect(mockFn).not.toHaveBeenCalled();

    setTimeout(() => {
      expect(mockFn).toHaveBeenCalledTimes(1);
      done();
    }, 150);
  });

  test('throttle should limit function calls', (done) => {
    const mockFn = jest.fn();
    const throttledFn = performance.throttle(mockFn, 100);

    throttledFn();
    throttledFn();
    throttledFn();

    expect(mockFn).toHaveBeenCalledTimes(1);

    setTimeout(() => {
      throttledFn();
      expect(mockFn).toHaveBeenCalledTimes(2);
      done();
    }, 150);
  });

  test('createIntersectionObserver should return an observer in test environment', () => {
    const callback = jest.fn();
    const observer = performance.createIntersectionObserver(callback);
    
    // In test environment with mocked IntersectionObserver
    expect(observer).toBeDefined();
    expect(observer).toHaveProperty('observe');
    expect(observer).toHaveProperty('unobserve');
    expect(observer).toHaveProperty('disconnect');
  });
});

// Mock window for browser-specific tests
beforeEach(() => {
  // Reset window.matchMedia mock
  delete (window as any).matchMedia;
});
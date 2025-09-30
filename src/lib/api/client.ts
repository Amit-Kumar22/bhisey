/**
 * API Client utilities for frontend-backend communication
 */

// Types for API responses
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: any;
}

// API client configuration
const API_BASE_URL = '/api/v1';

class ApiError extends Error {
  constructor(
    public code: string,
    message: string,
    public status: number,
    public details?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Generic API client
export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const defaultHeaders: HeadersInit = {
      'Content-Type': 'application/json',
    };

    // Add auth token if available
    const token = this.getAuthToken();
    if (token) {
      defaultHeaders.Authorization = `Bearer ${token}`;
    }

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      const data: ApiResponse<T> = await response.json();

      if (!response.ok) {
        throw new ApiError(
          data.error?.code || 'unknown_error',
          data.error?.message || 'An error occurred',
          response.status,
          data.error?.details
        );
      }

      return data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      
      // Network or parsing error
      throw new ApiError(
        'network_error',
        'Failed to connect to server',
        0
      );
    }
  }

  private getAuthToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('auth_token');
  }

  // HTTP methods
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async patch<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }

  // File upload with FormData
  async upload<T>(endpoint: string, formData: FormData): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const headers: HeadersInit = {};
    const token = this.getAuthToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: formData,
      });

      const data: ApiResponse<T> = await response.json();

      if (!response.ok) {
        throw new ApiError(
          data.error?.code || 'unknown_error',
          data.error?.message || 'An error occurred',
          response.status,
          data.error?.details
        );
      }

      return data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      
      throw new ApiError(
        'network_error',
        'Failed to upload file',
        0
      );
    }
  }
}

// Create singleton instance
export const apiClient = new ApiClient();

// Specific API methods for forms
export const formsApi = {
  // Submit contact form
  async submitContactForm(data: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
    consent: boolean;
    attachment?: string;
  }): Promise<ApiResponse<{ id: string; message: string; submittedAt: string }>> {
    return apiClient.post('/forms/contact', data);
  },

  // Upload file for contact form
  async uploadFile(file: File): Promise<ApiResponse<{ fileToken: string; fileUrl: string }>> {
    const formData = new FormData();
    formData.append('file', file);
    return apiClient.upload('/forms/upload', formData);
  },

  // Submit job application
  async submitJobApplication(data: {
    jobId: string;
    name: string;
    email: string;
    phone?: string;
    coverLetter?: string;
    resumeFileToken?: string;
    portfolioFileToken?: string;
    consent: boolean;
  }): Promise<ApiResponse<{ id: string; message: string; submittedAt: string }>> {
    return apiClient.post('/forms/application', data);
  },

  // Submit newsletter subscription
  async subscribeNewsletter(data: {
    email: string;
    consent: boolean;
  }): Promise<ApiResponse<{ message: string }>> {
    return apiClient.post('/forms/newsletter', data);
  },

  // Submit cookie consent
  async submitConsent(data: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
  }): Promise<ApiResponse<{ message: string }>> {
    return apiClient.post('/forms/consent', data);
  },
};

// Content API methods
export const contentApi = {
  // Get navigation
  async getNavigation(): Promise<ApiResponse<any>> {
    return apiClient.get('/navigation');
  },

  // Get services
  async getServices(includeFullContent = false): Promise<ApiResponse<any[]>> {
    const params = includeFullContent ? '?include=full' : '';
    return apiClient.get(`/services${params}`);
  },

  // Get case studies
  async getCaseStudies(params?: {
    page?: number;
    pageSize?: number;
    service?: string;
    vertical?: string;
    tag?: string;
    q?: string;
  }): Promise<ApiResponse<any[]>> {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    const queryString = searchParams.toString();
    return apiClient.get(`/case-studies${queryString ? `?${queryString}` : ''}`);
  },

  // Get blog posts
  async getBlogPosts(params?: {
    page?: number;
    pageSize?: number;
    tag?: string;
    author?: string;
    q?: string;
  }): Promise<ApiResponse<any[]>> {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    const queryString = searchParams.toString();
    return apiClient.get(`/blog/posts${queryString ? `?${queryString}` : ''}`);
  },

  // Get careers
  async getJobs(params?: {
    page?: number;
    pageSize?: number;
    location?: string;
    department?: string;
    remote?: boolean;
  }): Promise<ApiResponse<any[]>> {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }
    const queryString = searchParams.toString();
    return apiClient.get(`/careers/jobs${queryString ? `?${queryString}` : ''}`);
  },

  // Search content
  async search(params: {
    q: string;
    page?: number;
    pageSize?: number;
    type?: string;
  }): Promise<ApiResponse<any[]>> {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        searchParams.append(key, value.toString());
      }
    });
    return apiClient.get(`/search?${searchParams.toString()}`);
  },
};

// Auth API methods
export const authApi = {
  // Login
  async login(credentials: {
    email: string;
    password: string;
  }): Promise<ApiResponse<{ token: string; refreshToken: string; user: any }>> {
    return apiClient.post('/auth/login', credentials);
  },

  // Refresh token
  async refresh(refreshToken: string): Promise<ApiResponse<{ token: string; refreshToken: string }>> {
    return apiClient.post('/auth/refresh', { refreshToken });
  },

  // Logout
  async logout(): Promise<ApiResponse<{ message: string }>> {
    return apiClient.post('/auth/logout');
  },

  // Get current user
  async me(): Promise<ApiResponse<any>> {
    return apiClient.get('/auth/me');
  },
};

// Export types and client
export { ApiError };
export default apiClient;
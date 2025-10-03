import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { API_BASE } from '@/lib/config/api';

export const backendClient = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' }
});

backendClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('auth_token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

backendClient.interceptors.response.use(
  (r) => r,
  async (error: AxiosError) => {
    const original = error.config as (InternalAxiosRequestConfig & { _retry?: boolean });
    // If no response or already retried, just reject
    if (!error.response || original?._retry) {
      return Promise.reject(error);
    }
    // Don't attempt refresh on refresh endpoint itself
    if (original.url && original.url.includes('/auth/refresh')) {
      return Promise.reject(error);
    }
    if (error.response.status === 401 && typeof window !== 'undefined') {
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        try {
          original._retry = true;
          const res = await backendClient.post('/auth/refresh', { refreshToken });
          const { token, refreshToken: newRefresh } = res.data.data;
          localStorage.setItem('auth_token', token);
          localStorage.setItem('refresh_token', newRefresh);
          // Ensure headers object exists
          if (!original.headers) original.headers = {} as any;
          (original.headers as any).Authorization = `Bearer ${token}`;
          return backendClient.request(original);
        } catch {
          localStorage.removeItem('auth_token');
          localStorage.removeItem('refresh_token');
        }
      }
    }
    return Promise.reject(error);
  }
);

export default backendClient;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import backendClient from '@/lib/api/backendClient';

interface AuthUser {
  id: string;
  email: string;
  name?: string;
  roles?: string[];
}

interface AuthState {
  user: AuthUser | null;
  status: 'idle' | 'loading' | 'authenticated' | 'error';
  error?: string;
  rehydrated: boolean;
}
const initialState: AuthState = { user: null, status: 'idle', rehydrated: false };

export const login = createAsyncThunk('auth/login', async (data: { email: string; password: string }) => {
  const res = await backendClient.post('/auth/login', data);
  const { token, refreshToken, user } = res.data.data;
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('refresh_token', refreshToken);
  }
  return user as AuthUser;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await backendClient.post('/auth/logout');
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('refresh_token');
  }
  return true;
});

// Rehydrate auth state if tokens exist
export const rehydrate = createAsyncThunk('auth/rehydrate', async () => {
  if (typeof window === 'undefined') return null;
  const token = localStorage.getItem('auth_token');
  const refresh = localStorage.getItem('refresh_token');
  if (!token || !refresh) return null;
  try {
    const res = await backendClient.get('/auth/me');
    return res.data.data as AuthUser;
  } catch {
    // tokens invalid -> clear
    localStorage.removeItem('auth_token');
    localStorage.removeItem('refresh_token');
    return null;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state: AuthState) => { state.status = 'loading'; state.error = undefined; })
      .addCase(login.fulfilled, (state: AuthState, action: any) => { state.status = 'authenticated'; state.user = action.payload; })
      .addCase(login.rejected, (state: AuthState, action: any) => { state.status = 'error'; state.error = action.error.message; })
      .addCase(logout.fulfilled, (state: AuthState) => { state.status = 'idle'; state.user = null; })
      .addCase(rehydrate.pending, (state: AuthState) => { /* keep existing state; mark in progress if needed */ })
      .addCase(rehydrate.fulfilled, (state: AuthState, action: any) => {
        if (action.payload) {
          state.user = action.payload;
          state.status = 'authenticated';
        }
        state.rehydrated = true;
      })
      .addCase(rehydrate.rejected, (state: AuthState) => { state.rehydrated = true; });
  }
});

export default authSlice.reducer;
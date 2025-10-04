"use client";
import { useState, useEffect, Suspense } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { login } from '@/store/slices/authSlice';
import { RootState } from '@/store';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

function LoginForm() {
  const dispatch = useAppDispatch();
  const { status: authStatus, user } = useAppSelector((s: RootState) => s.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Redirect if already authenticated
  useEffect(() => {
    if (user && authStatus === 'authenticated') {
      const next = searchParams.get('next') || '/admin';
      // Prevent redirect loop - don't redirect to login page
      const destination = next === '/admin/login' ? '/admin' : next;
      router.replace(destination);
    }
  }, [user, authStatus, router, searchParams]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      await dispatch(login({ email, password })).unwrap();
      // The redirect will happen via the useEffect above
    } catch (err: any) {
      setError(err.message || 'Login failed');
    }
  }

  const isLoading = authStatus === 'loading';

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Admin Portal</h1>
          <p className="mt-2 text-sm text-gray-600">Sign in with your administrator credentials to continue.</p>
        </div>

        <div className="bg-white/80 backdrop-blur border border-gray-200 shadow-sm rounded-xl p-8">
          <form onSubmit={onSubmit} className="space-y-6" aria-label="Admin login form">
            {error && (
              <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                {error}
              </div>
            )}

            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Mail className="h-5 w-5" />
                </span>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="text-black block w-full rounded-md border border-gray-300 bg-white py-2 pl-11 pr-3 text-sm placeholder-gray-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              </div>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <Lock className="h-5 w-5" />
                </span>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className="text-black block w-full rounded-md border border-gray-300 bg-white py-2 pl-11 pr-11 text-sm placeholder-gray-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(p => !p)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="relative flex w-full justify-center rounded-md bg-accent-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading && (
                <span className="absolute left-4 inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" aria-hidden="true" />
              )}
              {isLoading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <div className="mt-8 rounded-lg bg-gray-50 border border-dashed border-gray-300 p-4 text-xs text-gray-600">
            <p className="font-semibold mb-1">Demo Credentials</p>
            <ul className="space-y-1 font-mono">
              <li>Email: <span className="select-all">admin@bhesi.com</span></li>
              <li>Password: <span className="select-all">ChangeMe123!</span></li>
            </ul>
            <p className="mt-2 italic">Replace with real auth or remove this block in production.</p>
          </div>
        </div>

        {/* Footer removed for cleaner focused login page */}
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Admin Portal</h1>
            <p className="mt-2 text-sm text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
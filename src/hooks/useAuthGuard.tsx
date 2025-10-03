"use client";
import { useEffect } from 'react';
import { useAppSelector } from '@/hooks/useStore';
import { RootState } from '@/store';
import { useRouter, usePathname } from 'next/navigation';

/**
 * Redirects unauthenticated users away from protected admin routes.
 * Assumes presence of auth slice with status & user.
 */
export function useAuthGuard() {
  const { user, status } = useAppSelector((s: RootState) => s.auth);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Avoid redirect while auth still loading (if a future hydration step added)
    if (status === 'loading') return;
    if (!user) {
      // Preserve return path, but don't redirect if already on login page
      if (pathname === '/admin/login') return;
      const ret = encodeURIComponent(pathname || '/admin');
      router.replace(`/admin/login?next=${ret}`);
    }
  }, [user, status, router, pathname]);

  return { user, status, isAuthenticated: !!user };
}

export function withAuthGuard<P extends object>(Component: React.ComponentType<P>) {
  return function Guarded(props: P) {
    const { isAuthenticated, status } = useAuthGuard();
    if (!isAuthenticated || status === 'loading') {
      return <div className="p-8 text-sm text-gray-500">Checking authentication...</div>;
    }
    return <Component {...props} />;
  };
}

"use client";
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { logout } from '@/store/slices/authSlice';
import { RootState } from '@/store';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { LogOut, LayoutDashboard, FileText, Briefcase, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Always call useAppSelector (hooks must be called unconditionally)
  const authState = useAppSelector((s: RootState) => s.auth);
  
  // Only apply auth guard logic if NOT on login page
  const shouldCheckAuth = !isLoginPage;
  const { user, status } = authState;

  const handleLogout = async () => {
    await dispatch(logout()).unwrap();
    router.push('/admin/login');
  };

  // Handle authentication redirect for protected pages (not login page)
  useEffect(() => {
    if (shouldCheckAuth && status !== 'loading' && !user && pathname !== '/admin/login') {
      const ret = encodeURIComponent(pathname || '/admin');
      router.replace(`/admin/login?next=${ret}`);
    }
  }, [shouldCheckAuth, user, status, router, pathname]);

  // If this is the login page, render it without the admin layout
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Show loading state ONLY while actively checking authentication
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-accent-500 border-r-transparent"></div>
          <p className="mt-4 text-sm font-medium text-neutral-600">Authenticating...</p>
        </div>
      </div>
    );
  }

  // If no user at this point, useAuthGuard will handle redirect
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo / Brand */}
            <div className="flex items-center space-x-4">
              <Link 
                href="/admin" 
                className="text-xl font-bold text-neutral-800 hover:text-accent-600 transition-colors duration-200"
              >
                Admin Portal
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link
                href="/admin"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-1"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/admin/blogs"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-1"
              >
                <FileText className="h-4 w-4" />
                <span>Blogs</span>
              </Link>
              <Link
                href="/admin/case-studies"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-1"
              >
                <Briefcase className="h-4 w-4" />
                <span>Case Studies</span>
              </Link>
            </nav>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <span className="text-sm text-neutral-600 max-w-[200px] truncate">{user.email}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-accent-500 hover:bg-accent-600 shadow-sm hover:shadow-base hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-1"
                aria-label="Toggle mobile menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white shadow-lg">
            <div className="px-4 pt-3 pb-4 space-y-1">
              <Link
                href="/admin"
                className="flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors duration-150"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/admin/blogs"
                className="flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors duration-150"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FileText className="h-5 w-5" />
                <span>Blogs</span>
              </Link>
              <Link
                href="/admin/case-studies"
                className="flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors duration-150"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Briefcase className="h-5 w-5" />
                <span>Case Studies</span>
              </Link>
              <div className="border-t border-neutral-200 pt-3 mt-3">
                <div className="px-4 py-2 text-sm text-neutral-600 truncate">{user.email}</div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 shadow-sm transition-colors duration-200 mt-2"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-accent-500 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Skip to main content
        </a>
        <div id="main-content">{children}</div>
      </main>
    </div>
  );
}

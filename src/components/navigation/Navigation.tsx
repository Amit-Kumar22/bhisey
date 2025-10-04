'use client';

/**
 * Navigation Component - Sticky top navigation with scroll behavior and mega menus
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '../../lib/utils';
import { navigation } from '../../lib/constants';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/hooks/useStore';
import { logout } from '@/store/slices/authSlice';

interface NavigationProps {
  className?: string;
  transparent?: boolean;
  onMenuToggle?: (isOpen: boolean) => void;
}

export default function Navigation({
  className,
  transparent = false,
  onMenuToggle,
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { user } = useAppSelector(s => s.auth);
  const dispatch = useAppDispatch();

  // Handle scroll behavior for transparent navigation
  useEffect(() => {
    if (!transparent) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [transparent]);

  // Handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    onMenuToggle?.(newState);
    
    // Close any open dropdowns when closing mobile menu
    if (!newState) {
      setOpenDropdown(null);
    }
  };

  // Handle dropdown hover/focus
  const handleDropdownEnter = (itemLabel: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(itemLabel);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, itemLabel: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpenDropdown(openDropdown === itemLabel ? null : itemLabel);
    } else if (event.key === 'Escape') {
      setOpenDropdown(null);
    }
  };

  const getNavClasses = () => {
    const baseClasses = [
      'fixed',
      'top-0',
      'left-0',
      'right-0',
      'z-50',
      'transition-all',
      'duration-300',
      'ease-in-out',
    ];

    if (transparent && !isScrolled && !isMobileMenuOpen) {
      baseClasses.push('bg-transparent');
    } else {
      baseClasses.push('bg-white', 'shadow-md', 'border-b', 'border-gray-200');
    }

    return cn(...baseClasses, className);
  };

  const getLinkClasses = (isButton = false) => {
    const baseClasses = [
      'font-medium',
      'transition-colors',
      'duration-200',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-accent-500',
      'focus:ring-offset-2',
      'rounded-md',
      'px-3',
      'py-2',
    ];

    if (isButton) {
      baseClasses.push(
        'bg-accent-500',
        'text-white',
        'hover:bg-accent-600',
        'active:bg-accent-600'
      );
    } else {
      if (transparent && !isScrolled && !isMobileMenuOpen) {
        baseClasses.push('text-white', 'hover:text-accent-300');
      } else {
        baseClasses.push('text-gray-900', 'hover:text-accent-500');
      }
    }

    return cn(...baseClasses);
  };

  const handleLogout = useCallback(async () => {
    try {
      await dispatch(logout()).unwrap();
      // Hard redirect to ensure state cleared
      window.location.href = '/';
    } catch (e) {
      console.error('Logout failed', e);
    }
  }, [dispatch]);

  return (
    <nav className={getNavClasses()} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 rounded-md"
              aria-label="Bhisey Software - Home"
            >
              <Image
                src="/bhisey.png"
                alt="Bhisey Logo"
                width={120}
                height={40}
                priority
                className="h-8 w-auto"
                unoptimized
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.primary.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.label)}
                onMouseLeave={() => item.hasDropdown && handleDropdownLeave()}
              >
                {item.hasDropdown ? (
                  <button
                    className={cn(getLinkClasses(), 'flex items-center')}
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    onKeyDown={(e) => handleKeyDown(e, item.label)}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown 
                      className={cn(
                        'ml-1 h-4 w-4 transition-transform duration-200',
                        openDropdown === item.label && 'rotate-180'
                      )}
                    />
                  </button>
                ) : (
                  <Link href={item.href} className={getLinkClasses()}>
                    {item.label}
                  </Link>
                )}

                {/* Mega Menu Dropdown */}
                {item.hasDropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 focus:outline-none focus:bg-gray-50 focus:text-accent-500"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Secondary Navigation */}
            {navigation.secondary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={getLinkClasses(item.isButton)}
              >
                {item.label}
              </Link>
            ))}

            {/* Auth Links (Desktop) */}
            {!user && (
              <Link
                href="/admin/login"
                className={getLinkClasses(false)}
              >
                Login
              </Link>
            )}
            {user && (
              <>
                <Link
                  href="/admin"
                  className={getLinkClasses(false)}
                >
                  Admin
                </Link>
                <button
                  onClick={handleLogout}
                  className={cn(getLinkClasses(false), 'text-sm')}
                  type="button"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className={cn(
                'p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2',
                transparent && !isScrolled && !isMobileMenuOpen
                  ? 'text-white hover:text-accent-300'
                  : 'text-gray-900 hover:text-accent-500'
              )}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navigation.primary.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-accent-500 focus:outline-none focus:text-accent-500 flex items-center justify-between"
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        aria-expanded={openDropdown === item.label}
                      >
                        {item.label}
                        <ChevronDown 
                          className={cn(
                            'h-4 w-4 transition-transform duration-200',
                            openDropdown === item.label && 'rotate-180'
                          )}
                        />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4 space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-accent-500 focus:outline-none focus:text-accent-500"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setOpenDropdown(null);
                                onMenuToggle?.(false);
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-accent-500 focus:outline-none focus:text-accent-500"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onMenuToggle?.(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Secondary Navigation */}
              <div className="pt-4 border-t border-gray-200">
                {navigation.secondary.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'block px-3 py-2 text-base font-medium rounded-md',
                      item.isButton
                        ? 'bg-accent-500 text-white hover:bg-accent-600 mx-3'
                        : 'text-gray-900 hover:text-accent-500'
                    )}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onMenuToggle?.(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Auth Links (Mobile) */}
                {!user && (
                  <Link
                    href="/admin/login"
                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-accent-500"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onMenuToggle?.(false);
                    }}
                  >
                    Login
                  </Link>
                )}
                {user && (
                  <>
                    <Link
                      href="/admin"
                      className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-accent-500"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onMenuToggle?.(false);
                      }}
                    >
                      Admin
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                        onMenuToggle?.(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-accent-500"
                      type="button"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
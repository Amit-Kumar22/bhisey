/**
 * Container Component - Provides consistent max-width and padding
 */

import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'narrow';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Container({
  children,
  size = 'lg',
  padding = 'md',
  className,
}: ContainerProps) {
  const getSizeClass = () => {
    const sizeMap = {
      xs: 'max-w-[520px]',
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-[980px]',
      xl: 'max-w-[1180px]',
      '2xl': 'max-w-screen-xl',
      narrow: 'max-w-[860px]',
      full: 'max-w-full',
    } as const;
    return sizeMap[size];
  };

  const getPaddingClass = () => {
    const paddingMap = {
      none: '',
      sm: 'px-4',
      md: 'px-4 sm:px-6 lg:px-8',
      lg: 'px-6 sm:px-8 lg:px-12',
    };
    return paddingMap[padding];
  };

  return (
    <div className={cn('mx-auto', getSizeClass(), getPaddingClass(), className)}>
      {children}
    </div>
  );
}
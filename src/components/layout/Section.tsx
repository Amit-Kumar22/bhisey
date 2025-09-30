/**
 * Section Component - Provides consistent vertical spacing and optional backgrounds
 */

import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionProps {
  children: ReactNode;
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  background?: 'default' | 'light' | 'accent' | 'dark';
  className?: string;
  id?: string;
  as?: 'section' | 'div' | 'article' | 'aside';
}

export default function Section({
  children,
  spacing = 'lg',
  background = 'default',
  className,
  id,
  as: Component = 'section',
}: SectionProps) {
  const getSpacingClass = () => {
    const spacingMap = {
      none: '',
      sm: 'py-8',
      md: 'py-12',
      lg: 'py-16 md:py-20',
      xl: 'py-20 md:py-28',
    };
    return spacingMap[spacing];
  };

  const getBackgroundClass = () => {
    const backgroundMap = {
      default: '',
      light: 'bg-background-light',
      accent: 'bg-accent-500 text-white',
      dark: 'bg-accent-600 text-white',
    };
    return backgroundMap[background];
  };

  return (
    <Component 
      id={id}
      className={cn(
        getSpacingClass(),
        getBackgroundClass(),
        className
      )}
    >
      {children}
    </Component>
  );
}
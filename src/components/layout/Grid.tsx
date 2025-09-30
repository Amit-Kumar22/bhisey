/**
 * Grid Component - Flexible grid layout for showcasing content
 */

import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface GridProps {
  children: ReactNode;
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function Grid({
  children,
  columns = { xs: 1, sm: 2, md: 3, lg: 4 },
  gap = 'md',
  className,
}: GridProps) {
  const getGridClasses = () => {
    const classes = ['grid'];
    
    // Grid columns for different breakpoints
    if (columns.xs) classes.push(`grid-cols-${columns.xs}`);
    if (columns.sm) classes.push(`sm:grid-cols-${columns.sm}`);
    if (columns.md) classes.push(`md:grid-cols-${columns.md}`);
    if (columns.lg) classes.push(`lg:grid-cols-${columns.lg}`);
    if (columns.xl) classes.push(`xl:grid-cols-${columns.xl}`);
    
    return classes.join(' ');
  };

  const getGapClass = () => {
    const gapMap = {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
      xl: 'gap-12',
    };
    return gapMap[gap];
  };

  return (
    <div className={cn(getGridClasses(), getGapClass(), className)}>
      {children}
    </div>
  );
}
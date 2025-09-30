/**
 * Utility Navigation Component - Phone, Email, Social Links
 */

import Link from 'next/link';
import { Phone, Mail, Linkedin } from 'lucide-react';
import { cn } from '../../lib/utils';
import { navigation } from '../../lib/constants';

// Custom X (Twitter) icon component since Lucide doesn't have the new X logo
const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface UtilityNavigationProps {
  className?: string;
  variant?: 'horizontal' | 'vertical';
  showLabels?: boolean;
  iconSize?: 'sm' | 'md' | 'lg';
}

export default function UtilityNavigation({
  className,
  variant = 'horizontal',
  showLabels = false,
  iconSize = 'md',
}: UtilityNavigationProps) {
  const getIconComponent = (iconName: string) => {
    const iconProps = {
      className: cn(
        iconSize === 'sm' && 'h-4 w-4',
        iconSize === 'md' && 'h-5 w-5',
        iconSize === 'lg' && 'h-6 w-6'
      ),
    };

    switch (iconName) {
      case 'Phone':
        return <Phone {...iconProps} />;
      case 'Mail':
        return <Mail {...iconProps} />;
      case 'Linkedin':
        return <Linkedin {...iconProps} />;
      case 'Twitter':
        return <XIcon {...iconProps} />;
      default:
        return null;
    }
  };

  const getContainerClasses = () => {
    return cn(
      'flex items-center',
      variant === 'horizontal' ? 'space-x-4' : 'flex-col space-y-2',
      className
    );
  };

  const getLinkClasses = () => {
    return cn(
      'inline-flex items-center text-gray-600 hover:text-accent-500 transition-colors duration-200',
      'focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 rounded-md p-1',
      showLabels && variant === 'horizontal' && 'space-x-2',
      showLabels && variant === 'vertical' && 'space-x-2'
    );
  };

  return (
    <nav className={getContainerClasses()} aria-label="Utility navigation">
      {navigation.utility.map((item) => {
        const icon = getIconComponent(item.icon);
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={getLinkClasses()}
            aria-label={item.label}
            {...(item.href.startsWith('mailto:') || item.href.startsWith('tel:')
              ? {}
              : { target: '_blank', rel: 'noopener noreferrer' }
            )}
          >
            {icon}
            {showLabels && (
              <span className="text-sm font-medium">
                {item.label}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
/**
 * Navigation Components Unit Tests
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navigation, UtilityNavigation } from './index';

// Mock Next.js Link component
jest.mock('next/link', () => {
  const MockLink = ({ children, href, ...props }: any) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

// Mock scroll behavior
Object.defineProperty(window, 'scrollY', {
  writable: true,
  value: 0,
});

const mockScrollTo = jest.fn();
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: mockScrollTo,
});

describe('Navigation Components', () => {
  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, 'scrollY', { value: 0 });
    jest.clearAllMocks();
  });

  describe('Navigation Component', () => {
    test('renders main navigation with correct structure', () => {
      render(<Navigation />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByLabelText('Main navigation')).toBeInTheDocument();
      expect(screen.getByLabelText('Bhisey Software - Home')).toBeInTheDocument();
      expect(screen.getByText('Why Bhisey')).toBeInTheDocument();
      expect(screen.getByText('Services')).toBeInTheDocument();
      expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });

    test('shows mobile menu button on small screens', () => {
      render(<Navigation />);
      
      const mobileMenuButton = screen.getByLabelText('Toggle mobile menu');
      expect(mobileMenuButton).toBeInTheDocument();
      expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'false');
    });

    test('toggles mobile menu when button is clicked', async () => {
      const user = userEvent.setup();
      const mockOnMenuToggle = jest.fn();
      
      render(<Navigation onMenuToggle={mockOnMenuToggle} />);
      
      const mobileMenuButton = screen.getByLabelText('Toggle mobile menu');
      
      await user.click(mobileMenuButton);
      
      expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'true');
      expect(mockOnMenuToggle).toHaveBeenCalledWith(true);
      
      await user.click(mobileMenuButton);
      
      expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'false');
      expect(mockOnMenuToggle).toHaveBeenCalledWith(false);
    });

    test('opens dropdown menu on hover for desktop', async () => {
      render(<Navigation />);
      
      const whyBhiseyButton = screen.getByText('Why Bhisey');
      
      fireEvent.mouseEnter(whyBhiseyButton);
      
      await waitFor(() => {
        expect(screen.getByText('Partner by Design')).toBeInTheDocument();
        expect(screen.getByText('Product Driven Engagement')).toBeInTheDocument();
      });
    });

    test('closes dropdown menu on mouse leave with delay', async () => {
      jest.useFakeTimers();
      
      render(<Navigation />);
      
      const whyBhiseyButton = screen.getByText('Why Bhisey');
      
      fireEvent.mouseEnter(whyBhiseyButton);
      
      await waitFor(() => {
        expect(screen.getByText('Partner by Design')).toBeInTheDocument();
      });
      
      fireEvent.mouseLeave(whyBhiseyButton);
      
      // Should still be visible immediately
      expect(screen.getByText('Partner by Design')).toBeInTheDocument();
      
      // Fast forward timer
      jest.advanceTimersByTime(200);
      
      await waitFor(() => {
        expect(screen.queryByText('Partner by Design')).not.toBeInTheDocument();
      });
      
      jest.useRealTimers();
    });

    test('toggles dropdown with keyboard navigation', async () => {
      const user = userEvent.setup();
      
      render(<Navigation />);
      
      const whyBhiseyButton = screen.getByText('Why Bhisey');
      
      // Focus and press Enter
      whyBhiseyButton.focus();
      await user.keyboard('{Enter}');
      
      expect(whyBhiseyButton).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByText('Partner by Design')).toBeInTheDocument();
      
      // Press Escape to close
      await user.keyboard('{Escape}');
      
      expect(whyBhiseyButton).toHaveAttribute('aria-expanded', 'false');
    });

    test('applies transparent styles when transparent prop is true and not scrolled', () => {
      render(<Navigation transparent />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('bg-transparent');
    });

    test('changes styles when scrolled with transparent navigation', () => {
      render(<Navigation transparent />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('bg-transparent');
      
      // Mock scroll event
      Object.defineProperty(window, 'scrollY', { value: 100 });
      fireEvent.scroll(window);
      
      // Should add background and shadow
      expect(nav).toHaveClass('bg-white', 'shadow-md');
    });

    test('closes mobile menu when navigation link is clicked', async () => {
      const user = userEvent.setup();
      
      render(<Navigation />);
      
      // Open mobile menu
      const mobileMenuButton = screen.getByLabelText('Toggle mobile menu');
      await user.click(mobileMenuButton);
      
      expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'true');
      
      // Click the Contact Us link in the mobile menu (second occurrence)
      const contactLinks = screen.getAllByText('Contact Us');
      expect(contactLinks).toHaveLength(2);
      
      // Click the mobile version (second one in the array)
      await user.click(contactLinks[1]);
      
      expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'false');
    });

    test('applies custom className', () => {
      render(<Navigation className="custom-nav" />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('custom-nav');
    });

    test('handles keyboard navigation with Space key', async () => {
      const user = userEvent.setup();
      
      render(<Navigation />);
      
      const servicesButton = screen.getByText('Services');
      
      servicesButton.focus();
      await user.keyboard(' ');
      
      expect(servicesButton).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('UtilityNavigation Component', () => {
    test('renders utility navigation with default props', () => {
      render(<UtilityNavigation />);
      
      expect(screen.getByLabelText('Utility navigation')).toBeInTheDocument();
      expect(screen.getByLabelText('Phone')).toBeInTheDocument();
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
      expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
      expect(screen.getByLabelText('X (Twitter)')).toBeInTheDocument();
    });

    test('shows labels when showLabels is true', () => {
      render(<UtilityNavigation showLabels />);
      
      expect(screen.getByText('Phone')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByText('LinkedIn')).toBeInTheDocument();
      expect(screen.getByText('X (Twitter)')).toBeInTheDocument();
    });

    test('applies vertical layout when variant is vertical', () => {
      render(<UtilityNavigation variant="vertical" />);
      
      const nav = screen.getByLabelText('Utility navigation');
      expect(nav).toHaveClass('flex-col', 'space-y-2');
    });

    test('applies horizontal layout by default', () => {
      render(<UtilityNavigation />);
      
      const nav = screen.getByLabelText('Utility navigation');
      expect(nav).toHaveClass('space-x-4');
      expect(nav).not.toHaveClass('flex-col');
    });

    test('applies different icon sizes', () => {
      const { rerender } = render(<UtilityNavigation iconSize="sm" />);
      
      // Test small icons (can't easily test icon size in JSDOM, but component renders)
      expect(screen.getByLabelText('Phone')).toBeInTheDocument();
      
      rerender(<UtilityNavigation iconSize="lg" />);
      expect(screen.getByLabelText('Phone')).toBeInTheDocument();
    });

    test('applies custom className', () => {
      render(<UtilityNavigation className="custom-utility-nav" />);
      
      const nav = screen.getByLabelText('Utility navigation');
      expect(nav).toHaveClass('custom-utility-nav');
    });

    test('sets correct href attributes for different link types', () => {
      render(<UtilityNavigation />);
      
      const phoneLink = screen.getByLabelText('Phone');
      const emailLink = screen.getByLabelText('Email');
      const linkedinLink = screen.getByLabelText('LinkedIn');
      
      expect(phoneLink).toHaveAttribute('href', 'tel:+1234567890');
      expect(emailLink).toHaveAttribute('href', 'mailto:hello@Bhisey.com');
      expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/company/Bhisey');
      expect(linkedinLink).toHaveAttribute('target', '_blank');
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('does not add target="_blank" for tel: and mailto: links', () => {
      render(<UtilityNavigation />);
      
      const phoneLink = screen.getByLabelText('Phone');
      const emailLink = screen.getByLabelText('Email');
      
      expect(phoneLink).not.toHaveAttribute('target');
      expect(emailLink).not.toHaveAttribute('target');
    });
  });

  describe('Accessibility', () => {
    test('navigation has proper ARIA labels and roles', () => {
      render(<Navigation />);
      
      expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Main navigation');
      
      const dropdownButtons = screen.getAllByRole('button').filter(button => 
        button.hasAttribute('aria-haspopup')
      );
      
      dropdownButtons.forEach(button => {
        expect(button).toHaveAttribute('aria-haspopup', 'true');
        expect(button).toHaveAttribute('aria-expanded');
      });
    });

    test('mobile menu button has proper accessibility attributes', () => {
      render(<Navigation />);
      
      const mobileMenuButton = screen.getByLabelText('Toggle mobile menu');
      expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'false');
    });

    test('utility navigation links have proper labels', () => {
      render(<UtilityNavigation />);
      
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).toHaveAttribute('aria-label');
      });
    });

    test('focus management works correctly', async () => {
      const user = userEvent.setup();
      
      render(<Navigation />);
      
      const whyBhiseyButton = screen.getByText('Why Bhisey');
      
      await user.tab();
      await user.tab();
      
      // Should be able to focus navigation elements
      expect(document.activeElement).not.toBe(document.body);
    });
  });
});
import { ReactNode, ElementType } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  containerWidth?: 'full' | 'default' | 'narrow' | 'wide';
  background?: 'none' | 'light' | 'dark' | 'primary';
  spacing?: 'none' | 'small' | 'medium' | 'large';
  containerClassName?: string;
}

const containerWidths = {
  full: 'w-full',
  default: 'max-w-7xl',
  narrow: 'max-w-5xl',
  wide: 'max-w-[1920px]',
};

const backgroundStyles = {
  none: '',
  light: 'bg-gray-50',
  dark: 'bg-gray-900 text-white',
  primary: 'bg-blue-600 text-white',
};

const spacingStyles = {
  none: 'py-0',
  small: 'py-8',
  medium: 'py-16',
  large: 'py-24',
};

export default function Section({
  children,
  className,
  as: Component = 'section',
  containerWidth = 'default',
  background = 'none',
  spacing = 'medium',
  containerClassName,
}: SectionProps) {
  return (
    <Component
      className={cn('w-full', backgroundStyles[background], className)}
    >
      <div
        className={cn(
          'mx-auto px-4 sm:px-6 lg:px-8',
          containerWidths[containerWidth],
          spacingStyles[spacing],
          containerClassName
        )}
      >
        {children}
      </div>
    </Component>
  );
}

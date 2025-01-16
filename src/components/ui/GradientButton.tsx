import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function GradientButton({
  children,
  className,
  ...props
}: GradientButtonProps) {
  return (
    <button
      className={cn(
        'relative p-[1px] rounded-full group overflow-hidden',
        className
      )}
      {...props}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-dodger-blue-400 via-dodger-blue-600 to-dodger-blue-400 opacity-100 transition-all duration-300 ease-in-out' />
      <div className='absolute inset-[1px] bg-gray-900 rounded-full transition-all duration-300'>
        <div className='absolute inset-0 bg-gradient-to-r from-dodger-blue-400 via-dodger-blue-600 to-dodger-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300' />
      </div>
      <div className='relative bg-transparent px-12 py-1 rounded-full transition-all duration-300'>
        <span className='bg-gradient-to-r from-dodger-blue-400 to-dodger-blue-600 text-transparent bg-clip-text font-medium group-hover:bg-none group-hover:text-gray-50 transition-all duration-300'>
          {children}
        </span>
      </div>
    </button>
  );
}

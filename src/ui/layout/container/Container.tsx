import type { HTMLAttributes, ReactNode } from 'react';

import cn from '@/utils/cn';

const sizeClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  full: 'max-w-full'
};

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: keyof typeof sizeClasses;
}

const Container = ({ children, size = 'lg', className, ...props }: ContainerProps) => (
  <div className={cn('mx-auto w-full px-4', sizeClasses[size], className)} {...props}>
    {children}
  </div>
);

export default Container;

import type { HTMLAttributes, ReactNode } from 'react';

import cn from '@/utils/cn';

const variantClasses = {
  default: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  destructive: 'bg-destructive text-destructive-foreground',
  outline: 'border border-border text-foreground'
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: keyof typeof variantClasses;
}

const Badge = ({ children, variant = 'default', className, ...props }: BadgeProps) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
      variantClasses[variant],
      className
    )}
    {...props}
  >
    {children}
  </span>
);

export default Badge;

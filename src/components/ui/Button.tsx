import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import cn from '@/utils/cn';

const variantClasses = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline'
};

const baseClasses =
  'inline-flex items-center justify-center px-4 py-2 rounded-[var(--radius)] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none';

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: keyof typeof variantClasses;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
  disabled,
  ...props
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    aria-disabled={disabled}
    className={cn(
      baseClasses,
      variantClasses[variant],
      disabled && 'opacity-50 cursor-not-allowed',
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;

import { createElement, type ElementType, type HTMLAttributes, type ReactNode } from 'react';

import cn from '@/utils/cn';

const variantClasses = {
  h1: 'text-4xl lg:text-5xl font-semibold tracking-tight',
  h2: 'text-3xl lg:text-4xl font-semibold tracking-tight',
  h3: 'text-2xl lg:text-3xl font-semibold tracking-tight',
  h4: 'text-xl lg:text-2xl font-semibold tracking-tight',
  body: 'text-base text-foreground',
  muted: 'text-sm text-muted-foreground',
  gradient: 'text-gradient text-3xl font-semibold'
};

type TypographyVariant = keyof typeof variantClasses;

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: TypographyVariant;
  as?: ElementType;
}

const defaultTags: Record<TypographyVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  muted: 'p',
  gradient: 'p'
};

const Typography = ({ children, variant = 'body', as, className, ...props }: TypographyProps) => {
  const Tag = as ?? defaultTags[variant];

  return createElement(
    Tag,
    {
      className: cn(variantClasses[variant], className),
      ...props
    },
    children
  );
};

export default Typography;

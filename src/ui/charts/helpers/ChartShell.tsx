import type { ReactNode } from 'react';
import { ResponsiveContainer } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/widgets/card/Card';
import cn from '@/utils/cn';

interface ChartShellProps {
  title?: string;
  description?: string;
  height?: number;
  className?: string;
  children: ReactNode;
}

const ChartShell = ({ title, description, height = 300, className, children }: ChartShellProps) => (
  <Card className={cn('w-full', className)}>
    {(title || description) && (
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
    )}
    <CardContent className={title || description ? 'pt-4' : undefined}>
      <div style={{ height }} className="w-full">
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

export default ChartShell;

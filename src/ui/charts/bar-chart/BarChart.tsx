import { Bar, CartesianGrid, BarChart as RechartsBarChart, Tooltip, XAxis, YAxis } from 'recharts';

import ChartShell from '@/ui/charts/helpers/ChartShell';
import { chartAxisProps, chartTheme, chartTooltipStyle } from '@/ui/charts/helpers/chart-theme';
import type { ChartCardProps } from '@/ui/charts/helpers/chart-types';

const BarChart = ({ title, description, data, height, className }: ChartCardProps) => (
  <ChartShell title={title} description={description} height={height} className={className}>
    <RechartsBarChart data={data}>
      <CartesianGrid stroke={chartTheme.border} strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="label" {...chartAxisProps} />
      <YAxis {...chartAxisProps} />
      <Tooltip contentStyle={chartTooltipStyle} />
      <Bar dataKey="value" fill={chartTheme.primary} radius={[4, 4, 0, 0]} />
    </RechartsBarChart>
  </ChartShell>
);

export default BarChart;

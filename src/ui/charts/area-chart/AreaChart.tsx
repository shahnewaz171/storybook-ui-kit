import {
  Area,
  CartesianGrid,
  AreaChart as RechartsAreaChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

import ChartShell from '@/ui/charts/helpers/ChartShell';
import { chartAxisProps, chartTheme, chartTooltipStyle } from '@/ui/charts/helpers/chart-theme';
import type { ChartCardProps } from '@/ui/charts/helpers/chart-types';

const AreaChart = ({ title, description, data, height, className }: ChartCardProps) => (
  <ChartShell title={title} description={description} height={height} className={className}>
    <RechartsAreaChart data={data}>
      <CartesianGrid stroke={chartTheme.border} strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="label" {...chartAxisProps} />
      <YAxis {...chartAxisProps} />
      <Tooltip contentStyle={chartTooltipStyle} />
      <Area
        type="monotone"
        dataKey="value"
        stroke={chartTheme.primary}
        fill={chartTheme.primary}
        fillOpacity={0.2}
        strokeWidth={2}
      />
    </RechartsAreaChart>
  </ChartShell>
);

export default AreaChart;

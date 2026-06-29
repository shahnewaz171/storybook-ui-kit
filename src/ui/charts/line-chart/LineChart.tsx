import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

import ChartShell from '@/ui/charts/helpers/ChartShell';
import { chartAxisProps, chartTheme, chartTooltipStyle } from '@/ui/charts/helpers/chart-theme';
import type { ChartCardProps } from '@/ui/charts/helpers/chart-types';

const LineChart = ({ title, description, data, height, className }: ChartCardProps) => (
  <ChartShell title={title} description={description} height={height} className={className}>
    <RechartsLineChart data={data}>
      <CartesianGrid stroke={chartTheme.border} strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="label" {...chartAxisProps} />
      <YAxis {...chartAxisProps} />
      <Tooltip contentStyle={chartTooltipStyle} />
      <Line
        type="monotone"
        dataKey="value"
        stroke={chartTheme.primary}
        strokeWidth={2}
        dot={{ fill: chartTheme.primary, r: 4 }}
        activeDot={{ r: 6 }}
      />
    </RechartsLineChart>
  </ChartShell>
);

export default LineChart;

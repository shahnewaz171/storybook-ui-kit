export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface ChartCardProps {
  title?: string;
  description?: string;
  data: ChartDataPoint[];
  height?: number;
  className?: string;
}

export const chartTheme = {
  primary: 'var(--sui-primary)',
  secondary: 'var(--sui-info)',
  success: 'var(--sui-success)',
  muted: 'var(--sui-muted-foreground)',
  border: 'var(--sui-border)',
  card: 'var(--sui-card)',
  foreground: 'var(--sui-foreground)'
} as const;

export const chartTooltipStyle = {
  backgroundColor: 'var(--sui-popover)',
  border: '1px solid var(--sui-border)',
  borderRadius: 'var(--sui-radius)',
  color: 'var(--sui-popover-foreground)'
} as const;

export const chartAxisProps = {
  stroke: chartTheme.muted,
  tick: { fill: chartTheme.muted, fontSize: 12 },
  tickLine: false,
  axisLine: { stroke: chartTheme.border }
} as const;

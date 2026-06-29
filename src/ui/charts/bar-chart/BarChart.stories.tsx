import type { Meta, StoryObj } from '@storybook/react-vite';

import { monthlyRevenue } from '@/ui/charts/helpers/sample-data';

import BarChart from './BarChart';

const meta = {
  title: 'Charts/BarChart',
  component: BarChart,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  args: {
    data: monthlyRevenue,
    title: 'Monthly revenue',
    description: 'Revenue by month'
  }
} satisfies Meta<typeof BarChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutHeader: Story = {
  args: {
    title: undefined,
    description: undefined
  }
};

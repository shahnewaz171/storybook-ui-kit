import type { Meta, StoryObj } from '@storybook/react-vite';

import { monthlyRevenue } from '@/ui/charts/helpers/sample-data';

import AreaChart from './AreaChart';

const meta = {
  title: 'Charts/AreaChart',
  component: AreaChart,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  args: {
    data: monthlyRevenue,
    title: 'Monthly revenue',
    description: 'Filled area view of revenue'
  }
} satisfies Meta<typeof AreaChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutHeader: Story = {
  args: {
    title: undefined,
    description: undefined
  }
};

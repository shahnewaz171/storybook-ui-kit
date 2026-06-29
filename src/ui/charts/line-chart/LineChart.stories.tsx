import type { Meta, StoryObj } from '@storybook/react-vite';

import { monthlyRevenue } from '@/ui/charts/helpers/sample-data';

import LineChart from './LineChart';

const meta = {
  title: 'Charts/LineChart',
  component: LineChart,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs'],
  args: {
    data: monthlyRevenue,
    title: 'Monthly revenue',
    description: 'Revenue trend over time'
  }
} satisfies Meta<typeof LineChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutHeader: Story = {
  args: {
    title: undefined,
    description: undefined
  }
};

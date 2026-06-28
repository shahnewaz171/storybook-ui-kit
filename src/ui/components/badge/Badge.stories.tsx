import type { Meta, StoryObj } from '@storybook/react-vite';

import Badge from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['default', 'secondary', 'destructive', 'outline']
    }
  },
  args: {
    children: 'Badge'
  }
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Error'
  }
};

export const Outline: Story = {
  args: {
    variant: 'outline'
  }
};

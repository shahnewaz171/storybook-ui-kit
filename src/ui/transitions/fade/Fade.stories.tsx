import type { Meta, StoryObj } from '@storybook/react-vite';

import { FadeDemo } from './Fade';

const meta = {
  title: 'Transitions/Fade',
  component: FadeDemo,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FadeDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Toggle: Story = {};

export const SlowFade: Story = {
  args: {
    duration: 0.8
  }
};

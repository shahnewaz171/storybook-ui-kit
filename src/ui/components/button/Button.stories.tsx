import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';

import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'destructive', 'outline', 'ghost', 'link']
    },
    disabled: { control: 'boolean' }
  },
  args: {
    children: 'Button',
    onClick: fn()
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete'
  }
};

export const Outline: Story = {
  args: {
    variant: 'outline'
  }
};

export const Ghost: Story = {
  args: {
    variant: 'ghost'
  }
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Learn more'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Clickable: Story = {
  args: {
    children: 'Click me'
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /click me/i });

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  }
};

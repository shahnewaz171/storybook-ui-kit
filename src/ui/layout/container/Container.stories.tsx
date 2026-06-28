import type { Meta, StoryObj } from '@storybook/react-vite';

import Container from './Container';

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg', 'xl', 'full']
    }
  },
  args: {
    size: 'lg'
  }
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

const DemoContent = () => (
  <div className="rounded-(--radius) border border-border bg-muted p-4 text-center text-foreground">
    Container content
  </div>
);

export const Small: Story = {
  args: {
    size: 'sm',
    children: <DemoContent />
  }
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: <DemoContent />
  }
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: <DemoContent />
  }
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: <DemoContent />
  }
};

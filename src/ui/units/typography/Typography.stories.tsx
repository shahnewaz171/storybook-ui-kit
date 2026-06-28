import type { Meta, StoryObj } from '@storybook/react-vite';

import Typography from './Typography';

const meta = {
  title: 'Units/Typography',
  component: Typography,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeadingOne: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1'
  }
};

export const HeadingTwo: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2'
  }
};

export const HeadingThree: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3'
  }
};

export const HeadingFour: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4'
  }
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body text for paragraphs and general content.'
  }
};

export const Muted: Story = {
  args: {
    variant: 'muted',
    children: 'Muted supporting text.'
  }
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    children: 'Gradient headline'
  }
};

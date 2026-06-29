import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentProps, useState } from 'react';

import Editor from './Editor';

const sampleContent =
  '<p>Hello <strong>Storybook</strong>!</p><p>Use the toolbar to format rich text content.</p>';

const StatefulEditor = (
  args: Omit<ComponentProps<typeof Editor>, 'onChange'> & { value?: string }
) => {
  const [value, setValue] = useState(args.value ?? '');

  return (
    <div className="w-xl">
      <Editor {...args} value={value} onChange={setValue} />
    </div>
  );
};

const meta = {
  title: 'Forms/Editor',
  component: StatefulEditor,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    name: 'content',
    value: '',
    placeholder: 'Write a short description...'
  }
} satisfies Meta<typeof StatefulEditor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithContent: Story = {
  args: {
    value: sampleContent
  }
};

export const ReadOnly: Story = {
  args: {
    value: sampleContent,
    readOnly: true
  }
};

export const Disabled: Story = {
  args: {
    value: sampleContent,
    disabled: true
  }
};

export const WithError: Story = {
  args: {
    value: '',
    error: 'Please enter at least 20 characters'
  }
};

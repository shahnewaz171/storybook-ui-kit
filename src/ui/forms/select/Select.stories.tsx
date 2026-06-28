import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentProps, useState } from 'react';

import MuiThemeProvider from '@/providers/MuiThemeProvider';

import Select from './Select';

const options = [
  { label: 'Design', value: 'design' },
  { label: 'Engineering', value: 'engineering' },
  { label: 'Marketing', value: 'marketing' }
];

const StatefulSelect = (
  args: Omit<ComponentProps<typeof Select>, 'value' | 'onChange'> & { value?: string }
) => {
  const [value, setValue] = useState(args.value ?? '');

  return (
    <div className="w-80">
      <Select {...args} value={value} onChange={setValue} />
    </div>
  );
};

const meta = {
  title: 'Forms/Select',
  component: StatefulSelect,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    (Story, { globals }) => (
      <MuiThemeProvider mode={globals.theme === 'dark' ? 'dark' : 'light'}>
        <Story />
      </MuiThemeProvider>
    )
  ],
  args: {
    label: 'Department',
    name: 'department',
    options,
    placeholder: 'Choose a department'
  }
} satisfies Meta<typeof StatefulSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: 'engineering'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'design'
  }
};

export const WithError: Story = {
  args: {
    error: 'Please select a department'
  }
};

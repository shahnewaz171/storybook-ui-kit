import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ChangeEvent, type ComponentProps, useState } from 'react';

import Input from './Input';

const StatefulInput = (args: ComponentProps<typeof Input>) => {
  const [value, setValue] = useState(args.value ?? '');

  return (
    <div className="w-80">
      <Input
        {...args}
        value={value}
        onChange={
          ((event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)) as () => void
        }
      />
    </div>
  );
};

const meta = {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: (args) => <StatefulInput {...args} />,
  argTypes: {
    disabled: { control: 'boolean' }
  },
  args: {
    name: 'demo',
    value: ''
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type something...'
  }
};

export const WithLabel: Story = {
  args: {
    label: 'Email address',
    name: 'email',
    type: 'email',
    placeholder: 'you@example.com'
  }
};

export const WithError: Story = {
  args: {
    label: 'Password',
    name: 'password',
    type: 'password',
    error: 'Password must be at least 8 characters'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    name: 'disabled',
    value: 'Cannot edit',
    disabled: true
  }
};

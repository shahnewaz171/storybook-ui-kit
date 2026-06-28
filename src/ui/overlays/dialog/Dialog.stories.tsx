import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import MuiThemeProvider from '@/providers/MuiThemeProvider';

import Dialog from './Dialog';

const meta = {
  title: 'Overlays/Dialog',
  component: Dialog,
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
    onConfirm: fn()
  }
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Delete item',
    description: 'This action cannot be undone. Are you sure you want to continue?',
    triggerLabel: 'Delete item',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel'
  }
};

export const WithCustomContent: Story = {
  args: {
    title: 'Edit profile',
    triggerLabel: 'Edit profile',
    confirmLabel: 'Save',
    children: (
      <p className="text-sm text-muted-foreground mt-2">
        Update your profile details and save changes.
      </p>
    )
  }
};

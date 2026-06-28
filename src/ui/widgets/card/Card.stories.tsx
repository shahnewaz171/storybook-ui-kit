import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '@/ui/components/button/Button';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './Card';

const DefaultCard = () => (
  <Card className="w-80">
    <CardHeader>
      <CardTitle>Project status</CardTitle>
      <CardDescription>Overview of your current workspace activity.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm">3 tasks due today, 12 completed this week.</p>
    </CardContent>
  </Card>
);

const CardWithFooter = () => (
  <Card className="w-80">
    <CardHeader>
      <CardTitle>Invite teammates</CardTitle>
      <CardDescription>Share access with your team members.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">Send an invite link to collaborate.</p>
    </CardContent>
    <CardFooter className="gap-2">
      <Button variant="outline">Cancel</Button>
      <Button>Send invite</Button>
    </CardFooter>
  </Card>
);

const meta = {
  title: 'Widget/Card',
  component: DefaultCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof DefaultCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFooter: Story = {
  render: () => <CardWithFooter />
};

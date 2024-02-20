import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Input/Select',
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Select option',
  },
};

export const Warning: Story = {
  args: {
    label: 'Delete now',
  },
};

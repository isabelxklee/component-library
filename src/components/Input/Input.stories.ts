import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    label: 'Input label',
    placeholder: 'Enter if you dare...',
  },
};

export const Warning: Story = {
  args: {
    label: 'Delete now',
    placeholder: 'DANGER',
  },
};

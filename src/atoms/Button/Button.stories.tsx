import type { Meta, StoryObj } from '@storybook/react';

import { BUTTON_SIZES, BUTTON_VARIANTS, Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Action',
    variant: BUTTON_VARIANTS.PRIMARY,
    size: BUTTON_SIZES.MD,
    fullWidth: false,
    disabled: false
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: Object.values(BUTTON_VARIANTS)
    },
    size: {
      control: 'inline-radio',
      options: Object.values(BUTTON_SIZES)
    },
    onClick: {
      action: 'clicked'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Danger: Story = {
  args: {
    variant: BUTTON_VARIANTS.DANGER,
    children: 'Delete'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled'
  }
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Continue'
  }
};

import type { Meta, StoryObj } from '@storybook/react';

import { OVERLAY_VARIANTS, Overlay } from './Overlay';

const meta = {
  title: 'Molecules/Overlay',
  component: Overlay,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    isOpen: true,
    variant: OVERLAY_VARIANTS.DEFAULT
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: Object.values(OVERLAY_VARIANTS)
    },
    onClick: {
      action: 'clicked'
    }
  }
} satisfies Meta<typeof Overlay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Open: Story = {};

export const Closed: Story = {
  args: {
    isOpen: false
  }
};

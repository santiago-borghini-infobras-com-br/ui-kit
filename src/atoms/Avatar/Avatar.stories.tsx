import type { Meta, StoryObj } from '@storybook/react';

import { AVATAR_SIZES, Avatar } from './Avatar';

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    size: AVATAR_SIZES.MD,
    children: 'SB'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: Object.values(AVATAR_SIZES)
    },
    src: {
      control: 'text'
    },
    alt: {
      control: 'text'
    },
    children: {
      control: 'text'
    }
  }
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Initials: Story = {};

export const Small: Story = {
  args: {
    size: AVATAR_SIZES.SM,
    children: 'SM'
  }
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/100?img=12',
    alt: 'Avatar image',
    children: undefined
  }
};

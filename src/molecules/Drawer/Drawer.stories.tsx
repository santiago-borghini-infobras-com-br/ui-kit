import type { Meta, StoryObj } from '@storybook/react';

import { DRAWER_SIDES, Drawer } from './Drawer';

const meta = {
  title: 'Molecules/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    isOpen: true,
    side: DRAWER_SIDES.RIGHT,
    title: 'Panel',
    children: 'Contenido del panel lateral'
  },
  argTypes: {
    side: {
      control: 'inline-radio',
      options: Object.values(DRAWER_SIDES)
    },
    headerActions: {
      table: {
        disable: true
      }
    }
  },
  render: (args) => <Drawer {...args} headerActions={<button type="button">Cerrar</button>} />
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Right: Story = {};

export const Left: Story = {
  args: {
    side: DRAWER_SIDES.LEFT
  }
};

export const Closed: Story = {
  args: {
    isOpen: false
  }
};

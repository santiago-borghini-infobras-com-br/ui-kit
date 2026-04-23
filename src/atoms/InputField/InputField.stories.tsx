import type { Meta, StoryObj } from '@storybook/react';

import { INPUTFIELD_SIZES, INPUTFIELD_STATES, INPUTFIELD_VARIANTS, InputField } from './InputField';

const meta = {
  title: 'Atoms/InputField',
  component: InputField,
  tags: ['autodocs'],
  args: {
    id: 'storybook-input',
    label: 'Email',
    placeholder: 'email@dominio.com',
    helperText: 'Texto auxiliar',
    size: INPUTFIELD_SIZES.MD,
    state: INPUTFIELD_STATES.DEFAULT,
    variant: INPUTFIELD_VARIANTS.DEFAULT
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: Object.values(INPUTFIELD_VARIANTS)
    },
    size: {
      control: 'inline-radio',
      options: Object.values(INPUTFIELD_SIZES)
    },
    state: {
      control: 'inline-radio',
      options: Object.values(INPUTFIELD_STATES)
    }
  }
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    variant: INPUTFIELD_VARIANTS.ERROR,
    helperText: 'El email no es valido'
  }
};

export const Disabled: Story = {
  args: {
    state: INPUTFIELD_STATES.DISABLED,
    helperText: 'Campo deshabilitado'
  }
};

export const Small: Story = {
  args: {
    size: INPUTFIELD_SIZES.SM,
    label: 'Usuario',
    id: 'storybook-input-sm',
    placeholder: 'usuario'
  }
};

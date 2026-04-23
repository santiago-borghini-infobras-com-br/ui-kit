import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import styles from './InputField.module.css';
import { INPUTFIELD_SIZES, INPUTFIELD_STATES, INPUTFIELD_VARIANTS, InputField } from './InputField';

describe('InputField', () => {
  it('renders label and helper text', () => {
    render(<InputField id="name" label="Nombre" helperText="Texto auxiliar" />);

    expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
    expect(screen.getByText('Texto auxiliar')).toBeInTheDocument();
  });

  it('applies error classes to input and helper text', () => {
    render(
      <InputField
        id="email"
        label="Email"
        helperText="Email invalido"
        variant={INPUTFIELD_VARIANTS.ERROR}
      />
    );

    const input = screen.getByLabelText('Email');
    const helper = screen.getByText('Email invalido');

    expect(input).toHaveClass(styles.error);
    expect(helper).toHaveClass(styles.helperTextError);
  });

  it('applies size class and disabled state', () => {
    render(
      <InputField
        id="username"
        label="Usuario"
        size={INPUTFIELD_SIZES.SM}
        state={INPUTFIELD_STATES.DISABLED}
      />
    );

    const input = screen.getByLabelText('Usuario');

    expect(input).toHaveClass(styles.sm);
    expect(input).toHaveClass(styles.disabled);
    expect(input).toBeDisabled();
  });
});

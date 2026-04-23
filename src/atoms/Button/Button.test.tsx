import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import styles from './Button.module.css';
import { BUTTON_SIZES, BUTTON_VARIANTS, Button } from './Button';

describe('Button', () => {
  it('renders button content', () => {
    render(<Button>Guardar</Button>);

    expect(screen.getByRole('button', { name: 'Guardar' })).toBeInTheDocument();
  });

  it('applies variant, size and fullWidth classes', () => {
    render(
      <Button variant={BUTTON_VARIANTS.DANGER} size={BUTTON_SIZES.SM} fullWidth>
        Eliminar
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Eliminar' });

    expect(button).toHaveClass(styles.button);
    expect(button).toHaveClass(styles.danger);
    expect(button).toHaveClass(styles.sm);
    expect(button).toHaveClass(styles.fullWidth);
  });

  it('respects disabled state and blocks onClick', () => {
    const onClick = vi.fn();

    render(
      <Button disabled onClick={onClick}>
        Deshabilitado
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Deshabilitado' });

    expect(button).toBeDisabled();
    expect(button).toHaveClass(styles.disabled);

    fireEvent.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });
});

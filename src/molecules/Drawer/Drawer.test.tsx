import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import styles from './Drawer.module.css';
import { DRAWER_SIDES, Drawer } from './Drawer';

describe('Drawer', () => {
  it('does not render when isOpen is false', () => {
    render(<Drawer isOpen={false}>Contenido</Drawer>);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders title, actions and content when open', () => {
    render(
      <Drawer isOpen title="Menu" headerActions={<button type="button">Cerrar</button>}>
        Contenido principal
      </Drawer>
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Menu' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cerrar' })).toBeInTheDocument();
    expect(screen.getByText('Contenido principal')).toBeInTheDocument();
  });

  it('applies side classes', () => {
    render(
      <Drawer isOpen side={DRAWER_SIDES.LEFT}>
        Contenido
      </Drawer>
    );

    const drawer = screen.getByRole('dialog');

    expect(drawer).toHaveClass(styles.drawer);
    expect(drawer).toHaveClass(styles.left);
  });
});

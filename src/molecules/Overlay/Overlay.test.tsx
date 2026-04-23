import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import styles from './Overlay.module.css';
import { OVERLAY_VARIANTS, Overlay } from './Overlay';

describe('Overlay', () => {
  it('does not render when isOpen is false', () => {
    const { container } = render(<Overlay isOpen={false} />);

    expect(container.firstChild).toBeNull();
  });

  it('renders when open and triggers onClick', () => {
    const onClick = vi.fn();
    const { container } = render(
      <Overlay isOpen onClick={onClick} variant={OVERLAY_VARIANTS.DEFAULT} />
    );

    const overlay = container.firstElementChild as HTMLElement;

    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass(styles.overlay);
    expect(overlay).toHaveAttribute('data-variant', OVERLAY_VARIANTS.DEFAULT);

    fireEvent.click(overlay);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

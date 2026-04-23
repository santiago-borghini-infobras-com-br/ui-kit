import { fireEvent, render, screen } from '@testing-library/react';
import { useRef } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { useClickOutside } from './useClickOutside';

interface TestComponentProps {
  onOutsideClick?: () => void;
}

const TestComponent = ({ onOutsideClick }: TestComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, onOutsideClick);

  return (
    <div>
      <div data-testid="inside" ref={ref}>
        Dentro
      </div>
      <button type="button" data-testid="outside">
        Fuera
      </button>
    </div>
  );
};

describe('useClickOutside', () => {
  it('calls handler when user clicks outside', () => {
    const handler = vi.fn();

    render(<TestComponent onOutsideClick={handler} />);

    fireEvent.mouseDown(screen.getByTestId('outside'));

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('does not call handler when user clicks inside', () => {
    const handler = vi.fn();

    render(<TestComponent onOutsideClick={handler} />);

    fireEvent.mouseDown(screen.getByTestId('inside'));

    expect(handler).not.toHaveBeenCalled();
  });

  it('supports touch interactions outside the element', () => {
    const handler = vi.fn();

    render(<TestComponent onOutsideClick={handler} />);

    fireEvent.touchStart(screen.getByTestId('outside'));

    expect(handler).toHaveBeenCalledTimes(1);
  });
});

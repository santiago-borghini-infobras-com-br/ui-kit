import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import styles from './Avatar.module.css';
import { AVATAR_SIZES, Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders an image when src is provided', () => {
    render(<Avatar src="/avatar.png" alt="Avatar de usuario" />);

    expect(screen.getByRole('img', { name: 'Avatar de usuario' })).toBeInTheDocument();
  });

  it('renders fallback children when src is not provided', () => {
    render(<Avatar>SB</Avatar>);

    expect(screen.getByText('SB')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('applies avatar and size classes', () => {
    render(<Avatar size={AVATAR_SIZES.SM}>SB</Avatar>);

    const avatar = screen.getByText('SB');

    expect(avatar).toHaveClass(styles.avatar);
    expect(avatar).toHaveClass(styles.sm);
  });
});

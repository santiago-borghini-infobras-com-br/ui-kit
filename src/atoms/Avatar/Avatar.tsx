import type { ReactNode } from 'react';
import styles from './Avatar.module.css';

export const AVATAR_SIZES = {
  SM: 'sm',
  MD: 'md'
} as const;

export type AvatarSize = (typeof AVATAR_SIZES)[keyof typeof AVATAR_SIZES];

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  children?: ReactNode;
}

/**
 * Avatar Core
 *
 * Muestra una imagen de usuario o iniciales.
 */
export const Avatar = ({ src, alt, size = AVATAR_SIZES.MD, children }: AvatarProps) => {
  const className = [styles.avatar, styles[size]].filter(Boolean).join(' ');

  if (src) {
    return (
      <span className={className}>
        <img src={src} alt={alt} className={styles.image} />
      </span>
    );
  }

  return <span className={className}>{children}</span>;
};

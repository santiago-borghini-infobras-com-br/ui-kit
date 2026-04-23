import type { MouseEventHandler } from 'react';
import styles from './Overlay.module.css';

export const OVERLAY_VARIANTS = {
  DEFAULT: 'default'
} as const;

export type OverlayVariant = (typeof OVERLAY_VARIANTS)[keyof typeof OVERLAY_VARIANTS];

export interface OverlayProps {
  isOpen?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  variant?: OverlayVariant;
}

/**
 * Overlay Core
 *
 * Capa semitransparente a pantalla completa, usada para modales o drawers.
 */
export const Overlay = ({ isOpen, onClick, variant = OVERLAY_VARIANTS.DEFAULT }: OverlayProps) => {
  if (!isOpen) return null;

  return <div className={styles.overlay} data-variant={variant} onClick={onClick} />;
};

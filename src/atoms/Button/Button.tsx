import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  DANGER: 'danger'
} as const;

export const BUTTON_SIZES = {
  SM: 'sm',
  MD: 'md'
} as const;

export const BUTTON_STATES = {
  DEFAULT: 'default'
} as const;

export type ButtonVariant = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
export type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
export type ButtonState = (typeof BUTTON_STATES)[keyof typeof BUTTON_STATES];

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
}

/**
 * Button Core
 *
 * Componente atómico de botón basado en design tokens.
 * No contiene lógica de negocio, solo comportamiento y estilo de presentación.
 */
export const Button = ({
  variant = BUTTON_VARIANTS.PRIMARY,
  size = BUTTON_SIZES.MD,
  fullWidth = false,
  disabled = false,
  loading = false,
  children,
  ...rest
}: ButtonProps) => {
  const variantClassName = styles[variant];
  const sizeClassName = styles[size];

  const className = [
    styles.button,
    variantClassName,
    sizeClassName,
    fullWidth ? styles.fullWidth : null,
    loading ? styles.loading : null
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" className={className} disabled={disabled} {...rest}>
      {loading ? 'Loading...' : children}
    </button>
  );
};

import type { InputHTMLAttributes, ReactNode } from 'react';
import styles from './InputField.module.css';

export const INPUTFIELD_VARIANTS = {
  DEFAULT: 'default',
  ERROR: 'error'
} as const;

export const INPUTFIELD_SIZES = {
  SM: 'sm',
  MD: 'md'
} as const;

export const INPUTFIELD_STATES = {
  DEFAULT: 'default',
  DISABLED: 'disabled'
} as const;

export type InputFieldVariant = (typeof INPUTFIELD_VARIANTS)[keyof typeof INPUTFIELD_VARIANTS];
export type InputFieldSize = (typeof INPUTFIELD_SIZES)[keyof typeof INPUTFIELD_SIZES];
export type InputFieldState = (typeof INPUTFIELD_STATES)[keyof typeof INPUTFIELD_STATES];

export interface InputFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  id?: string;
  label?: ReactNode;
  variant?: InputFieldVariant;
  size?: InputFieldSize;
  state?: InputFieldState;
  helperText?: ReactNode;
}

/**
 * InputField Core
 *
 * Campo de texto atómico basado en design tokens.
 * No contiene lógica de negocio ni validación de formularios.
 */
export const InputField = ({
  id,
  label,
  variant = INPUTFIELD_VARIANTS.DEFAULT,
  size = INPUTFIELD_SIZES.MD,
  state = INPUTFIELD_STATES.DEFAULT,
  helperText,
  ...rest
}: InputFieldProps) => {
  const inputClassNames = [
    styles.input,
    styles[variant],
    styles[size],
    state === INPUTFIELD_STATES.DISABLED ? styles.disabled : null
  ]
    .filter(Boolean)
    .join(' ');

  const helperClassNames = [
    styles.helperText,
    variant === INPUTFIELD_VARIANTS.ERROR ? styles.helperTextError : null
  ]
    .filter(Boolean)
    .join(' ');

  const isDisabled = state === INPUTFIELD_STATES.DISABLED;

  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.inputWrapper}>
        <input id={id} className={inputClassNames} disabled={isDisabled} {...rest} />
      </div>

      {helperText && <p className={helperClassNames}>{helperText}</p>}
    </div>
  );
};

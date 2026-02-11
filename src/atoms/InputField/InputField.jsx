import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.css';
import {
  INPUTFIELD_VARIANTS,
  INPUTFIELD_SIZES,
  INPUTFIELD_STATES
} from './InputField.constants';

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
}) => {
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
        <input
          id={id}
          className={inputClassNames}
          disabled={isDisabled}
          {...rest}
        />
      </div>

      {helperText && <p className={helperClassNames}>{helperText}</p>}
    </div>
  );
};

InputField.propTypes = {
  /** Identificador del input. También se usa para asociar la etiqueta. */
  id: PropTypes.string,
  /** Etiqueta visible encima del campo. */
  label: PropTypes.node,
  /** Variante visual del campo (`default`, `error`). Debe usar INPUTFIELD_VARIANTS. */
  variant: PropTypes.oneOf(Object.values(INPUTFIELD_VARIANTS)),
  /** Tamaño del campo (`sm`, `md`). Debe usar INPUTFIELD_SIZES. */
  size: PropTypes.oneOf(Object.values(INPUTFIELD_SIZES)),
  /** Estado del campo (`default`, `disabled`). Debe usar INPUTFIELD_STATES. */
  state: PropTypes.oneOf(Object.values(INPUTFIELD_STATES)),
  /** Texto auxiliar debajo del campo. */
  helperText: PropTypes.node
};


import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
import { BUTTON_VARIANTS, BUTTON_SIZES } from './Button.constants';

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
  children,
  ...rest
}) => {
  const variantClassName = styles[variant];
  const sizeClassName = styles[size];

  const className = [
    styles.button,
    variantClassName,
    sizeClassName,
    fullWidth ? styles.fullWidth : null,
    disabled ? styles.disabled : null
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Variante visual del botón. Debe usar BUTTON_VARIANTS. */
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  /** Tamaño del botón. Debe usar BUTTON_SIZES. */
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  /** Hace que el botón ocupe el 100% del ancho del contenedor. */
  fullWidth: PropTypes.bool,
  /** Deshabilita la interacción del botón. */
  disabled: PropTypes.bool,
  /** Contenido del botón. */
  children: PropTypes.node
};


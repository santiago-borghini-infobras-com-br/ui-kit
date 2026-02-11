import React from 'react';
import PropTypes from 'prop-types';
import styles from './Overlay.module.css';
import { OVERLAY_VARIANTS } from './Overlay.constants';

/**
 * Overlay Core
 *
 * Capa semitransparente a pantalla completa, usada para modales o drawers.
 */
export const Overlay = ({ isOpen, onClick, variant = OVERLAY_VARIANTS.DEFAULT }) => {
  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      data-variant={variant}
      onClick={onClick}
    />
  );
};

Overlay.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(Object.values(OVERLAY_VARIANTS))
};


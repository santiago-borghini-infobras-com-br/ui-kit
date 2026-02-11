import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.css';
import { AVATAR_SIZES } from './Avatar.constants';

/**
 * Avatar Core
 *
 * Muestra una imagen de usuario o iniciales.
 */
export const Avatar = ({ src, alt, size = AVATAR_SIZES.MD, children }) => {
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

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(Object.values(AVATAR_SIZES)),
  children: PropTypes.node
};


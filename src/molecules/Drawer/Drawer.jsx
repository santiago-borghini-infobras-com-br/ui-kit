import React from 'react';
import PropTypes from 'prop-types';
import styles from './Drawer.module.css';
import { DRAWER_SIDES } from './Drawer.constants';

/**
 * Drawer Core
 *
 * Panel lateral deslizante. No gestiona estado interno.
 */
export const Drawer = ({
  isOpen,
  side = DRAWER_SIDES.RIGHT,
  title,
  headerActions,
  children
}) => {
  if (!isOpen) return null;

  const className = [styles.drawer, styles[side]].filter(Boolean).join(' ');

  return (
    <aside className={className} role="dialog" aria-modal="true">
      {(title || headerActions) && (
        <header className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {headerActions}
        </header>
      )}
      <div className={styles.content}>{children}</div>
    </aside>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  side: PropTypes.oneOf(Object.values(DRAWER_SIDES)),
  title: PropTypes.node,
  headerActions: PropTypes.node,
  children: PropTypes.node
};


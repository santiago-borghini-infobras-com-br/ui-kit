# Cursor Instructions - UI Kit

## Objetivo
Este documento proporciona instrucciones para Cursor (o cualquier asistente de código) para generar componentes en el package `ui-kit` de manera consistente.

El UI Kit contiene **componentes Core**, que son:
- Reutilizables y universales
- Independientes del negocio o lógica de la app
- Basados en **design tokens** para colores, padding, tipografía y bordes
- Versionados y gobernados por un equipo reducido

---

## 1️⃣ Estructura de los Componentes
Cada componente debe seguir esta estructura estricta:

```
/Componente
  Componente.jsx          # Lógica del componente
  Componente.module.css   # Estilos con variables CSS (tokens)
  Componente.constants.js # Variantes, tamaños, estados posibles
  index.js                # Exporta componente y constantes
```

- **Atoms:** componentes más pequeños y básicos
- **Molecules:** combinaciones de atoms
- **index.js:** exporta todos los componentes principales

---

## 2️⃣ Uso de Design Tokens
- Todos los estilos deben usar variables CSS definidas en `design-tokens`.
- Nunca usar valores hardcodeados (ej. `#fff`, `8px`)
- Ejemplo de Button Core en CSS Module:

```css
.button {
  border-radius: var(--button-radius);
  background: var(--button-primary-background);
  color: var(--button-primary-text);
}
```

---

## 3️⃣ Props y Validación
- Variantes, tamaños y estados deben definirse en `Component.constants.js`.
- Se deben validar usando **PropTypes**.
- Ejemplo Button.constants.js:
```javascript
export const BUTTON_VARIANTS = { PRIMARY: 'primary', DANGER: 'danger' };
export const BUTTON_SIZES = { SM: 'sm', MD: 'md' };
```
- Ejemplo Button.jsx:
```javascript
Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  children: PropTypes.node
};
```

---

## 4️⃣ Componentes permitidos
- Button
- Input / TextField
- Dropdown
- Avatar
- Badge
- Card
- Modal
- Tooltip
- Collapse / Accordion
- Spinner
- Tabs
- Alert

> No generar componentes específicos de negocio o API. Esos se construyen sobre Core.

---

## 5️⃣ Buenas prácticas para Cursor
1. No incluir lógica de negocio en Core.
2. Siempre usar CSS Modules + variables de tokens.
3. Documentar props, variantes y tamaños.
4. Seguir la estructura de carpetas estrictamente.
5. Mantener consistencia visual y semántica.
6. Lazy loading solo en la app, no en UI Kit.
7. Validar variantes y tamaños con PropTypes.

---

## 6️⃣ Ejemplo de patrón completo - Button
```javascript
// Button.constants.js
export const BUTTON_VARIANTS = { PRIMARY: 'primary', DANGER: 'danger' };
export const BUTTON_SIZES = { SM: 'sm', MD: 'md' };

// Button.module.css
.button { border-radius: var(--button-radius); cursor: pointer; }
.primary { background: var(--button-primary-background); color: var(--button-primary-text); }
.primary:hover { background: var(--button-primary-background-hover); }
.sm { padding: var(--button-padding-sm); }
.md { padding: var(--button-padding-md); }

// Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
import { BUTTON_VARIANTS, BUTTON_SIZES } from './Button.constants';

export const Button = ({ variant = BUTTON_VARIANTS.PRIMARY, size = BUTTON_SIZES.MD, children, ...props }) => {
  return (
    <button className={`${styles.button} ${styles[variant]} ${styles[size]}`} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  children: PropTypes.node
};
```

---

## 7️⃣ Versionado y Gobernanza
- Solo personas autorizadas pueden modificar UI Kit.
- Versionado semántico:
  - **Patch:** correcciones visuales
  - **Minor:** nuevo componente
  - **Major:** cambios que rompen props o API
- Todo cambio debe mantener consistencia de tokens y estructura.


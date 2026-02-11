# UI Kit – Biblioteca de Componentes Core para React

Este proyecto es un **UI Kit** de componentes Core para aplicaciones React.  
Todos los estilos se basan en **design tokens** (paquete `design-tokens`) y se publican como librería reutilizable (npm package).

---

## Objetivo

- Proveer componentes **reutilizables, universales y sin lógica de negocio**.
- Garantizar consistencia visual usando **CSS Modules** + variables CSS de tokens.
- Definir una estructura clara para escalar con nuevos componentes.

---

## Estructura del proyecto

- `src/atoms/`
  - Componentes atómicos básicos (por ejemplo: `Button`, `InputField`).
- `src/molecules/`
  - Componentes que combinan varios átomos (por crear en el futuro).
- Cada componente se organiza en una carpeta con esta estructura:

  ```text
  /Componente
    Componente.jsx          # Lógica y JSX del componente
    Componente.module.css   # Estilos usando CSS Modules + design tokens
    Componente.constants.js # Variantes, tamaños y estados posibles
    index.js                # Re-exporta componente y constantes
  ```

- `src/index.js`
  - Punto de entrada del package: exporta todos los componentes y sus constantes públicas.

---

## Design Tokens

Todos los estilos visuales deben usar **variables CSS** provenientes del package `design-tokens`.  
No se permiten valores hardcodeados (ej. `#fff`, `8px`, `16px`, etc.).

Ejemplo:

```css
.button {
  border-radius: var(--button-radius);
  background: var(--button-primary-background);
  color: var(--button-primary-text);
}
```

> La configuración concreta de los tokens (tema, colores, tipografía) se define en la app que consume el UI Kit.

---

## Componentes iniciales

### Button (Atom)

- Variantes:
  - `BUTTON_VARIANTS.PRIMARY` → `'primary'`
  - `BUTTON_VARIANTS.DANGER` → `'danger'`
- Tamaños:
  - `BUTTON_SIZES.SM` → `'sm'`
  - `BUTTON_SIZES.MD` → `'md'`
- Props principales:
  - `variant`: `oneOf(Object.values(BUTTON_VARIANTS))`
  - `size`: `oneOf(Object.values(BUTTON_SIZES))`
  - `fullWidth`: `bool`
  - `disabled`: `bool`
  - `children`: `node`

### InputField (Atom)

- Variantes:
  - `INPUTFIELD_VARIANTS.DEFAULT` → `'default'`
  - `INPUTFIELD_VARIANTS.ERROR` → `'error'`
- Tamaños:
  - `INPUTFIELD_SIZES.SM` → `'sm'`
  - `INPUTFIELD_SIZES.MD` → `'md'`
- Estados:
  - `INPUTFIELD_STATES.DEFAULT` → `'default'`
  - `INPUTFIELD_STATES.DISABLED` → `'disabled'`
- Props principales:
  - `id`: `string`
  - `label`: `node`
  - `variant`: `oneOf(Object.values(INPUTFIELD_VARIANTS))`
  - `size`: `oneOf(Object.values(INPUTFIELD_SIZES))`
  - `state`: `oneOf(Object.values(INPUTFIELD_STATES))`
  - `helperText`: `node`

---

## Uso de PropTypes y constantes

- Todas las variantes, tamaños y estados se definen en `*.constants.js`.
- Los componentes validan sus props con **PropTypes**, usando **solo** las constantes exportadas.

Ejemplo (Button):

```javascript
Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  children: PropTypes.node
};
```

---

## Scripts disponibles

En la raíz del proyecto:

- **Build de la librería**

  ```bash
  npm run build
  ```

  Genera la salida en `dist/` con:
  - CommonJS: `dist/ui-kit.cjs`
  - ES Module: `dist/ui-kit.es.js`

- **Dev / ejemplo local**

  Puedes usar Vite para desarrollar y probar el UI Kit junto al ejemplo:

  ```bash
  npm run dev
  ```

---

## Ejemplo de uso

Consulta `example/App.jsx` para ver cómo se importan y utilizan los componentes desde el propio package.

Ejemplo simplificado:

```jsx
import React from 'react';
import {
  Button,
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  InputField,
  INPUTFIELD_VARIANTS,
  INPUTFIELD_SIZES,
  INPUTFIELD_STATES
} from 'ui-kit';

export const App = () => (
  <>
    <Button
      variant={BUTTON_VARIANTS.PRIMARY}
      size={BUTTON_SIZES.MD}
    >
      Primary
    </Button>

    <InputField
      id="email"
      label="Email"
      variant={INPUTFIELD_VARIANTS.ERROR}
      size={INPUTFIELD_SIZES.MD}
      state={INPUTFIELD_STATES.DEFAULT}
      helperText="El email no es válido."
    />
  </>
);
```

---

## Buenas prácticas del proyecto

- No incluir **lógica de negocio** en los componentes Core.
- Usar siempre **CSS Modules + variables CSS de tokens** para cualquier estilo visual.
- Documentar props, variantes, tamaños y estados en el código y en este README.
- Mantener consistencia visual y semántica entre todos los componentes.
- Agregar nuevos componentes respetando la estructura descrita en `cursor_instructions.md`.


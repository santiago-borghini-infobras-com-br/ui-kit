import React from 'react';
import {
  Button,
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  InputField,
  INPUTFIELD_VARIANTS,
  INPUTFIELD_SIZES,
  INPUTFIELD_STATES
} from '../src';

/**
 * Ejemplo de uso del UI Kit.
 *
 * Este archivo no forma parte del bundle publicado, solo sirve como
 * referencia de integración y para pruebas manuales durante el desarrollo.
 */
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1.5rem'
      }}
    >
      <h1>UI Kit - Ejemplo de uso</h1>

      <section>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button
            variant={BUTTON_VARIANTS.PRIMARY}
            size={BUTTON_SIZES.SM}
          >
            Primary SM
          </Button>
          <Button
            variant={BUTTON_VARIANTS.PRIMARY}
            size={BUTTON_SIZES.MD}
          >
            Primary MD
          </Button>
          <Button
            variant={BUTTON_VARIANTS.DANGER}
            size={BUTTON_SIZES.MD}
          >
            Danger MD
          </Button>
          <Button
            variant={BUTTON_VARIANTS.DANGER}
            size={BUTTON_SIZES.MD}
            disabled
          >
            Disabled
          </Button>
        </div>
      </section>

      <section>
        <h2>InputField</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
          <InputField
            id="name"
            label="Nombre"
            variant={INPUTFIELD_VARIANTS.DEFAULT}
            size={INPUTFIELD_SIZES.MD}
            placeholder="Escribe tu nombre"
            helperText="Este es un helper text de ejemplo."
          />

          <InputField
            id="email"
            label="Email"
            variant={INPUTFIELD_VARIANTS.ERROR}
            size={INPUTFIELD_SIZES.MD}
            placeholder="email@ejemplo.com"
            helperText="El email no es válido."
          />

          <InputField
            id="username"
            label="Usuario"
            variant={INPUTFIELD_VARIANTS.DEFAULT}
            size={INPUTFIELD_SIZES.SM}
            placeholder="usuario"
            state={INPUTFIELD_STATES.DISABLED}
            helperText="Campo deshabilitado."
          />
        </div>
      </section>
    </div>
  );
};


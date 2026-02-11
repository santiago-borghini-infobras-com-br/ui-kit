import { useEffect } from 'react';

/**
 * Hook core para cerrar paneles al hacer click fuera.
 *
 * @param {React.RefObject<HTMLElement>} ref - Ref del contenedor que debe permanecer abierto.
 * @param {() => void} handler - Función que se ejecuta cuando se hace click/touch fuera.
 */
export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const handleEvent = (event) => {
      const el = ref?.current;
      if (!el) return;

      if (el.contains(event.target)) {
        return;
      }

      handler?.();
    };

    document.addEventListener('mousedown', handleEvent);
    document.addEventListener('touchstart', handleEvent);

    return () => {
      document.removeEventListener('mousedown', handleEvent);
      document.removeEventListener('touchstart', handleEvent);
    };
  }, [ref, handler]);
};


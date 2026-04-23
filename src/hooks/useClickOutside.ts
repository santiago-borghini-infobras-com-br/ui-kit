import { useEffect } from 'react';
import type { RefObject } from 'react';

/**
 * Hook core para cerrar paneles al hacer click fuera.
 *
 * @param {React.RefObject<T>} ref - Ref del contenedor que debe permanecer abierto.
 * @param {() => void} handler - Función que se ejecuta cuando se hace click/touch fuera.
 */
export const useClickOutside = <T extends HTMLElement>(ref: RefObject<T>, handler?: () => void) => {
  useEffect(() => {
    const handleEvent = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current;
      if (!el) return;

      const target = event.target as Node | null;

      if (target && el.contains(target)) {
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

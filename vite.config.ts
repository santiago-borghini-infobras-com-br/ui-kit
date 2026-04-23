/// <reference types="vitest/config" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    include: ['src/**/*.test.{ts,tsx}']
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'UiKit',
      formats: ['es', 'cjs'],
      fileName: (format) => `ui-kit.${format === 'cjs' ? 'cjs' : 'es.js'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'design-tokens'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});


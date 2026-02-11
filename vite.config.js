import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'UiKit',
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


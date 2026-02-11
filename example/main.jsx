import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';

// Tokens locales de desarrollo (no se commitean).
// Crea el archivo `example/tokens.css` copiando desde `tokens.example.css`
// y ajusta los valores según tus necesidades.
import './tokens.css';

// Si tu paquete de design tokens incluye CSS global real,
// también puedes importarlo aquí, por ejemplo:
// import 'design-tokens/dist/tokens.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}


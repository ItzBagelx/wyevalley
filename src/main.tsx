import {StrictMode} from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;

if (rootElement.innerHTML.trim() === '<!--app-html-->' || rootElement.innerHTML.trim() === '') {
  // Development mode: empty or only placeholder
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  // Production mode: pre-rendered HTML exists
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

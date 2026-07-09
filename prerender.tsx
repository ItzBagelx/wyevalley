import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
// @ts-ignore - App is a JSX component
import App from './src/App';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, p);

async function prerender() {
  const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');

  const appHtml = renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );

  const html = template.replace(`<!--app-html-->`, appHtml);

  fs.writeFileSync(toAbsolute('dist/index.html'), html);
  console.log('Prerendered index.html successfully!');
}

prerender().catch((e) => {
  console.error('Failed to prerender:', e);
  process.exit(1);
});

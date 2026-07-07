import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

async function prerender() {
  const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8');
  
  // Load the server entry we just built
  const { render } = await import('./dist/server/entry-server.js');

  const appHtml = render();

  // Inject into placeholder
  const html = template.replace(`<!--app-html-->`, appHtml);

  fs.writeFileSync(toAbsolute('dist/static/index.html'), html);
  console.log('Prerendered index.html successfully!');
}

prerender().catch((e) => {
  console.error('Failed to prerender:', e);
  process.exit(1);
});

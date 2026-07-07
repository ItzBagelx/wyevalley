import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

async function prerender() {
  const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
  
  // Find the server entry file (Cloudflare Pages might hash it and put it in /assets)
  let serverEntryPath = 'dist-server/entry-server.js';
  if (!fs.existsSync(toAbsolute(serverEntryPath))) {
    const assetsDir = toAbsolute('dist-server/assets');
    if (fs.existsSync(assetsDir)) {
      const files = fs.readdirSync(assetsDir);
      const entryFile = files.find(f => f.startsWith('entry-server') && f.endsWith('.js'));
      if (entryFile) {
        serverEntryPath = `dist-server/assets/${entryFile}`;
      }
    }
  }

  // Load the server entry we just built
  const { render } = await import('./' + serverEntryPath);

  const appHtml = render();

  // Inject into placeholder
  const html = template.replace(`<!--app-html-->`, appHtml);

  fs.writeFileSync(toAbsolute('dist/index.html'), html);
  console.log('Prerendered index.html successfully!');
}

prerender().catch((e) => {
  console.error('Failed to prerender:', e);
  process.exit(1);
});

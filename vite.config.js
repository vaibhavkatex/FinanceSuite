import { defineConfig } from 'vite';
import { resolve, relative, dirname } from 'path';
import { readdirSync, statSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getHtmlInputs(dir, fileList = {}) {
  const files = readdirSync(dir);
  files.forEach(file => {
    if (file === 'node_modules' || file === 'dist' || file.startsWith('.')) return;
    const filePath = resolve(dir, file);
    if (statSync(filePath).isDirectory()) {
      getHtmlInputs(filePath, fileList);
    } else if (file === 'index.html') {
      const relativePath = relative(resolve(__dirname), filePath);
      const key = relativePath.replace(/\\/g, '/').replace(/\/index\.html$/, '').replace(/^index\.html$/, 'main');
      fileList[key || 'main'] = filePath;
    }
  });
  return fileList;
}

// Middleware to resolve clean URLs (e.g., /about -> /about/index.html)
const cleanUrls = () => ({
  name: 'clean-urls',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = req.url.split('?')[0];
      if (url !== '/' && !url.includes('.')) {
        const potentialPath = resolve(__dirname, url.slice(1), 'index.html');
        if (existsSync(potentialPath)) {
          req.url = url.endsWith('/') ? url + 'index.html' : url + '/index.html';
        }
      }
      next();
    });
  }
});

export default defineConfig({
  plugins: [cleanUrls()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: getHtmlInputs(resolve(__dirname))
    }
  }
});



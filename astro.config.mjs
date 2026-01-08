import { defineConfig } from 'astro/config';

export default defineConfig({
  srcDir: 'src',
  integrations: [],
  output: 'static',
  build: {
    format: 'directory'
  },
  typescript: {
    strict: true
  },
});



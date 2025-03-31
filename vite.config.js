import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    lib: {
      entry: './js/main.js',
      name: 'SwingUI',
      fileName: 'swingui'
    }
  },
  publicDir: 'public',
  server: {
    port: 3000
  },
  plugins: [
    tailwindcss(),
  ]

});
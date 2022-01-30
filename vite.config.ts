/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const projectRootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      // alias need to be absolute path
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/jest.setup.ts',
  },
});

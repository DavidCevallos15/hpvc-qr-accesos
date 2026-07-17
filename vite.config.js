import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        administrativo: resolve(import.meta.dirname, 'administrativo.html'),
        operativo: resolve(import.meta.dirname, 'operativo.html'),
      },
    },
  },
  server: {
    host: true,
    port: 5173,
  },
})

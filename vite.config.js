import { defineConfig } from 'vite'

// Static HTML site configuration for Wanderly Travel
export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
  },
  server: {
    open: true,
  },
})

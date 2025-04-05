import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  server: {
    host: '0.0.0.0',   // <-- This allows external devices to connect
    port: 5173,         // Optional: default port
    strictPort: true    // Optional: prevent Vite from switching ports automatically
  }
})

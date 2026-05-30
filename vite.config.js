import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Root user site (ariwisnu.github.io) is served from "/".
export default defineConfig({
  base: '/',
  plugins: [react()],
})

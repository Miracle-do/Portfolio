import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Déployé sur https://miracle-do.github.io/Portfolio/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
})

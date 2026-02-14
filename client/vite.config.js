import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Yeh line add karein

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Yeh plugin activate karein
  ],
})
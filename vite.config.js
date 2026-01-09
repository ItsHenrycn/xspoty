
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Use this one
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})

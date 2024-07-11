import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
      __VITE_QUOTES_API_KEY__: JSON.stringify(process.env.VITE_QUOTES_API_KEY),
  },
})

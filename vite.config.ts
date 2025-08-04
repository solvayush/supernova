import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "build"
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
      "@components": path.resolve(__dirname, "./app/components"),
      "@api": path.resolve(__dirname, "./app/api"),
      "@utils": path.resolve(__dirname, "./app/utils"),
      "@hooks": path.resolve(__dirname, "./app/hooks")
    }
  }
})

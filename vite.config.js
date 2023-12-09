import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // proxy: {
  //   "/api": {
  //     target: "https://api.quran.com",
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/api/, ""),
  //   },
  // },
});


// vite.config.js
  

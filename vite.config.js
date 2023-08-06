import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  loader: { ".js": "jsx" },
  server: {
    port: 3000,
    strictPort: true,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
      "/api-background": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
      "/ssr": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "src/assets"),
      },
      {
        find: "@store",
        replacement: path.resolve(__dirname, "src/store"),
      },
    ],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://49.50.167.18",
        changeOrigin: true,
      },
    },
  },
});

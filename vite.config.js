// vite.config.js
import Inspect from "vite-plugin-inspect";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Inspect(),
    checker({
      eslint: {
        lintCommand: 'eslint "./**/*.{js,jsx}"',
      },
    }),
  ],
});

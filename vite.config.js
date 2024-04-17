// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { terser } from "rollup-plugin-terser"; // Import terser from rollup-plugin-terser

export default defineConfig({
  plugins: [
    react(),
    terser(), // Add terser plugin for minification
  ],
});

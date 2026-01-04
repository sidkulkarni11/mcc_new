import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",   // REQUIRED for custom domains
  build: {
    outDir: "docs", // REQUIRED for GitHub Pages
  },
});

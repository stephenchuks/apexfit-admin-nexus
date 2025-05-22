import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  // <-- tell Vite to prefix all URLs with your repo name
  base: "/apexfit-admin-nexus/",

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // output into dist/ (cleaned each build) for gh-pages
    outDir: "dist",
    emptyOutDir: true,
  },
}));

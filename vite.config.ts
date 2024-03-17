import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    cssCodeSplit: true,
    cssTarget: "es6",
    outDir: "dist",
    rollupOptions: {
      output: {
        experimentalMinChunkSize: 40960,
      },
    },
    target: "esnext",
  },
  plugins: [
    react(),
    ViteEjsPlugin({
      module: "/src/client/index.tsx",
    }),
  ],
});

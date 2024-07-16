import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteSvgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSvgrPlugin({ include: "**/*.svg?react" })],
  server: { port: 3000 },
  resolve: {
    alias: {
      components: "/src/components",
      pages: "/src/pages",
      assets: "/src/assets",
      constants: "/src/constants",
      store: "/src/store",
      service: "/src/service",
    },
  },
});

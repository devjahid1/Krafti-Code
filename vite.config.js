import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    target: "esnext",

    cssCodeSplit: true,

    sourcemap: false,

    minify: "esbuild",

    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks(id) {
          // React
          if (
            id.includes("react") ||
            id.includes("react-dom") ||
            id.includes("scheduler")
          ) {
            return "react";
          }

          // GSAP
          if (id.includes("gsap")) {
            return "gsap";
          }

          // Swiper
          if (id.includes("swiper")) {
            return "swiper";
          }

          // React Icons
          if (id.includes("react-icons")) {
            return "icons";
          }

          // Vendor
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "gsap",
      "@gsap/react",
      "swiper/react",
      "swiper/modules",
    ],
  },
});
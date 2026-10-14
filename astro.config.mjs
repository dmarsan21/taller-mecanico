// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
    domains: ["images.unsplash.com"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

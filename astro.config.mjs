// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// Esta es la importación correcta
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(), 
    tailwind() // Aquí se activa la integración
  ]
});
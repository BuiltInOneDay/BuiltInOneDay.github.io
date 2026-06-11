import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://anthonyellsowrth.dev',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(), 
    sitemap(), 
    partytown({
      config: {
        forward: ["dataLayer.push"],
      }
    })
  ]
});
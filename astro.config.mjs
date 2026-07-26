import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://astro-commercial-real-estate-lite.pages.dev/',
  compressHTML: true,
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
})

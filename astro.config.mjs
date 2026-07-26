import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://cre-lite.example.com',
  compressHTML: true,
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { prerender } from 'vite-plugin-prerender'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const routes = [
    '/',
    '/uae',
    '/uae/admin',
    '/uae/storage-units',
    '/uae/how-it-works',
    '/uae/locations',
    '/uae/pricing',
    '/uae/business',
    '/uae/contact',
    '/uae/personal-storage',
    '/uae/business-storage',
    '/uae/document-storage',
    '/uae/vehicle-storage',
    '/uae/moving-services',
    '/uae/privacy',
    '/uae/terms',
    '/uae/sitemap',
    '/uae/get-quote',
    '/uae/blog',
    '/uk'
  ]

  return {
    plugins: [
      react(),
      mode === 'production' && prerender({
        routes,
        minify: false,
        renderAfterTime: 1000
      })
    ].filter(Boolean),
    base: '/'
  }
})

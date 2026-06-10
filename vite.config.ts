import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import fs from 'fs'
import path from 'path'

const projectRoot = process.cwd()

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/icon-192.png', 'icons/icon-512.png'],
      manifest: {
        name: '野菜 種まきカレンダー',
        short_name: '種まきカレンダー',
        description: '74種類の野菜の種まき・定植・収穫時期を地域別で確認できるカレンダーアプリ',
        theme_color: '#1b5e20',
        background_color: '#f9fef5',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        lang: 'ja',
        orientation: 'portrait',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
      workbox: {
        // オフライン対応：全ページ・画像をキャッシュ
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            // 野菜画像を積極的にキャッシュ
            urlPattern: /\/vegetables\/.+\.png$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'vegetable-images',
              expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
    {
      name: 'serve-root-images',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (!req.url) return next()
          const url = req.url.split('?')[0]
          if (!url.endsWith('.png') && !url.endsWith('.jpg') && !url.endsWith('.jpeg')) return next()
          const decoded = decodeURIComponent(url.slice(1))
          const filePath = path.join(projectRoot, decoded)
          if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'image/png')
            res.setHeader('Cache-Control', 'public, max-age=3600')
            fs.createReadStream(filePath).pipe(res)
          } else {
            next()
          }
        })
      },
    },
  ],
})

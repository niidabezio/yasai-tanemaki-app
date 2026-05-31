import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const projectRoot = process.cwd()

export default defineConfig({
  plugins: [
    react(),
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

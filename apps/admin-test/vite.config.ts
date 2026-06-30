import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { avenueDashboardPlugin } from '@avenuejs/dashboard-sdk'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    avenueDashboardPlugin({
      medusaConfigPath: '../../packages/api/medusa-config.ts',
    }),
  ],
})

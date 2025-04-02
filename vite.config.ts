import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' //추가

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{ //추가
    alias:[{ find : "@src", replacement : path.resolve(__dirname, "src")},
           { find : "@assets", replacement : path.resolve(__dirname, "src/assets")},
           { find:"@components", replacement: path.resolve(__dirname,"src/components")},
           { find : "@fonts", replacement : path.resolve(__dirname, "src/fonts")},
           { find : "@layout", replacement : path.resolve(__dirname, "src/layout")},
           { find : "@pages", replacement : path.resolve(__dirname, "src/pages")},
           { find : "@types", replacement : path.resolve(__dirname, "src/types")},
           { find : "@utils", replacement : path.resolve(__dirname, "src/utils")},
          ]
  }
})
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './dist/stats.html',
      open: true,
    }) // opens interactive report after build
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@xyflow')) return 'xyflow';
            if (id.includes('react-router')) return 'react-router';
            if (id.includes('react-hot-toast')) return 'toast';
            if (id.includes('react')) return 'react';
          }
        }
      }
    }
  }
});

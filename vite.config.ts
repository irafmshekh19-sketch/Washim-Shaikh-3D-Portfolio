import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/Irfan-Shekh-3D-Interactive-Resume/' : '/',
  server: {
    allowedHosts: true,
  },
  build: {
    chunkSizeWarningLimit: 1000, // Reduced from 5000KB to 1000KB for better performance monitoring
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

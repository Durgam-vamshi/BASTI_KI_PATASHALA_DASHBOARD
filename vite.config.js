/* eslint-disable no-undef */
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })








// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"), // Alias for clean imports
//       cesium: path.resolve(__dirname, "node_modules/cesium"),
//     },
//   },
//   define: {
//     CESIUM_BASE_URL: JSON.stringify("node_modules/cesium/Build/Cesium"),
//   },
//   server: {
//     port: 5173, // Change the port if needed
//     open: true, // Automatically open the browser on server start
//   },
//   build: {
//     chunkSizeWarningLimit: 1000, // Prevents warnings for large bundle sizes
//   },
// });



import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Clean import paths
      cesium: path.resolve(__dirname, "node_modules/cesium"),
    },
  },
  define: {
    CESIUM_BASE_URL: JSON.stringify("/cesium/"), // Ensure correct Cesium path in production
  },
  server: {
    port: 5173,
    open: true, // Automatically open the browser
  },
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1000, // Prevent large bundle warnings
  },
  base: "./", // Ensures correct routing in Vercel
});

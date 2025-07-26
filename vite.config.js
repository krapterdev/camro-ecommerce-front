// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// // import path from 'path'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     sourcemap: false
//   },
//   resolve: {
//     alias: {
//       '@assets': path.resolve(__dirname, 'src/assets'),
//       '@utils': path.resolve(__dirname, 'src/utils'),
//       '@components': path.resolve(__dirname, 'src/components'),
//       '@pages': path.resolve(__dirname, 'src/pages'),
//       '@layouts': path.resolve(__dirname, 'src/layouts'),
//     },
//   },
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
  },
  define: {
    global: {},
    "process.env": {},
  },
  server: {
    host: "0.0.0.0",
  },
});

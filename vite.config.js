import path from 'path';
import { resolve } from 'path';
import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import webfontDownload from 'vite-plugin-webfont-dl';

export default defineConfig({
  plugins: [
    // laravel({
    //   input: ['/style.css', '/main.js'],
    //   refresh: false,
    // }),
    // webfontDownload([
    //   'https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Montserrat:wght@400;500;600;700&display=swap',
    // ]),
  ],
  server: {
    open: '/index.html',
  },
  base: './',
  build: {
    watch: true,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
      },

      output: {
        entryFileNames: `assets/js/[name].js`,
        assetFileNames: (assetInfo) => {
          var info = assetInfo.name.split('.');
          var extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          } else if (/woff|woff2|eot/.test(extType)) {
            extType = 'fonts';
          }

          return `assets/${extType}/[name].[ext]`;
        },

        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources'),
    },
  },
});

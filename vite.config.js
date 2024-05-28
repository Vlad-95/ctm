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
        about_docs: resolve(__dirname, 'about_docs.html'),
        about_team: resolve(__dirname, 'about_team.html'),
        career: resolve(__dirname, 'career.html'),
        career_one: resolve(__dirname, 'career_one.html'),
        clients: resolve(__dirname, 'clients.html'),
        contacts: resolve(__dirname, 'contacts.html'),
        press_about_us: resolve(__dirname, 'press_about_us.html'),
        news_one: resolve(__dirname, 'news_one.html'),
        press_service: resolve(__dirname, 'press_service.html'),
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

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: "https://nullgaro.com",
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"]
  },
  vite: {
    resolve: {
      alias: {
        '@data': path.resolve(__dirname, 'blog-posts/data'),
      }
    }
  }
});

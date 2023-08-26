import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.andrealves.dev',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react(), sitemap(), mdx(), partytown({config: { forward: ["dataLayer.push"]}})],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'slack-dark',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ['tsx'],
      // Enable word wrap to prevent horizontal scrolling
      wrap: false
    }
  }
});
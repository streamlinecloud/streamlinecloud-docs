// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'StreamlineCloud',
          logo: {
              src: './src/assets/logo.png',
          },
          favicon: '/favicon.png',
          components: {
              ThemeProvider: './src/components/ThemeProvider.astro',
              ThemeSelect: './src/components/ThemeSelect.astro',
          },
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/streamlinecloud/StreamlineCloud' }],
          customCss: [
              // Relative path to your custom CSS file
              './src/styles/streamline.css',
          ],
          sidebar: [
              {
                  label: 'Getting started',
                  autogenerate: { directory: 'streamline/getting-started' },
              },
              {
                  label: 'Core features',
                  autogenerate: { directory: 'streamline/core' },
              },
              {
                  label: 'Advanced',
                  autogenerate: { directory: 'streamline/advanced' },
              },
              {
                  label: 'Development',
                  autogenerate: { directory: 'streamline/development' },
              },
          ],
      }),
	],
    redirects: {
        '/': 'https://streamlinecloud.net/docs',
    },

  vite: {
    plugins: [tailwindcss()],
  },
});
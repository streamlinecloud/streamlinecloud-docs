// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'StreamlineCloud',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'StreamlineCloud',
					// Autogenerate a group of links for the 'constellations' directory.
					autogenerate: { directory: 'streamline' },
				},
			],
		}),
	],
});

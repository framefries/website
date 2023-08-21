import { HstSvelte } from '@histoire/plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	histoire: {
		setupFile: '/src/histoire.setup.js',
		plugins: [HstSvelte()],
		tree: {
			groups: [
				{
					title: 'Components',
					include: file => /components/i.test(file.path),
				},
				{
					title: 'Layouts',
					include: file => /layouts/i.test(file.path),
				},
				{
					title: 'Icons',
					include: file => /icons/i.test(file.path),
				},
			],
		},
	},
});

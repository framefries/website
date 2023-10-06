import { HstSvelte } from '@histoire/plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	histoire: {
		setupFile: '/src/histoire.setup.js',
		plugins: [HstSvelte()],
	},
	build: {
		assetsInlineLimit: 0,
	},
});

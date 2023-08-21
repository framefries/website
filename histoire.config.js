import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
  setupFile: './src/histoire.setup.js',
  plugins: [
    HstSvelte(),
  ],
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
    ],
  },
});

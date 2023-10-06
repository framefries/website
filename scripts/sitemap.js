import fs from 'node:fs';

import 'dotenv/config';
import { createSitemap } from 'svelte-sitemap/src/index.js';

// build sitemap.yml
createSitemap(process.env.VITE_BASE_URL);

// build robots.txt
fs.writeFileSync('./build/robots.txt', `
# https://www.robotstxt.org/robotstxt.html
User-agent: *
${process.env.VITE_INDEXING ? 'Allow' : 'Disallow'}: /
`.trim());


import * as esbuild from 'esbuild';
import { copyFileSync, mkdirSync } from 'fs';
const out = '../app/src/main/assets';
mkdirSync(out, { recursive: true });
await esbuild.build({ entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'iife', target: ['chrome80'], outfile: `${out}/game.js` });
copyFileSync('index.html', `${out}/index.html`);
console.log('built');

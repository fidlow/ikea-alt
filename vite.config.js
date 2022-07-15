import preact from '@preact/preset-vite'
import { resolve } from 'path';

/**
 * @type { import('vite').UserConfig }
 */
const config  = {
  plugins: [preact()],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  alias: [{ find: '@', replacement: resolve('src') }],
}

export default config
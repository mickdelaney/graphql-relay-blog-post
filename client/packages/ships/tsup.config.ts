// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'tsup';
// @ts-ignore
import babel from 'esbuild-plugin-babel';

export default defineConfig(options => {
  return {
    entry: ['src/index.tsx'],
    dts: true,
    esbuildPlugins: [babel()],
    watch: options.watch,
    format: ['cjs', 'esm'],
    external: ['react', 'react-relay', 'relay-runtime'],
  };
});

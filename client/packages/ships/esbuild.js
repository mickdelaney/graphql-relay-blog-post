#!/usr/bin/env node

// const relay = require('esbuild-plugin-relay');
import esbuild from 'esbuild';
import babel from 'esbuild-plugin-babel';


// console.log(relay.name);

esbuild.build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outfile: 'dist/index.js',
  plugins: [babel()]
}).then(() => {
  console.log(`esbuild ships completed`);
});

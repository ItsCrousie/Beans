import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const commonPlugins = [
  typescript(),
  resolve(),
  terser()
];

export default [
  // 1. The Main App Bundle
  {
    input: 'src/main.ts',
    output: {
      file: 'src/main.js',
      format: 'iife' //
    },
    plugins: commonPlugins
  },

  // 2. The Service Worker
  {
    input: 'src/sw.ts',
    output: {
      file: 'src/sw.js',
      format: 'es'
    },
    plugins: commonPlugins
  }
];

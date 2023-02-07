import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';


export default {
  input: 'src/index.ts',
  output: ['esm', 'cjs', 'umd'].map((format) => ({
    name: 'demo1',
    format,
    dir: 'dist',
    entryFileNames: `cn-alex-demo1.[format].js`,
    preserveModulesRoot: 'src',
  })),
  plugins: [json(), typescript()],
};

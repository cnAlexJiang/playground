import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';


export default {
  input: 'src/index.ts',
  output: ['esm', 'cjs', 'umd'].map((format) => ({
    name: 'util1',
    format,
    dir: 'dist',
    entryFileNames: `cn-alex-util1.[format].js`,
    preserveModulesRoot: 'src',
  })),
  plugins: [json(), typescript()],
};

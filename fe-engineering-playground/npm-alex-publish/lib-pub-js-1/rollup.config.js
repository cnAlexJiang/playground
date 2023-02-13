
export default {
  input: 'index.js',
  output: ['esm', 'cjs', 'umd'].map((format) => ({
    name: 'demo2',
    format,
    dir: 'dist',
    entryFileNames: `demo2.[format].js`,
    preserveModulesRoot: 'src',
  })),
  plugins: [ ],
};

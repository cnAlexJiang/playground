// rollup.config.js (building more than one bundle)
export default 	{
  input: 't2.js',
  output: [
    {
      file: 'dist/bundle-t2.js',
      format: 'cjs'
    },
  ]
}
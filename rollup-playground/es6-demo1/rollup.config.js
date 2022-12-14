import babel from 'rollup-plugin-babel';
export default {
    input: './src/index.js',
    output: {
        format: 'umd',
        name: 'test',
        file: 'dist/index.js',
        sourcemap: true
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}

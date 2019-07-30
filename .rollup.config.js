import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/scripts/index.js',
    output: {
        file: 'src/js/main.js',
        format: 'iife',
        sourcemap: true,
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: ['node_modules/**'],
        }),
    ],
};

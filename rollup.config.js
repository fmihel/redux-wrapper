import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonJs from 'rollup-plugin-commonjs';

export default {
    input: './source/redux.js',
    output: {
        file: './dist/fmihel-redux-wrapper.js',
        format: 'cjs', // umd cjs iife
        name: 'fmihel_redux_wrapper',
    },
    external:['redux','redux-thunk'],
    plugins: [

        resolve(),
        commonJs(),
        babel({
            exclude: 'node_modules/**', // only transpile our source code
        }),
    ],

};

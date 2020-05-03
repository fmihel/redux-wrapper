const path = require('path');
const { defArg } = require('fmihel-server-lib');


const toProduction = defArg('prod');
const renderToRemotePath = defArg('path');

const SOURCE_PATH = './source/';

const PUBLIC_PATH = renderToRemotePath?'C:/work/admin/node_modules/fmihel-redux-wrapper/dist/':'./dist/';
module.exports = {
    mode: toProduction ? 'production' : 'development',
    devtool: toProduction ? false : 'inline-source-map',

    entry: `${SOURCE_PATH}index.js`,
    output: {
        path: path.resolve(__dirname, PUBLIC_PATH),
        filename: `fmihel-redux-wrapper${toProduction ? '.min.' : '.'}js`,
        libraryTarget: 'umd',
        globalObject: 'this',
        library: 'fmihel-redux-wrapper',
    },
    externals: {
        lodash : {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_' // indicates global variable
          },
        redux:'redux',
        'redux-thunk':'redux-thunk'  
       // 'fmihel-lib': 'fmihel-lib',
       // jquery: 'jquery',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        // new CleanWebpackPlugin(),
    ],
};

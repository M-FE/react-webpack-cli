const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = p => path.resolve(__dirname, p);

module.exports = {
    entry: {
        app: resolve('./src/main.js')
    },

    output: {
        filename: '[name].bundle.js',
        path: resolve('./dist')
    },

    mode: 'production',
    
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    module: {
        /* 优化构建速度 */
        noParse: /lodash|jquery/,
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('./template.html')
        }),
        /* 优化构建速度 */
        new webpack.DllReferencePlugin({
            manifest: require(resolve('./dll/react.manifest.json'))
        })
    ]
};

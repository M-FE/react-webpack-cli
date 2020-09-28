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

    devServer: {
        port: 9003
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                verdor: {
                    name: 'verdor',
                    test: /[\\\/]node_modules[\\//]/,
                    chunks: 'initial',
                    minChunks: 1,
                    priority: 10
                }
            }
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('./template.ejs'),
            templateParameters: {
                dllScript: '<script src="../dll/react.dll.js"></script>'
            }
        }),
        /* 优化构建速度 */
        new webpack.DllReferencePlugin({
            manifest: require(resolve('./dll/react.manifest.json'))
        })
    ]
};

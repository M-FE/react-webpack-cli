const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('./utils');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: {
        app: resolve('../src/main.js')
    },

    output: {
        filename: '[name].bundle.js',
        path: resolve('../dist')
    },
    
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
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
                },
                common: {
                    name: 'common',
                    test: /[\\\/]src[\\\/]/,
                    chunks: 'all',
                    minChunks: 2,
                    priority: 5
                }
            }
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('../template.ejs'),
            templateParameters: {
                dllScript: isDev ? '<script src="../dll/verdor.dll.js"></script>' : ''
            }
        })
    ]
};

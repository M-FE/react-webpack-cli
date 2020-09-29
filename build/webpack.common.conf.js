const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('./utils');

const isDev = process.env.NODE_ENV === 'development';

const cssLoaders = [
    {
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: isDev
        }
    },
    'css-loader'
];

module.exports = {
    entry: {
        app: resolve('../src/main.js')
    },

    output: {
        filename: '[name].[contentHash].bundle.js',
        path: resolve('../dist'),
        chunkFilename: '[name].[contentHash].chunk.js'
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
            },
            {
                test: /\.css$/,
                use: [...cssLoaders]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [...cssLoaders, 'sass-loader']
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
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contentHash].css',
            chunkFilename: '[id].[contentHash].css'
        })
    ]
};

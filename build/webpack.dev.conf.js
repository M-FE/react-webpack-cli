const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common.conf');
const { resolve } = require('./utils');

module.exports = merge(baseConfig, {
    mode: 'development',

    devtool: '#eval-source-map',

    module: {
        /* 优化构建速度 */
        noParse: /lodash|jquery/,
        rules: [
            {
                test: /\.(j|t)sx?/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            cache: true,
                            fix: true
                        }
                    }
                ]
            }
        ]
    },

    devServer: {
        port: 9003
    },

    plugins: [
        /* 优化构建速度 */
        new webpack.DllReferencePlugin({
            manifest: require(resolve('../dll/verdor.manifest.json'))
        })
    ]
});

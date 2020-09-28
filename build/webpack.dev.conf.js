const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common.conf');
const { resolve } = require('./utils');

module.exports = merge(baseConfig, {
    mode: 'development',

    module: {
        /* 优化构建速度 */
        noParse: /lodash|jquery/
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

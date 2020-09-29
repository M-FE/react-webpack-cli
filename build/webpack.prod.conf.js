const baseConfig = require('./webpack.common.conf');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',

    plugins: [
        new CleanWebpackPlugin(),
        /* 压缩CSS */
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
                preset: ['default', { discardComments: { removeAll: true } }]
            },
            canPrint: true
        })
    ]
});

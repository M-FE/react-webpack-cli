const baseConfig = require('./webpack.common.conf');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',

    plugins: [
        new CleanWebpackPlugin()
    ]
});

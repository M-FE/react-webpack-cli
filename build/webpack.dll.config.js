const webpack = require('webpack');
const { resolve } = require('./utils');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        verdor: ['react', 'react-dom']
    },

    output: {
        filename: '[name].dll.js',
        path: resolve('../dll'),
        library: '[name]'
    },
    
    mode: 'production',

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            name: '[name]',
            path: resolve('../dll/[name].manifest.json')
        })
    ]
};

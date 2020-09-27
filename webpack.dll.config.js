const path = require('path');
const webpack = require('webpack');

const resolve = p => path.resolve(__dirname, p);

module.exports = {
    entry: {
        react: ['react', 'react-dom']
    },

    output: {
        filename: '[name].dll.js',
        path: resolve('./dll'),
        library: '[name]'
    },
    
    mode: 'production',

    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: resolve('./dll/[name].manifest.json')
        })
    ]
};

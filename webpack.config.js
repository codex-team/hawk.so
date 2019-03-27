const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.twig$/, loader: "twig-loader"}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./src/views/index.twig'),
            filename: path.resolve('./dist/index.html'),
            inject: true
        })
    ]
}
;
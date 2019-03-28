const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

module.exports = {
    entry: './src/styles/index.pcss',
    module: {
        rules: [
            {
                test: /\.twig$/,
                loader: 'twig-loader'
            },
            {
                test: /\.pcss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },

    plugins: [
        new FixStyleOnlyEntriesPlugin({
            extensions:['pcss']
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('./src/views/index.twig'),
            filename: path.resolve('./dist/index.html'),
            inject: false
        }),
        new CopyWebpackPlugin([
            {
                from: './src/assets/**/*',
                to: './assets/[name].[ext]',
                test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)$/
            }
        ])
    ]
}
;

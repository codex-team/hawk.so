const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

module.exports = {
    entry: './src/styles/index.pcss',
    devServer: {
        staticOptions: {
            extensions: ['html']
        }
    },
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
            filename: '[name].css?h=[hash]'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('./src/views/index.twig'),
            filename: path.resolve('./dist/index.html')
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('./src/views/pricing.twig'),
            filename: path.resolve('./dist/pricing/index.html')
        }),
        new CopyWebpackPlugin([
            {
                from: './src/assets/',
                to: './assets/',
                test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)$/
            }
        ])
    ]
};

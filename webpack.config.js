const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        polyfill: [
            'core-js/stable',
            'regenerator-runtime',
            '@webcomponents/custom-elements'
        ],
        app: './src/app.js',
    },
    mode: 'development',
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: 'babel-loader',
                exclude: {
                    test: /node_modules/,
                    not: [/node_modules(\/|\\)svelte/]
                }
            },
            {
                test: /\.svelte$/,
                use: [
                    'babel-loader',
                    'svelte-loader'
                ],
            }]
    },
    devtool: 'cheap-eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}
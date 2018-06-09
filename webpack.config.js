const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src', 'assets', 'js', 'app.js'),
        path.resolve(__dirname, 'src', 'assets', 'sass', 'app.scss')
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: path.join('js', 'app.js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: path.join('css', 'app.css'),
            allChunks: true
        })
    ],
    devtool: 'source-map'
};

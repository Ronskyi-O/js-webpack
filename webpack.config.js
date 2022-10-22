const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
        test: /\.scss$/i,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new MiniCssExtractPlugin({filename: 'styles.css'})],
    devServer: {
    static: {
        directory: path.join(__dirname, '/'),
    },
    compress: true,
        port: 9000,
        open: true,
  },
}
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({template: 'src/index.html'})],
    devServer: {
    static: {
        directory: path.join(__dirname, '/'),
    },
    compress: true,
        port: 9000,
        open: true,
  },
}
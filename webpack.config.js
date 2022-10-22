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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ],
    },
        devServer: {
    static: {
        directory: path.join(__dirname, '/'),
    },
    compress: true,
        port: 9000,
        open: true,
  },
}
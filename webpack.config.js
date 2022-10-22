const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
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
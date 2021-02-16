const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/components/listagem/listagem-cliente.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: 'dist'
    }
}
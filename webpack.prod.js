const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "/public/index.html"),
    filename: "./index.html"
});

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        index: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }, {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        library: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    watch: true
};
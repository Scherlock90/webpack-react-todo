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
    resolve: {
        extensions: [
            ".ts", 
            ".tsx", 
            ".js", 
            ".jsx"
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }, 
            { 
                test: /\.js$/, 
                exclude: /node_modules|bower_components/, 
                loaders: ["babel-loader"] 
            },
            { 
                test: /\.tsx?$/, 
                loader: "ts-loader" 
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        library: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    watch: true
};
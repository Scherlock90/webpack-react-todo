const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPluginCreateIndexHtml = new HtmlWebpackPlugin({
    template: path.join(__dirname, "/public/index.html"),
    filename: "./index.html",
});
const htmlWebpackPluginCreate404Html = new HtmlWebpackPlugin({
    template: path.join(__dirname, "/public/index.html"),
    filename: "./404.html",
});

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        index: './src/index.js'
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
    plugins: [
        htmlWebpackPluginCreateIndexHtml,
        htmlWebpackPluginCreate404Html,
        new webpack.HotModuleReplacementPlugin()  ,
        new webpack.ProgressPlugin()  
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './build'),
        // publicPath: '/',
        library: '[name]',
        libraryTarget: 'umd'
    },
    watch: true
};
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "/public/index.html"),
    filename: "./index.html"
});

module.exports = {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        port: 9999,
        historyApiFallback: true,
        contentBase: './build',
        hot: true
    },
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
    plugins: [
        htmlWebpackPlugin,
        new webpack.HotModuleReplacementPlugin()  ,
        new webpack.ProgressPlugin()      
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        library: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    watch: true
};
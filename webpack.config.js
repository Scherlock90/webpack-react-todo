const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        port: 9999,
        publicPath: '/dist/',
        contentBase: './public',
        watchContentBase: true,
    },
    entry: {
        index: './lib/index.js',
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
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    watch: true
};
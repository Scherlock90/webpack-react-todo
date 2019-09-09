const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    devServer: {
        port: 9999,
        publicPath: '/dist/',
        contentBase: './public',
        watchContentBase: true,
    },
    entry: {
        index: './lib/index.js',
    },
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack-react-todo2'
        })
    ],
    // plugins: [    new HtmlWebpackPlugin({      template: path.resolve('./index.html'),    }),  ],
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
        path: path.resolve(__dirname, 'build'),
        library: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    watch: true
};
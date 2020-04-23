const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "/public/index.html"),
  filename: "./index.html"
});

const htm404 = new HtmlWebpackPlugin({
  template: path.join(__dirname, "/public/index.html"),
  filename: "./404.html"
});

module.exports = {
  mode: "development",
  devtool: "eval",
  devServer: {
    port: 9999,
    historyApiFallback: true,
    open: true,
    contentBase: "./build",
    hot: true
  },
  entry: {
    index: "./src/index.tsx"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".d.ts"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: ["babel-loader", "eslint-loader"] },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.scss$/,
        loader: "sass-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loaders: ["babel-loader"]
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    htm404,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin()
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    library: "[name]",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  watch: true
};

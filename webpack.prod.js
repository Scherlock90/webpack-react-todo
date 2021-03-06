const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPluginCreateIndexHtml = new HtmlWebpackPlugin({
  template: path.join(__dirname, "/public/index.html"),
  filename: "index.html",
  inject: true
});
const htmlWebpackPluginCreate404Html = new HtmlWebpackPlugin({
  template: path.join(__dirname, "/public/index.html"),
  filename: "404.html",
  inject: true
});

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    index: "./src/index.tsx"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.scss$/,
        loader: "sass-loader"
      },
      {
        test: /\.scss$/,
        loader: "sass-resources-loader",
        options: {
          resources: [path.resolve(__dirname, "./src/style/_mixins.scss")]
        }
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules|bower_components/,
        loaders: ["babel-loader"]
      }
    ]
  },
  plugins: [
    htmlWebpackPluginCreateIndexHtml,
    htmlWebpackPluginCreate404Html,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin()
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./build"),
    library: "[name]",
    libraryTarget: "umd"
  },
  watch: true
};

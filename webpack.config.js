const path = require("path");
const historyApiFallback = require("connect-history-api-fallback");

module.exports = {
  mode: "development",
  entry: "./client/src/index.js",
  output: {
    path: path.resolve(__dirname, "./client/public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{ loader: "file-loader" }],
      },
      { test: /\.(mp3|wav|mpe?g|ogg)?$/i, use: [{ loader: "file-loader" }] },
    ],
  },
  devServer: { historyApiFallback: true },
  resolve: {
    extensions: [".jsx", ".js"],
  },
};

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const isProd = process.env.NODE_ENV === "production"

module.exports = {
  mode: isProd ? "production" : "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index-[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}

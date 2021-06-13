const webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin }= require("vue-loader")

const isProd = process.env.NODE_ENV === "production"
const srcDir = path.resolve(__dirname, "src")
const distDir = path.resolve(__dirname, "dist")

module.exports = {
  mode: isProd ? "production" : "development",
  target: "web",
  resolve: {
    alias: {
      "vue": "vue/dist/vue.esm-bundler.js",
      "@": srcDir,
    },
    extensions: [".js", ".vue"],
  },
  entry: path.resolve(srcDir, "index.js"),
  output: {
    path: distDir,
    filename: "index-[hash].js",
    clean: true,
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
      },
      {
        test: /\.vue$/,
        use: { loader: "vue-loader" }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "vue3 playground",
      template: path.resolve(srcDir, "index.html.ejs"),
    }),
    new VueLoaderPlugin,
    new webpack.DefinePlugin({
      "__VUE_OPTIONS_API__": true,
      "__VUE_PROD_DEVTOOLS__": false,
    })
  ],
  devServer: {
    liveReload: true,
  },
}

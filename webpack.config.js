"use strict";

var path = require("path");
var WebpackNotifierPlugin = require("webpack-notifier");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    entry: {
        mynotes: "./Scripts/app/index.js",        
    },
  output: {
      filename: '[name].bundle.js',
      chunkFilename: "chunk-[name].[contenthash].js",
      publicPath: "/Scripts/dist/react/",
      path: path.resolve(__dirname, "./Scripts/dist/react")
    },   
  module: {
    rules: [  
      {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
              loader: "babel-loader",
          }
      },
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
                'url-loader',
          ]

      }
   ]
},
//devtool: "inline-source-map",
    plugins: [
        new WebpackNotifierPlugin(),
        new BrowserSyncPlugin()
    ]
};

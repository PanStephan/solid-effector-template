import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
// import CopyPlugin from "copy-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

import conf from "./common.conf";

const prodWebpackConfig: Configuration = {
  ...conf,
  ...{
    bail: true,
    mode: "production",
    stats: "errors-warnings",
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: "all"
      },
      minimizer: [
        "...",
        new CssMinimizerPlugin()
      ],
    },
    module: {
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
          type: "asset/resource",
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
              }
            },
          ],
        },
        {
          test: /\.(tsx|ts)?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['solid'],
              },
            },
            "ts-loader"
          ],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "assets/index.html",
        filename: "index.html",
      }),
      new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })
    ],
  },
} as Configuration;

export default prodWebpackConfig;

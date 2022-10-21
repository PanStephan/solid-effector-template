import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

import conf from "./common.conf";

const devWebpackConfig: Configuration = {
  ...conf,
  ...{
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      port: 3000,
      host: "0.0.0.0",
      hot: true,
    },
    module: {
      rules: [
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
        {
          test: /\.js$/,
          use: ["source-map-loader"],
          enforce: "pre",
        },
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
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              }
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "assets/index.html",
      }),
    ]
  },
} as Configuration;

export default devWebpackConfig;

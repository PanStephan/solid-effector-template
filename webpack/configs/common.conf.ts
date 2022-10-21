import { Configuration } from "webpack";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

import { getRoute } from "../utils/getRoute";
import { Exits } from "../utils/constants";

const config: Configuration = {
  context: getRoute(Exits.src),
  watchOptions: {
    ignored: /node_modules/,
  },
  target: "web",
  entry: "./index.tsx",
  output: {
    path: getRoute(Exits.build),
    filename: "bundle.[contenthash].js",
    assetModuleFilename: "assets/[name][contenthash][ext]"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    plugins: [new TsconfigPathsPlugin({ baseUrl: "src" }) ]
  },
};

export default config;

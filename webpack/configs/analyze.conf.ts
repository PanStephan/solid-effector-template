import { Configuration } from "webpack";
import { BundleAnalyzerPlugin} from "webpack-bundle-analyzer";

import prodWebpackConfig from "./prod.conf";

const analyzeConf: Configuration = {
  ...prodWebpackConfig,
  plugins: [
    ...prodWebpackConfig.plugins,
    new BundleAnalyzerPlugin()
  ]
} as Configuration;

export default analyzeConf;
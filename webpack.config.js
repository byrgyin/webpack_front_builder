import path from "node:path";
import dotenv from "dotenv"
import {scssLoaderConfig, pugConfigLoader} from "./config_builder/loaders.js";
import {cssMiniCssExtract, pluginGenerateHtml} from "./config_builder/plugins.js";
import {devSeverConfig} from "./config_builder/devServer.js";

dotenv.config();

const __dirname = path.resolve();

/*-- END devServer CONFIG  --*/
const config = {
  mode: process.env.NODE_ENV || "development",
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  module: {
    rules: [scssLoaderConfig, pugConfigLoader]
  },
  plugins: [pluginGenerateHtml, cssMiniCssExtract],
  devServer: devSeverConfig
}

export default config;
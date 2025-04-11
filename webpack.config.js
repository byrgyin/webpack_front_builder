import path from "node:path";
import dotenv from "dotenv"
import {scssLoaderConfig, pugConfigLoader,imageLoaders,fontsLoaders} from "./config_builder/loaders.js";
import {cssMiniCssExtract, pluginGenerateHtml,CopyFiles} from "./config_builder/plugins.js";
import {devSeverConfig} from "./config_builder/devServer.js";
import {generateEntries} from "./config_builder/optimization.js";

dotenv.config();

const __dirname = path.resolve();

const config = {
  mode: process.env.NODE_ENV || "development",
  entry: {main: path.resolve(__dirname, "src/index.js")},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    clean: true,
  },
  module: {
    rules: [scssLoaderConfig, pugConfigLoader,imageLoaders,fontsLoaders]
  },
  plugins: [...pluginGenerateHtml, cssMiniCssExtract,CopyFiles],
  devServer: devSeverConfig,
};

export default config;
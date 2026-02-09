import path from "node:path";
import {loaders} from "./config_builder/loaders.js";
import {plugins} from "./config_builder/plugins.js";
import {devSeverConfig} from "./config_builder/devServer.js";

const __dirname = path.resolve();
console.log(process.env.NODE_ENV)

const config = {
  mode: process.env.NODE_ENV || "development",
  entry: {main: path.resolve(__dirname, "src/index.js")},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: process.env.NODE_ENV === 'production' ? '[name].[contenthash].js' : '[name].js',
    chunkFilename: process.env.NODE_ENV === 'production' ? '[name].[contenthash].js' : '[name].js',
    clean: true,
  },
  module: {
    rules: loaders
  },
  plugins: plugins,
  devtool: process.env.NODE_ENV === "production" ? false : "eval-cheap-source-map",
  devServer: devSeverConfig,
};

export default config;
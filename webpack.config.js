import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import dotenv from "dotenv"

dotenv.config();

const __dirname = path.resolve();

/*-- CSS CONFIG  --*/
const scssLoaderConfig = {
  test: /\.scss$/,
  use: [
      process.env.NODE_ENV === "development" ? "style-loader" : MiniCssExtractPlugin.loader,,
    'css-loader',
    'sass-loader'
  ]
};
const cssMiniCssExtract = new MiniCssExtractPlugin({
  filename: 'style.css'
});
/*-- END CSS CONFIG  --*/

/*-- PUG-TO-HTML CONFIG  --*/
const pugConfigLoader = {
  test: /\.pug$/,
  use: ["pug-loader"]
}

const pluginGenerateHtml = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src/index.pug'),
  filename: 'index.html',
  minify: false,
  inject: true,
});
/*-- END PUG-TO-HTML CONFIG  --*/

/*-- devServer CONFIG  --*/

const devSeverConfig = {
  static: path.resolve(__dirname, 'dist'),
  port: 3000,
  open: true,
  hot: true,
  liveReload: true,
  compress: true,
  historyApiFallback: true,
  watchFiles: ["src/**/*.pug"]
}

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
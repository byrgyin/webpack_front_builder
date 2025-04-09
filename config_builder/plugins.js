import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import path from "node:path";

const __dirname = path.resolve();
/*-- CSS CONFIG  --*/
export const cssMiniCssExtract = new MiniCssExtractPlugin({
  filename: '[name].css',
});

/*-- END CSS CONFIG  --*/

/*-- PUG-TO-HTML CONFIG  --*/
export const pluginGenerateHtml = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, './src/pages/index.pug'),
  filename: 'index.html',
  minify: false,
  inject: 'body',
});
/*-- END PUG-TO-HTML CONFIG  --*/
/* COPY FILES */

export const CopyFiles = new CopyWebpackPlugin({
  patterns: [
    {
      from: 'src/components/**/images/*.*',
      to: 'images/[name][ext]',
      transform: {
        cache: true
      },
      noErrorOnMissing: true
    },
  ]
});
/* END COPY FILES */

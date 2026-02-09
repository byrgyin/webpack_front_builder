import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import path from "node:path";
import fs from "fs";

const __dirname = path.resolve();
const pageDir = path.resolve(__dirname, './src/pages');
const pages = fs.readdirSync(pageDir).filter(file => file.endsWith('.pug'));


/*-- CSS  --*/
export const cssMiniCssExtract = new MiniCssExtractPlugin({
  filename: '[name].[contenthash].css',
});

/*-- END CSS  --*/

/*-- PUG-TO-HTML  --*/
export const pluginGenerateHtml = pages.map(page => {
  const pageName = page.replace('.pug','');
  return new HtmlWebpackPlugin({
    template: path.resolve(pageDir, page),
    filename: `${pageName}.html`,
    minify: false,
    inject: 'body',
  })
});

/*-- END PUG-TO-HTML  --*/

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
export const plugins = [...pluginGenerateHtml, cssMiniCssExtract, CopyFiles];
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "node:path";

const __dirname = path.resolve();

/*-- CSS CONFIG  --*/
export const cssMiniCssExtract = new MiniCssExtractPlugin({
    filename: 'style.css'
});
/*-- END CSS CONFIG  --*/

/*-- PUG-TO-HTML CONFIG  --*/
export const pluginGenerateHtml = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/index.pug'),
    filename: 'index.html',
    minify: false,
    inject: true,
});
/*-- END PUG-TO-HTML CONFIG  --*/


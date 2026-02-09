import MiniCssExtractPlugin from "mini-css-extract-plugin";

/*-- CSS  --*/
export const scssLoaderConfig = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    process.env.NODE_ENV === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    },
  ]
};
/*-- END CSS  --*/

/*-- PUG-TO-HTML  --*/
export const pugConfigLoader = {
  test: /\.pug$/,
  use: [
    {
      loader: "pug-loader",
      options: {
        pretty: true,
      }
    }
  ]
}
/*-- END PUG-TO-HTML  --*/

/* IMAGES */
export const imageLoaders = {
  test: /\.(png|jpg|jpeg|gif|svg)$/i,
  type: "asset",
  generator: {
    filename: "images/[name][ext]",
  },
}
/* END IMAGES */

/* FONTS */
export const fontsLoaders = {
  test: /\.(woff2)$/i,
  type: "asset/resource",
  generator: {
    filename: "fonts/[name][ext]", // Сохраняет шрифты в папку fonts с оригинальным именем
  },
}
/* END FONTS */

export const loaders = [
  scssLoaderConfig,
  pugConfigLoader,
  imageLoaders,
  fontsLoaders
];
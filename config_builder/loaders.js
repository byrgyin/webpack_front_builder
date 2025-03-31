import MiniCssExtractPlugin from "mini-css-extract-plugin";

/*-- CSS CONFIG  --*/
export const scssLoaderConfig = {
    test: /\.scss$/,
    use: [
        process.env.NODE_ENV === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
    ]
};
/*-- END CSS CONFIG  --*/

/*-- PUG-TO-HTML CONFIG  --*/
export const pugConfigLoader = {
    test: /\.pug$/,
    use: ["pug-loader"]
}
/*-- END PUG-TO-HTML CONFIG  --*/
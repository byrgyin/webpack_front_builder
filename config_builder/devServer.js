import path from "node:path";

const __dirname = path.resolve();
export const devSeverConfig = {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true,
    hot: true,
    liveReload: true,
    compress: true,
    historyApiFallback: true,
    watchFiles: ["src/**/*.pug"]
}
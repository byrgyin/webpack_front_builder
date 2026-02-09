import path from "node:path";

const __dirname = path.resolve();
export const devSeverConfig = {
    static: {
        directory: path.resolve(__dirname, 'dist'),
        watch: true,
    },
    port: 3000,
    open: true,
    hot: true,
    liveReload: true,
    compress: true,
    historyApiFallback: false,
    watchFiles: {
        paths: ["src/**/*.pug", "src/**/*.scss", "src/**/*.js"],
        options: {
            usePolling: true,
        },
    },
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    client: {
        overlay: {
            errors: true,
            warnings: false,
        },
        progress: true,
    },
};
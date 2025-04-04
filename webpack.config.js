import path from "node:path";
import dotenv from "dotenv"
import {scssLoaderConfig, pugConfigLoader} from "./config_builder/loaders.js";
import {cssMiniCssExtract, pluginGenerateHtml} from "./config_builder/plugins.js";
import {devSeverConfig} from "./config_builder/devServer.js";
import {glob} from "glob";

dotenv.config();

const __dirname = path.resolve();

const generateEntries = () => {
  const entries = {
    main: path.resolve(__dirname, "src/index.js"), // Основной входной файл
  };

  let componentFiles = glob.sync("src/components/**/*.scss");
  componentFiles = componentFiles.map(file => {
    return path.join(__dirname, file);
  });

  componentFiles.forEach((file) => {
    let base = path.basename(file, '.scss');
    console.log(base)
    if(base !== 'header' && base !== 'footer'){
      const componentName = path
        .dirname(file)
        .split(path.sep)
        .pop(); // Берем имя последней папки
      const entryName = componentName;

      if (!entries[entryName]) {
        entries[entryName] = file;
      }
    }
  });

  return entries;
};

/*-- END devServer CONFIG  --*/
const config = {
  mode: process.env.NODE_ENV || "development",
  entry: generateEntries(),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    clean: true,
  },
  module: {
    rules: [scssLoaderConfig, pugConfigLoader]
  },
  plugins: [pluginGenerateHtml, cssMiniCssExtract],
  devServer: devSeverConfig,
};

export default config;
import path from "node:path";
import {glob} from "glob";
const __dirname = path.resolve();

const generateEntries = ()=>{
  const entries = {
    main: path.resolve(__dirname, "src/index.js"), // Основной входной файл
  };

  // Ищем все SCSS-файлы в папке components
  const componentFiles = glob.sync(
    path.resolve(__dirname, "src/components/**/*.scss")
  );
  console.log('LLOOGDFOGDFGSADFGFDASSADFSDAFSD');
  console.log(componentFiles);
  console.log('LLOOGDFOGDFGSADFGFDASSADFSDAFSD');
  // Добавляем каждый SCSS-файл как отдельную точку входа
  componentFiles.forEach((file) => {
    // Извлекаем имя компонента из пути (например, "header" из "components/header/header.scss")
    const componentName = path
      .dirname(file)
      .split(path.sep)
      .pop(); // Берем имя последней папки
    const entryName = componentName; // Имя точки входа будет совпадать с именем папки

    // Добавляем в entries, если это еще не основной файл
    if (!entries[entryName]) {
      entries[entryName] = file;
    }
  });

  return entries;
}
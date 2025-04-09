import {glob, globSync, globStream, globStreamSync, Glob} from "glob";
import path from "node:path";
const __dirname = path.resolve();


const generateEntries = async ()=>{
  const entries = {
    main: path.resolve(__dirname, "src/index.js"),
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
        .pop();
      const entryName = componentName;

      if (!entries[entryName]) {
        entries[entryName] = file;
      }
    }
  });
  console.log(entries)
}
generateEntries();

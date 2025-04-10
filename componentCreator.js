#!/usr/bin/env node
import path from "node:path";
import fs from "fs";
import chalk from "chalk";

const args = process.argv;

if (args.length === 2) {
  console.error(chalk.red("Arguments should be"));
  process.exit(0);
}

const __dirname = path.resolve();
const componentArg = args[2];
const componentName = args[3];


if (componentArg !== "components") {
  console.error(chalk.red(`Unknown Command ${componentArg}`));
  process.exit(0);
}

const componentFolder = path.resolve(
  __dirname,
  "src",
  "components",
  componentName
);

console.log(componentFolder)

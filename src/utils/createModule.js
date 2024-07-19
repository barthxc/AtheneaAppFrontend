import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const moduleName = process.argv[2];

if (!moduleName) {
  console.error("Por favor, proporciona un nombre para el módulo.");
  process.exit(1);
}

const baseDir = path.join(__dirname, "..", moduleName);

const directories = [
  "components",
  "pages",
  "schemas",
  "services",
  "stores",
  "types",
  path.join("types", "enums"),
  path.join("types", "interfaces"),
];

directories.forEach((dir) => {
  const dirPath = path.join(baseDir, dir);
  fs.mkdirSync(dirPath, { recursive: true });
  console.log(`Carpeta creada: ${dirPath}`);
});

console.log(
  `Estructura de carpetas para el módulo '${moduleName}' creada con éxito.`
);

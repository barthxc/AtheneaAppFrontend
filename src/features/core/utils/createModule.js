import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const moduleName = process.argv[2];

if (!moduleName) {
	console.error("Por favor, proporciona un nombre para el módulo.");
	process.exit(1);
}

const baseDir = path.join(__dirname, "..", "..", moduleName);

const directoriesAndFiles = [
	"components",
	path.join("components", "index.ts"),
	"pages",
	path.join("pages", "index.ts"),
	"schemas",
	path.join("schemas", "index.ts"),
	"services",
	path.join("services", "index.ts"),
	"stores",
	path.join("stores", "index.ts"),
	"types",
	path.join("types", "index.ts"),
	path.join("types", `${moduleName}.interface.ts`),
	path.join("types", `${moduleName}.type.ts`),
	path.join("types", `${moduleName}.enum.ts`),
];

// Crear carpetas y archivos
directoriesAndFiles.forEach((item) => {
	const itemPath = path.join(baseDir, item);
	if (path.extname(item)) {
		// Si el item tiene una extensión, es un archivo
		fs.writeFileSync(itemPath, "", { flag: "w" }); // Crear archivo vacío
		console.log(`Archivo creado: ${itemPath}`);
	} else {
		// Si no tiene extensión, es una carpeta
		fs.mkdirSync(itemPath, { recursive: true });
		console.log(`Carpeta creada: ${itemPath}`);
	}
});

console.log(`Estructura de carpetas y archivos para el módulo '${moduleName}' creada con éxito.`);

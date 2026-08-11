import path from "path";
import { fileURLToPath } from "url";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


/**
 * Lee un archivo JSON desde la carpeta de base de datos y lo parsea.
 *
 * @param {string} filename - Nombre del archivo JSON a leer.
 * @returns {Object} El contenido parseado del archivo JSON.
 * @throws {Error} Si el archivo no existe.
 */
export const readFileJson = (filename) => {
    let pathFile = path.join(__dirname, "..", "db", filename);

    if(!fs.existsSync(pathFile)){
        throw new Error(`El archivo "${filename}" no existe.`);
    }

    let data = fs.readFileSync(pathFile, "utf-8");
    return JSON.parse(data);
}


/**
 * Escribe datos en un archivo JSON dentro de la carpeta de base de datos.
 *
 * @param {string} filename - Nombre del archivo JSON a escribir.
 * @param {Object} data - Datos que se escribirán en el archivo.
 * @returns {boolean} True si la escritura se completó correctamente.
 * @throws {Error} Si el archivo no existe.
 */
export const writeFileJson = (filename, data) => {
    let pathFile = path.join(__dirname, "..", "db", filename);

    if(!fs.existsSync(pathFile)){
        throw new Error(`El archivo "${filename}" no existe.`);
    }
    fs.writeFileSync(pathFile, JSON.stringify(data, null, 4), "utf-8");
    return true;
}
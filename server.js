import yargs from 'yargs';
import app from "./src/app.js";

const argv = yargs(process.argv.slice(2))
    .option('p', {
        alias: 'port',
        demandOption: true,
        default: 3000,
        describe: 'Define el puerto del servidor node',
        type: 'number'
    })
    .parse()
;

const PORT = argv.port;

// Inicia el servidor con el puerto proporcionado por línea de comandos.
app.listen(PORT, ()=> {
    console.log("Servidor escuchando en http://localhost:" + PORT);
});
import express from "express";
import { create } from "express-handlebars";
import * as path from "path";
import { fileURLToPath } from "url";

import userRoutes from "./routes/users.routes.js";
import viewsRoutes from "./routes/views.routes.js";



const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

//INICIO CONFIGURACIÓN DE HANDLEBARS COMO MOTOR DE PLANTILLA 
const hbs = create({
	partialsDir: [
		path.join(__dirname, "views/partials/"),
	],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

//FIN CONFIGURACIÓN DE HANDLEBARS COMO MOTOR DE PLANTILLA 

//MIDDLEWARES GLOBALES
app.use(express.json()); //req.body
app.use(express.urlencoded({extended:true})); //req.body
app.use(express.static('public'));

//MIDDLEWARE REGISTRO DE LOGS

app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
});	

//ESTABLECER LAS RUTAS DE LAS VISTAS
app.use("/", viewsRoutes);

//ESTABLECER LAS RUTAS DE LA API
app.use(["/api/users", "/api/usuarios"], userRoutes);

export default app;

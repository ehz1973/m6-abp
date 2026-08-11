import express from "express";
import { create } from "express-handlebars";
import * as path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import fs from "node:fs";

import userRoutes from "./routes/users.routes.js";
import viewsRoutes from "./routes/views.routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// Configuración de Handlebars como motor de plantillas.
const hbs = create({
	partialsDir: [
		path.join(__dirname, "views/partials/"),
	],
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

// Middleware para parsear JSON, datos de formularios y generar logs.
app.use(express.json()); //req.body
app.use(express.urlencoded({extended:true})); //req.body
app.use(express.static("public"));

// Registra logs de acceso a un archivo para auditoría y depuración.
const accessLogStream = fs.createWriteStream(
  path.resolve(__dirname, "../logs/access.log"), 
  { flags: 'a' }
);
app.use(morgan("combined", { stream: accessLogStream }));
/*
app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
});	
*/

// Rutas que renderizan vistas del frontend.
app.use("/", viewsRoutes);

// Usa el mismo controlador para dos prefijos de API.
app.use(["/api/users", "/api/usuarios"], userRoutes);

export default app;

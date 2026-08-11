# CRUD de usuarios

Aplicación web CRUD de usuarios construida con Node.js, Express y Handlebars.

## Descripción

Este proyecto ofrece una interfaz para gestionar usuarios mediante una API REST y vistas renderizadas con Handlebars. Los usuarios se almacenan en un archivo JSON en `src/db/users.json`.

## Características

- Listado de usuarios
- Creación de usuarios
- Edición de usuarios
- Eliminación de usuarios
- Rutas de API para consultas y operaciones REST
- Validación básica del cuerpo de la petición
- Logging de acceso con Morgan

## Tecnologías usadas

- Node.js
- Express 5
- Express Handlebars
- UUID
- Morgan
- Yargs

## Instalación

1. Clona el repositorio o descarga el proyecto.
2. En la raíz del proyecto, instala dependencias:

```bash
npm install
```

## Uso

### Ejecutar en modo desarrollo

```bash
npm run dev
```

### Ejecutar en modo producción

```bash
npm start
```

El servidor se ejecuta por defecto en el puerto `3001` cuando se usa `npm run dev`. Puedes cambiarlo con el flag `-p` o `--port` al iniciar la aplicación:

```bash
node --watch server.js --port 4000
```

## Rutas principales

### Vistas

- `/` - Página de inicio
- `/users` - Listado de usuarios
- `/users/add` - Formulario para agregar un nuevo usuario
- `/users/edit/:id` - Formulario para editar un usuario existente
- `/users/profile/:id` - Vista de perfil de usuario

### API

- `GET /api/users` - Obtener todos los usuarios
- `GET /api/users/:id` - Obtener usuario por ID
- `GET /api/users/email/:email` - Obtener usuario por email
- `POST /api/users` - Crear un nuevo usuario
- `PUT /api/users/:id` - Actualizar usuario existente
- `DELETE /api/users/:id` - Eliminar usuario

## Estructura principal

- `server.js` - Punto de entrada del servidor
- `src/app.js` - Configuración de Express y middlewares
- `src/routes/` - Definición de rutas de vistas y API
- `src/controllers/` - Lógica de controladores para vistas y usuarios
- `src/models/` - Modelo `User` para operaciones sobre usuarios
- `src/utils/` - Funciones utilitarias para lectura/escritura de JSON
- `src/views/` - Plantillas Handlebars
- `public/` - Archivos estáticos y scripts front-end

## Notas

- El almacenamiento es en un archivo JSON local, por lo que no está pensado para producción ni para uso concurrente intensivo.
- Asegúrate de contar con `node` y `npm` instalados en tu entorno.

## Licencia

Este proyecto no especifica licencia en `package.json`.

## GitHub

- **Repositorio:** https://github.com/ehz1973/m6-abp

## Autor

Exequiel Hernandez

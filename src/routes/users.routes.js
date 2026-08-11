import express from 'express';
import * as userController from "../controllers/users.controller.js";
import validateBody from '../middlewares/validate_body.js';

const router = express.Router();

// Prefijo /api/users o /api/usuarios

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.get("/email/:email", userController.getUserByEmail);

// Valida que la petición tenga body antes de crear o actualizar.
router.post("/", validateBody, userController.createUser);

router.put("/:id", validateBody, userController.updateUser);

router.delete("/:id", userController.deleteUser);

export default router;
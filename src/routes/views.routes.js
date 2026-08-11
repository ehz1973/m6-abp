import express from "express";

import * as viewsController from "../controllers/views.controller.js";

const router = express.Router();

// Rutas que renderizan vistas del frontend.
router.get("/", viewsController.homeView);

router.get("/users", viewsController.usersView);

router.get("/users/profile/:id", viewsController.profileUserView);

router.get("/users/edit/:id", viewsController.userEditView);

router.get("/users/add", viewsController.userAddView);

export default router;

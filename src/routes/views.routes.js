import express from "express";

import * as viewsController from "../controllers/views.controller.js";

const router = express.Router();

//VISTA HOME
router.get("/", viewsController.homeView);

//VISTA USERS
router.get("/users", viewsController.usersView);

//VISTA PROFILE USERS
router.get("/users/profile/:id", viewsController.profileUserView);

//VISTA EDIT USERS
router.get("/users/edit/:id", viewsController.userEditView);

//VISTA ADD USERS
router.get("/users/add", viewsController.userAddView);

export default router;

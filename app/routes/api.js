import express from "express";
const router = express.Router()
import * as UsersController from "../controller/UserController.js";
// router.post("/register", UsersController.registerController);
router.post("/register", UsersController.registerController);

export default router;
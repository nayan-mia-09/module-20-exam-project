import express from "express";
const router = express.Router()
import * as UsersController from "../controller/UserController.js";
import * as BlogController from "../controller/BlogController.js"

router.post("/register", UsersController.registerController);

router.post("/login", UsersController.loginController);

// Blog api
router.post("/create-blog", BlogController.CreateBlogController);

export default router;
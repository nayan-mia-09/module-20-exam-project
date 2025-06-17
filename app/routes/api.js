import express from "express";
const router = express.Router()
import * as UsersController from "../controller/UserController.js";
import * as BlogController from "../controller/BlogController.js"
import AuthMiddleware from "../middleware/AuthMiddleware.js";


router.post("/register", UsersController.registerController);

router.post("/login", UsersController.loginController);

// Blog api
router.post("/create-blog", BlogController.CreateBlogController);
router.get("/blog-read", AuthMiddleware, BlogController.BlogReadController);




export default router;
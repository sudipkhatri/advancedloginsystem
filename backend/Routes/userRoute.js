import express from "express";
import { getInfo, login, logout, register, verifyToken } from "../Controller/userController.js";

const userRouter = express.Router();

userRouter.post("/register", register)
userRouter.post("/login", login);
userRouter.get("/logout", logout);
userRouter.get("/user-info", verifyToken, getInfo);


export default userRouter;
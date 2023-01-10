import express from "express";
import { see, edit, startGithubLogin, finishGithubLogin, logout } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", edit);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);
userRouter.get("/logout", logout);
userRouter.get(":id", see);

export default userRouter;
import express from "express";

import { register } from "../controllers/user/userControllers";

const userRouter = express.Router();

userRouter.post("/", register);

export default userRouter;

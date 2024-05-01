import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import asyncHandler from "express-async-handler";

import UserModel from "../../models/userModel";

/**
 * @description Register a user
 * @route       POST /api/users
 * @access      Public
 */
const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    res.json({ message: "Register User" });

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      const error = createHttpError(400, "All fields are required");
      return next(error);
    }

    //Check if users exist
    const userExist = await UserModel.findOne({ email });

    if (userExist) {
      const error = createHttpError(400, "User already exists");
      return next(error);
    }

    //Create a user and save data in database
    const user = await UserModel.create({ name, email, password });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    }
  }
);

export { register };

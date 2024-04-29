import { NextFunction, Request, Response } from "express";

const register = async (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Register User" });
};

export { register };

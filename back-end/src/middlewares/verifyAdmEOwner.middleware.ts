import { NextFunction, Request, Response } from "express";

const verifyAdmEOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isAdm && !req.user.id) {
    return res.status(401).json({ message: "User not authorization" });
  }
  return next();
};
export default verifyAdmEOwnerMiddleware;

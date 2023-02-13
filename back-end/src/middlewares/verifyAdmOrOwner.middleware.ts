import { NextFunction, Request, Response } from "express";

const verifyAdmOrOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isAdm && req.user.id !== req.params.id) {
    return res.status(401).json({ message: "User not authorization" });
  }
  return next();
};
export default verifyAdmOrOwnerMiddleware;

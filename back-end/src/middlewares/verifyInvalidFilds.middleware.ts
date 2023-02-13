import { NextFunction, Request, Response } from "express";

const verifyInvalidFilds = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.isAdm !== undefined || req.body.id !== undefined) {
    return res.status(401).json({
      message: "Updated not authorization",
    });
  }
  return next();
};

export default verifyInvalidFilds;

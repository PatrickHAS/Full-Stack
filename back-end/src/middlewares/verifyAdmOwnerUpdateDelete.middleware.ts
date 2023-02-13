import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";

const verifyAdmOwnerUpdateDeleteMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOne({
    where: {
      id: req.params.id,
    },
    relations: {
      users: true,
    },
  });
  if (!req.user.isAdm && req.user.id !== contact?.users.id) {
    return res.status(401).json({ message: "User not authorization" });
  }
  return next();
};
export default verifyAdmOwnerUpdateDeleteMiddleware;

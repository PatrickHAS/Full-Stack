import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import userCreateService from "../../services/user/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  const {
    id,
    name,
    email,
    phone,
    password,
    isAdm,
    isActive,
    createdAt,
    updatedAt,
  } = req.newUser;
  const user = await userCreateService({
    id,
    name,
    email,
    phone,
    password,
    isAdm,
    isActive,
    createdAt,
    updatedAt,
  });
  return res.status(201).json(instanceToPlain(user));
};

export default userCreateController;

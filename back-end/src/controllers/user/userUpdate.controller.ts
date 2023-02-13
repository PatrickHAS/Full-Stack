import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/user";
import userUpdateService from "../../services/user/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  const user: IUserUpdate = req.body;
  const { id } = req.params;
  const userUpdate = await userUpdateService(user, id);
  return res.status(201).json(instanceToPlain(userUpdate));
};
export default userUpdateController;

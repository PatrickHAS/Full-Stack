import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import userListService from "../../services/user/userList.service";

const userListController = async (req: Request, res: Response) => {
  const adm: boolean = req.user.isAdm;
  const id: string = req.user.id;
  const users = await userListService(adm, id);
  return res.status(200).json(instanceToPlain(users));
};
export default userListController;

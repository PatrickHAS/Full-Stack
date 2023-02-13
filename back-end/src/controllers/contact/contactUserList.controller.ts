import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import contactUserListService from "../../services/contact/contactUserList.service";

const contactUserListController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const contacts = await contactUserListService(userId);
  return res.status(200).json(instanceToPlain(contacts));
};
export default contactUserListController;

import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import contactListService from "../../services/contact/contactList.service";

const contactListController = async (req: Request, res: Response) => {
  const contacts = await contactListService();
  return res.status(200).json(instanceToPlain(contacts));
};
export default contactListController;

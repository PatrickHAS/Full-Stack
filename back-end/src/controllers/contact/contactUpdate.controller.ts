import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IContactUpdate } from "../../interfaces/contact";
import contactUpdateService from "../../services/contact/contactUpdate.service";

const contactUpdateController = async (req: Request, res: Response) => {
  const contact: IContactUpdate = req.body;
  const { id } = req.params;
  const userUpdate = await contactUpdateService(contact, id);
  return res.status(201).json(instanceToPlain(userUpdate));
};
export default contactUpdateController;

import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IContactRequest } from "../../interfaces/contact";
import contactCreateService from "../../services/contact/contactCreate.service";

const contactCreateController = async (req: Request, res: Response) => {
  const usersId = req.user.id;
  const { id, name, email, phone, createdAt }: IContactRequest = req.body;
  const contactCreate = await contactCreateService({
    id,
    name,
    email,
    phone,
    createdAt,
    usersId,
  });
  return res.status(201).json(instanceToPlain(contactCreate));
};
export default contactCreateController;

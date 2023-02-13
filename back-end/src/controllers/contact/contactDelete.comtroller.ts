import { Request, Response } from "express";
import contactDeleteService from "../../services/contact/contactDelete.service";

const contactDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await contactDeleteService(id);
  return res.status(204).send();
};
export default contactDeleteController;

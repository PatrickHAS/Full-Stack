import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/user";
import userLoginService from "../../services/login/userLogin.service";

const userLoginController = async (req: Request, res: Response) => {
  const login: IUserLogin = req.body;
  const token = await userLoginService(login);
  return res.status(200).json({ token });
};
export default userLoginController;

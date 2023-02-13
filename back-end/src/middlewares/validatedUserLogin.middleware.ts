import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { IUserLogin } from "../interfaces/user";

export const userLoginSchema: yup.SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const validateUserLogin =
  (schema: yup.SchemaOf<IUserLogin>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });
        req.newLogin = validatedData;
        next();
      } catch (error: any) {
        return res.status(400).json({
          error: error.errors?.join(", "),
        });
      }
    } catch (error) {
      next(error);
    }
  };

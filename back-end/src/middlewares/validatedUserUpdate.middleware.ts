import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { IUserUpdate } from "../interfaces/user";
import bcrypt from "bcrypt";

export const userUpdateSchema: yup.SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  phone: yup.string().notRequired(),
  password: yup
    .string()
    .transform((pwd) => bcrypt.hashSync(pwd, 10))
    .notRequired(),
  isActive: yup.boolean().notRequired(),
});

export const validateUserUpddate =
  (schema: yup.SchemaOf<IUserUpdate>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });
        req.newUpdate = validatedData;

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

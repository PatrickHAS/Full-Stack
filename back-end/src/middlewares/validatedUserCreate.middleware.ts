import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import * as yup from "yup";
import { IUserCreate } from "../interfaces/user";
import { v4 as uuidv4 } from "uuid";

export const userCreateSchema: yup.SchemaOf<IUserCreate> = yup.object().shape({
  id: yup
    .string()
    .transform(() => uuidv4())
    .default(() => uuidv4())
    .notRequired(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  password: yup
    .string()
    .transform((pwd) => bcrypt.hashSync(pwd, 10))
    .required(),
  isAdm: yup.boolean().default(false),
  isActive: yup.boolean().default(true),
  createdAt: yup.date().default(function () {
    return new Date();
  }),
  updatedAt: yup.date().default(function () {
    return new Date();
  }),
});

export const validateUserCreate =
  (schema: yup.SchemaOf<IUserCreate>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });
        req.newUser = validatedData;
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

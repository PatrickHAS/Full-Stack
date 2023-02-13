import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { IContactCreate } from "../interfaces/contact";
import { v4 as uuidv4 } from "uuid";

export const contactCreateSchema: yup.SchemaOf<IContactCreate> = yup
  .object()
  .shape({
    id: yup
      .string()
      .transform(() => uuidv4())
      .default(() => uuidv4())
      .notRequired(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    createdAt: yup.date().default(function () {
      return new Date();
    }),
  });

export const validateContactCreate =
  (schema: yup.SchemaOf<IContactCreate>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });
        req.newContact = validatedData;
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

import * as express from "express";
import { IContactCreate, IContactRequest } from "../../interfaces/contact";
import { IUserCreate, IUserLogin, IUserUpdate } from "../../interfaces/user";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        isAdm: boolean;
      };
      newUser: IUserCreate;
      newLogin: IUserLogin;
      newUpdate: IUserUpdate;
      newContact: IContactCreate;
    }
  }
}

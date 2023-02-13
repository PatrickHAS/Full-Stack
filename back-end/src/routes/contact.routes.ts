import { Router } from "express";
import contactCreateController from "../controllers/contact/contactCreate.controller";
import contactDeleteController from "../controllers/contact/contactDelete.comtroller";
import contactUserListController from "../controllers/contact/contactUserList.controller";
import contactUpdateController from "../controllers/contact/contactUpdate.controller";
import { AppError } from "../errors/appError";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import {
  contactCreateSchema,
  validateContactCreate,
} from "../middlewares/validatedContactCreate.middleware";
import verifyAdmEOwnerMiddleware from "../middlewares/verifyAdmEOwner.middleware";
import verifyAdmMiddleware from "../middlewares/verifyAdm.middleware";
import contactListController from "../controllers/contact/contactList.controller";
import verifyAdmOwnerUpdateDeleteMiddleware from "../middlewares/verifyAdmOwnerUpdateDelete.middleware";

const conatctRouter = Router();

conatctRouter.post(
  "/contact",
  ensureAuthMiddleware,
  validateContactCreate(contactCreateSchema),
  contactCreateController
);

conatctRouter.get(
  "/contact/user",
  ensureAuthMiddleware,
  verifyAdmEOwnerMiddleware,
  contactUserListController
);

conatctRouter.get(
  "/contact",
  ensureAuthMiddleware,
  verifyAdmMiddleware,
  contactListController
);

conatctRouter.patch(
  "/contact/:id",
  ensureAuthMiddleware,
  verifyAdmOwnerUpdateDeleteMiddleware,
  contactUpdateController
);

conatctRouter.delete(
  "/contact/:id",
  ensureAuthMiddleware,
  verifyAdmOwnerUpdateDeleteMiddleware,
  contactDeleteController
);

conatctRouter.get("/error", async (req, res) => {
  throw new AppError("Debug error route", 500);
});

export default conatctRouter;

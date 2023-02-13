import { Router } from "express";
import userLoginController from "../controllers/login/userLogin.controller";
import userCreateController from "../controllers/user/userCreate.controller";
import userListController from "../controllers/user/userList.controller";
import userSoftDeleteController from "../controllers/user/userSoftDelete.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";
import { AppError } from "../errors/appError";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import {
  userCreateSchema,
  validateUserCreate,
} from "../middlewares/validatedUserCreate.middleware";
import {
  userLoginSchema,
  validateUserLogin,
} from "../middlewares/validatedUserLogin.middleware";
import {
  userUpdateSchema,
  validateUserUpddate,
} from "../middlewares/validatedUserUpdate.middleware";
import verifyAdmEOwnerMiddleware from "../middlewares/verifyAdmEOwner.middleware";
import verifyAdmOrOwnerMiddleware from "../middlewares/verifyAdmOrOwner.middleware";
import verifyInvalidFilds from "../middlewares/verifyInvalidFilds.middleware";

const userRouter = Router();

userRouter.post(
  "/users",
  validateUserCreate(userCreateSchema),
  userCreateController
);

userRouter.post(
  "/login",
  validateUserLogin(userLoginSchema),
  userLoginController
);

userRouter.get(
  "/users",
  ensureAuthMiddleware,
  verifyAdmEOwnerMiddleware,
  userListController
);

userRouter.patch(
  "/users/:id",
  ensureAuthMiddleware,
  verifyAdmOrOwnerMiddleware,
  verifyInvalidFilds,
  validateUserUpddate(userUpdateSchema),
  userUpdateController
);

userRouter.delete(
  "/users/:id",
  ensureAuthMiddleware,
  verifyAdmOrOwnerMiddleware,
  userSoftDeleteController
);

userRouter.get("/error", async (req, res) => {
  throw new AppError("Debug error route", 500);
});

export default userRouter;

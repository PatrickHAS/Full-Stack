import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/user";

const userLoginService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const account = users.find((user) => user.email === email);

  if (!account) {
    throw new AppError("Account not found", 403);
  }

  if (!bcrypt.compareSync(password, account.password)) {
    throw new AppError("Wrong email/password", 403);
  }

  if (!account?.isActive) {
    throw new AppError("Inactive user");
  }

  const token = jwt.sign(
    { isAdm: account.isAdm },
    String(process.env.SECRET_KEY),
    {
      expiresIn: "24h",
      subject: account.id,
    }
  );
  return token;
};

export default userLoginService;

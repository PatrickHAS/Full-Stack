import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserCreate } from "../../interfaces/user";

const userCreateService = async ({
  id,
  name,
  email,
  phone,
  password,
  isAdm,
  isActive,
  createdAt,
  updatedAt,
}: IUserCreate): Promise<User> => {
  const usersRepository = AppDataSource.getRepository(User);
  const findUser = await usersRepository.find();
  const emailAlreadyExists = findUser.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError("Email already in use", 403);
  }

  const user = usersRepository.create({
    id,
    name,
    email,
    phone,
    password,
    isAdm,
    isActive,
    createdAt,
    updatedAt,
  });

  await usersRepository.save(user);

  return user;
};

export default userCreateService;

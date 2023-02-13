import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/user";

const userUpdateService = async (
  { name, email, password, phone, isActive }: IUserUpdate,
  id: string
): Promise<User | Array<string | number | boolean>> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  await userRepository.update(id, {
    name: name ? name : findUser.name,
    email: email ? email : findUser.email,
    phone: phone ? phone : findUser.phone,
    password: password ? password : findUser.password,
    isActive: isActive ? isActive : findUser.isActive,
  });

  const user = await userRepository.findOneBy({ id });

  return user!;
};

export default userUpdateService;

import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const userListService = async (
  adm: boolean,
  id: string
): Promise<User[] | User | undefined> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const userBy = users.find((user) => user.id === id);

  if (adm === false) {
    return userBy;
  }

  return users;
};
export default userListService;

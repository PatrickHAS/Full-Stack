import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";

const contactUserListService = async (
  usersId: string
): Promise<User | Contact[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const userContactList = await userRepository.findOne({
    where: {
      id: usersId,
    },
    relations: {
      contacts: true,
    },
  });

  return userContactList?.contacts!;
};
export default contactUserListService;

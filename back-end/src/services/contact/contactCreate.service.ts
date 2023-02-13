import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IContactCreate, IContactRequest } from "../../interfaces/contact";

const contactCreateService = async ({
  id,
  name,
  email,
  phone,
  createdAt,
  usersId,
}: IContactRequest): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: usersId });

  const contactstUser = await userRepository.findOneBy({
    id: usersId,
    contacts: {
      email: email,
    },
  });

  if (contactstUser) {
    throw new AppError("There is already a contact with this email", 403);
  }

  const contact = contactRepository.create({
    id,
    name,
    email,
    phone,
    createdAt,
    users: user!,
  });

  await contactRepository.save(contact);

  return contact;
};
export default contactCreateService;

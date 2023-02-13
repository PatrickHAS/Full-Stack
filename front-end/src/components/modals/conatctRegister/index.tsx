import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  IContactRegister,
  useContactRegister,
} from "../../../contexts/contactRegister";
import { schemaRegisterContact } from "../../../validator/schema";
import {
  ModalContactRegisters,
  ModalContainer,
  RegisterForm,
  TitleClose,
} from "./styles";
import { BsFillBackspaceFill } from "react-icons/bs";

const ContactRegister = () => {
  const { RegisterContactSubmit, isModal, setIsModal } = useContactRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactRegister>({
    resolver: yupResolver(schemaRegisterContact),
  });

  return (
    <ModalContactRegisters>
      <ModalContainer>
        <TitleClose>
          <h2>Cadastrar Contato</h2>
          <button onClick={() => setIsModal(!isModal)}>
            <BsFillBackspaceFill />
          </button>
        </TitleClose>
        <RegisterForm onSubmit={handleSubmit(RegisterContactSubmit)}>
          <div>
            <label htmlFor="name">Nome</label>
            <p>{errors.name?.message}</p>
          </div>
          <input
            type="text"
            id="name"
            placeholder="Digite aqui o nome"
            {...register("name")}
          />
          <div>
            <label htmlFor="email">Email</label>
            <p>{errors.email?.message}</p>
          </div>
          <input
            type="text"
            id="email"
            placeholder="Digite aqui o email"
            {...register("email")}
          />
          <div>
            <label htmlFor="phone">Phone</label>
            <p>{errors.phone?.message}</p>
          </div>
          <input
            type="text"
            id="phone"
            placeholder="Digite aqui o telefone"
            {...register("phone")}
          />
          <button type="submit">Cadastrar</button>
        </RegisterForm>
      </ModalContainer>
    </ModalContactRegisters>
  );
};

export default ContactRegister;

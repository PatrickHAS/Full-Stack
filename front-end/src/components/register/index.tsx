import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegisterData, useRegisterContext } from "../../contexts/register";
import { formRegisterSchema } from "../../validator/schema";
import {
  HeaderContainer,
  LabelDiv,
  RegisterContainer,
  TitleBack,
} from "./styles";

const Register = () => {
  const { navigate, registerSubmit } = useRegisterContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterData>({
    resolver: yupResolver(formRegisterSchema),
  });

  return (
    <>
      <HeaderContainer>
        <TitleBack>
          <h1>Your Contacts</h1>
          <button onClick={() => navigate("/")}>Voltar</button>
        </TitleBack>
      </HeaderContainer>
      <RegisterContainer>
        <h3>Register</h3>
        <span>Crie sua conta e gerencie seus contatos.</span>
        <form onSubmit={handleSubmit(registerSubmit)}>
          <LabelDiv>
            <label htmlFor="name">Nome</label>
            <p>{errors.name?.message}</p>
          </LabelDiv>
          <input
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />

          <LabelDiv>
            <label htmlFor="email">Email</label>
            <p>{errors.email?.message}</p>
          </LabelDiv>
          <input
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />

          <LabelDiv>
            <label htmlFor="phone">Phone</label>
            <p>{errors.phone?.message}</p>
          </LabelDiv>
          <input
            type="text"
            id="contact"
            placeholder="Digite aqui o telefone"
            {...register("phone")}
          />

          <LabelDiv>
            <label htmlFor="password">Senha</label>
            <p>{errors.password?.message}</p>
          </LabelDiv>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />

          <LabelDiv>
            <label htmlFor="passwordConfirm">Confirme sua senha</label>
            <p>{errors.passwordConfirm?.message}</p>
          </LabelDiv>
          <input
            type="password"
            id="passwordConfirm"
            placeholder="Confirme sua senha"
            {...register("passwordConfirm")}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </RegisterContainer>
    </>
  );
};
export default Register;

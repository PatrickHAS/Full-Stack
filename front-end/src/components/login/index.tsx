import { ILoginData, useLoginContext } from "../../contexts/login";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formLoginSchema } from "../../validator/schema";
import { BtnRegister, H1, LabelErrors, LoginContainer } from "./styles";

const Login = () => {
  const { onSubmit, navigate } = useLoginContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({ resolver: yupResolver(formLoginSchema) });

  return (
    <>
      <H1>Your Contacts</H1>
      <LoginContainer>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LabelErrors>
            <label htmlFor="email">Email</label>
            <p>{errors.email?.message}</p>
          </LabelErrors>
          <input type="text" id="email" {...register("email")} />

          <LabelErrors>
            <label htmlFor="password">Senha</label>
            <p>{errors.password?.message}</p>
          </LabelErrors>
          <input type="password" id="password" {...register("password")} />

          <button type="submit">Entrar</button>
        </form>
        <span>Ainda não possui uma conta?</span>
        <BtnRegister onClick={() => navigate("/register")}>
          Cadastra-se!
        </BtnRegister>
      </LoginContainer>
    </>
  );
};

export default Login;

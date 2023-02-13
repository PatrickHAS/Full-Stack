import { createContext, ReactNode, useContext } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import api from "../../services/Api/api";

interface IRegisterProvider {
  children: ReactNode;
}

export interface IRegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}

interface IRegisterContext {
  registerSubmit: (data: IRegisterData) => Promise<void>;
  navigate: NavigateFunction;
}

export const RegisterContext = createContext<IRegisterContext>(
  {} as IRegisterContext
);

export const RegisterProvider = ({ children }: IRegisterProvider) => {
  const navigate = useNavigate();

  const registerSubmit = async (data: IRegisterData) => {
    try {
      await api
        .post("/users", data)
        .then((res) => res.status === 201 && navigate("/"));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RegisterContext.Provider value={{ registerSubmit, navigate }}>
      {children}
    </RegisterContext.Provider>
  );
};
export const useRegisterContext = () => useContext(RegisterContext);

import { ReactNode } from "react";
import { LoginProvider } from "../contexts/login";
import { ContactRegisterProvider } from "./contactRegister";
import { RegisterProvider } from "./register";

interface IProvider {
  children: ReactNode;
}

const Provider = ({ children }: IProvider) => (
  <LoginProvider>
    <RegisterProvider>
      <ContactRegisterProvider>{children}</ContactRegisterProvider>
    </RegisterProvider>
  </LoginProvider>
);

export default Provider;

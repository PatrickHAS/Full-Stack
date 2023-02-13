import {
  useContext,
  useEffect,
  useState,
  ReactNode,
  createContext,
} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import api from "../../services/Api/api";
import { useLoginContext } from "../login";

interface IContactRegisterProvider {
  children: ReactNode;
}

export interface IContactRegister {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export interface IContactPatch {
  name?: string;
  email?: string;
  phone?: string;
}

interface IContactRegisterContext {
  addContacts(contact: IContactRegister): void;
  contacts: IContactRegister[];
  deleteContact(id: string): Promise<void>;
  getContacts(): Promise<void>;
  isModal: boolean;
  logout: () => void;
  RegisterContactSubmit: (data: IContactRegister) => Promise<void>;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: NavigateFunction;
  updateContact(id: string, data: IContactPatch): Promise<void>;
}

export const ContactRegisterContext = createContext<IContactRegisterContext>(
  {} as IContactRegisterContext
);

export const ContactRegisterProvider = ({
  children,
}: IContactRegisterProvider) => {
  const { user, setUser } = useLoginContext();
  const [contacts, setContacts] = useState<IContactRegister[]>([]);
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();

  // Registrar contato
  const RegisterContactSubmit = async (data: IContactRegister) => {
    try {
      await api
        .post("/contact", data, {
          headers: {
            Authorization: `Bearer: ${localStorage.getItem("@Token")}`,
          },
        })
        .then((res) => addContacts(res.data));
    } catch (error) {
      console.error(error);
    }
  };

  // GET Lista de contatos
  async function getContacts() {
    try {
      await api
        .get("/contact/user", {
          headers: {
            Authorization: `Bearer: ${localStorage.getItem("@Token")}`,
          },
        })
        .then((res) => setContacts(res.data));
    } catch (error) {
      console.error(error);
    }
  }

  // Atualizar contato
  const updateContact = async (id: string, data: IContactPatch) => {
    try {
      await api.patch(`/contact/${id}`, data, {
        headers: {
          Authorization: `Bearer: ${localStorage.getItem("@Token")}`,
        },
      });
      // Recarregar a lista de contatos
      getContacts();
    } catch (error) {
      console.error(error);
    }
  };

  // Deletar contact
  async function deleteContact(id: string) {
    try {
      await api.delete(`/contact/${id}`, {
        headers: {
          Authorization: `Bearer: ${localStorage.getItem("@Token")}`,
        },
      });
      const filterContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(filterContacts);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (user !== null) {
      getContacts();
    }
  }, [user, user.contacts]);

  function addContacts(contact: IContactRegister) {
    let newContacts = [...contacts, contact];
    setContacts(newContacts);
  }

  const logout = () => {
    navigate("/");
    setUser(null);
    setContacts([]);
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <ContactRegisterContext.Provider
      value={{
        addContacts,
        contacts,
        deleteContact,
        getContacts,
        isModal,
        logout,
        RegisterContactSubmit,
        setIsModal,
        navigate,
        updateContact,
      }}
    >
      {children}
    </ContactRegisterContext.Provider>
  );
};
export const useContactRegister = () => useContext(ContactRegisterContext);

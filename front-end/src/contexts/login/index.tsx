import {
  useContext,
  useState,
  createContext,
  useEffect,
  ReactNode,
} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import api from "../../services/Api/api";
import { toast } from "react-toastify";

interface ILoginProvider {
  children: ReactNode;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  isAdm: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  contacts: IContact[];
}

interface IAuthContext {
  user: IUser;
  loading: boolean;
  token: string | null;
  id: string | null;
  setUser: React.Dispatch<React.SetStateAction<IUser>> | any;
  onSubmit: (data: ILoginData) => Promise<void>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: NavigateFunction;
}

export const LoginContext = createContext<IAuthContext>({} as IAuthContext);

export const LoginProvider = ({ children }: ILoginProvider) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("@Token");
  const id = localStorage.getItem("@UserId");
  const navigate = useNavigate();

  const onSubmit = async (data: ILoginData) => {
    await api
      .post("/login", data)
      .then(async (res) => {
        api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
        const { data } = await api.get("/users");
        setUser(data);
        localStorage.setItem("@Token", res.data.token);
        localStorage.setItem("@UserId", data.id);
        navigate("/dashboard", { replace: true });

        // return toast("✅ Login realizado com sucesso!", {
        //   position: "top-right",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
      })
      .catch((err) => {
        console.error(err);

        // return toast("❌ Tente novamente!", {
        //   position: "top-right",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
      });
  };

  // Auto login
  useEffect(() => {
    async function loadLogin() {
      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const { data } = await api.get("/users");
          setUser(data);
        } catch (error) {
          window.localStorage.clear();
        }
      }
      setLoading(false);
    }
    loadLogin();
  }, [token]);

  return (
    <LoginContext.Provider
      value={{
        id,
        user,
        loading,
        navigate,
        token,
        onSubmit,
        setLoading,
        setUser,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);

import { useEffect } from "react";
import { useContactRegister } from "../../contexts/contactRegister";
import { useLoginContext } from "../../contexts/login";
import ContactRegister from "../modals/conatctRegister";
import { IoMdOptions } from "react-icons/io";
import { BiAddToQueue } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import {
  BtnLogout,
  ContactAdd,
  ContactList,
  ContainerH1Btn,
  ContainerUser,
  H1,
  Header,
  InfoUser,
  ListContainer,
  Main,
} from "./styles";

const Dashboard = () => {
  const { user, navigate } = useLoginContext();
  const { contacts, deleteContact, isModal, setIsModal, logout } =
    useContactRegister();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <>
      {isModal && <ContactRegister />}

      <Header>
        <ContainerH1Btn>
          <H1>Your Contacts</H1>
          <BtnLogout onClick={logout}>
            <BiLogOut />
          </BtnLogout>
        </ContainerH1Btn>
      </Header>
      <ContainerUser>
        <InfoUser>
          <h2>Óla, {user?.name}</h2>
          <span>{<IoMdOptions />}</span>
        </InfoUser>
      </ContainerUser>
      <Main>
        <ContactAdd>
          <h3>Contatos</h3>
          <button onClick={() => setIsModal(!isModal)}>
            <BiAddToQueue />
          </button>
        </ContactAdd>
        {contacts.length === 0 ? (
          <></>
        ) : (
          <ContactList>
            <ListContainer>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <div className="info-contact">
                    <div>
                      <p>Nome: {contact.name}</p>
                      <button onClick={() => deleteContact(contact.id)}>
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                    <p>Email: {contact.email}</p>
                    <p>Telefone: {contact.phone}</p>
                  </div>
                </li>
              ))}
            </ListContainer>
          </ContactList>
        )}
      </Main>
    </>
  );
};

export default Dashboard;

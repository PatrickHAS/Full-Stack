import styled from "styled-components";

export const ModalContactRegisters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;

  background-color: rgba(0, 0, 0, 0.4);

  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;

  background: #282c34;
  box-shadow: -2px 3px 20px 19px rgba(12, 245, 12, 1);
  border-radius: 4px;

  @media (min-width: 500px) {
    width: 60%;
  }

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 900px) {
    width: 30%;
  }
`;

export const TitleClose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;

  width: 90%;
  height: 40px;

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 19px;

    color: #f8f9fa;
  }

  button {
    border: none;
    background-color: transparent;
    align-items: center;

    font-weight: 600;
    font-size: 20px;
    line-height: 21px;

    color: #0cf50c;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 19px;

  width: 90%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    p {
      font-weight: 400;
      font-size: 9.772px;
      line-height: 0px;

      color: #f8f9fa;
    }

    label {
      font-weight: 400;
      font-size: 9.772px;
      line-height: 0px;

      color: #f8f9fa;
    }
  }

  input {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 16px;

    width: 100%;
    height: 38px;

    background: #343b41;
    border: 0.9772px solid #f8f9fa;
    border-radius: 3.20867px;
    border: none;
    color: white;
    outline: none;

    &:hover {
      cursor: pointer;
    }
  }

  button {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-bottom: 30px;
    margin-top: 30px;

    width: 100%;
    height: 38px;

    background: #0cf50c;
    border: none;
    border-radius: 4.06066px;
    color: #282c34;

    &:hover {
      cursor: pointer;
    }
  }
`;

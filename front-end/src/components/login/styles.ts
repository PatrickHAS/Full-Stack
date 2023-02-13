import styled from "styled-components";

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  font-style: normal;

  font-size: 25px;
  font-weight: 700;

  margin-top: 81px;
  margin-bottom: 100px;

  color: #17e6e6;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;

  border-radius: 3px;
  box-shadow: -2px 3px 20px 19px rgba(23, 230, 230, 0.57);

  @media (min-width: 768px) {
    width: 45%;
  }

  @media (min-width: 900px) {
    width: 55%;
  }

  @media (min-width: 1200px) {
    width: 25%;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;

    margin-top: 30px;
    margin-bottom: 22px;

    width: 39.31px;
    height: 22.46px;

    color: #f8f9fa;
  }

  span {
    width: 180px;
    height: 14.44px;

    margin-top: 27px;

    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;

    color: #17e6e6;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 18px;

    width: 90%;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
    }

    label {
      font-style: normal;

      font-weight: 400;
      font-size: 15px;
      line-height: 0px;

      color: #f8f9fa;
    }

    input {
      box-sizing: border-box;
      outline: none;

      width: 100%;
      height: 38.5px;

      background: #343b41;
      color: white;

      border: 0.9772px solid #f8f9fa;
      border-radius: 3.20867px;
    }

    input:hover {
      border: 0.9772px solid #17e6e6;
      cursor: pointer;
    }

    input:focus {
      border: 0.9772px solid #17e6e6;
    }

    p {
      display: flex;
      justify-content: end;

      font-style: normal;
      font-size: 10px;

      color: white;
    }

    button {
      box-sizing: border-box;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      font-style: normal;

      width: 100%;
      height: 38.5px;

      margin-top: 17px;

      background: #17e6e6;
      color: #282c34;
      border: none;

      border: 0.9772px solid #17e6e6;
      border-radius: 4.06066px;
    }

    button:hover {
      cursor: pointer;
      background-color: #22b8cf;
    }
  }
`;

export const LabelErrors = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
  color: #17e6e6;
  font-weight: 700;
  font-size: 12px;
`;

export const BtnRegister = styled.button`
  box-sizing: border-box;

  width: 90%;
  height: 38.5px;

  margin-top: 17px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #17e6e6;
  color: #282c34;

  border-radius: 4px;

  :hover {
    cursor: pointer;
    background-color: #22b8cf;
  }
`;

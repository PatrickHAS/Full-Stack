import { motion } from "framer-motion";
import Styled from "styled-components";

export const DashboradContainer = Styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;


    width: 90%;
    height: 100vh;

`;

export const Header = Styled(motion.header)`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 70px;

    border-bottom:#212529 2px  solid;
`;

export const ContainerH1Btn = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90%;


    @media (min-width: 768px) {
        width: 60%;
    }
`;

export const H1 = Styled.h1`
    display:flex;
    align-items: center;

    width: 150px;
    height: 14.63px;

    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #FF577F;

    @media (min-width: 768px) {
        width: 250px;
        font-size: 20px;
    }
`;

export const BtnLogout = Styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    padding:10px;

    background: #212529;
    color: white;
    border-radius: 4px;
    border: none;

    :hover {
        background:#495057;
        cursor: pointer;
    }

    @media (min-width: 768px) {
        width: 50px;
        font-size: 20px;
    }
`;

export const ContainerUser = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 130px;

    border-bottom:#212529 2px  solid;
`;

export const InfoUser = Styled.div`
    display: flex;
    justify-content: space-between;
    gap:15px;

    width: 90%;

    h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;

        color: #F8F9FA;
    }

    span {
        display: flex;
        align-items: center;

        font-weight: 400;
        font-size: 26px;
        line-height: 22px;

        color: #868E96;
    }

    @media (min-width: 768px) {
        justify-content: space-between;
        flex-direction: inherit;
        width:60%;
    }
`;

export const Main = Styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`;

export const ContactAdd = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90%;
    margin-top: 26px;

    h3 {
        display: flex;
        align-items: start;

        width: 94px;
        height: 18px;

        font-weight: 600;
        font-size: 16px;
        line-height: 18px;

        color: #F8F9FA;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 35px;
        height: 35px;

        
        font-size: 18px;

        background: #212529;
        border-radius: 4px;
        border: none;

        color: white;

        &:hover {
            background:#495057;
            cursor: pointer;
        }
    }

    @media (min-width: 768px) {
        width: 60%;
    }
`;

export const ContactList = Styled.ul`
    display:flex;
    flex-direction: column;
    align-items: center;
    overflow-x: auto;

    padding: 0;

    width: 90%;
    height: 90%;

    margin-top: 20px;

    background: #212529;
    border-radius: 4px;

    @media (min-width: 768px) {
        width: 60%;
    }
`;

export const ListContainer = Styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 20px;

    width: 95%;

    li {
        display: flex; 
        justify-content: space-between;
        align-items: center;

        margin-bottom: 20px;

        width: 100%;
        

        background: #121214;
        border-radius: 3px;

        .info-contact {
            display: flex;
            flex-direction: column;
            align-items: start;
            

            width: 100%;

            p {
                font-weight: 700;
                font-size: 14.2123px;
                line-height: 24px;
    
                margin-left: 12px;
    
                color: #F8F9FA;
            }

            div {
            display: flex;
            justify-content: space-between;
            align-items: center;

            width: 100%;

            button {
                border: none;
                background:#121214;
                margin-right: 18px;
                color: white;
                font-size: 16px;
                
                &:hover {
                    cursor: pointer;
                }
            }
        }
        }


        
    }
`;

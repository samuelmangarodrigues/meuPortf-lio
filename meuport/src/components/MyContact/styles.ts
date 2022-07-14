import styled from "styled-components";

export const Outlook = styled.a`
    width: 40px;
    text-align: center;
    border-radius: 100%;
    margin: 5px 5px 5px 5px;
    border: none;
    cursor: pointer;
    background-color: red;
    transition: 0.5s;
    color: white;
    :hover{
        background: darkred;
        transition: 0.2s;
    }
`;

export const LinkeDIn = styled.a`
    width: 40px;
    border-radius: 100%;
    background-color: darkblue;
    margin: 5px 5px 5px 5px;
    border: none;
    background-color: blue;
    color: white;
    :hover{
        background: darkblue;
        transition: 0.2s;
    }
`;
export const Phone = styled.a`
    width: 40px;
    border-radius: 100%;
    margin: 5px 5px 5px 5px;
    border: none;
    cursor: pointer;
    background-color: green;
    color: white;
    :hover{
        background: darkgreen;
        transition: 0.2s;
    }
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

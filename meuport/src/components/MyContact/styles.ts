import styled from "styled-components";

export const Outlook = styled.a`
    width: 40px;
    text-align: center;
    border-radius: 100%;
    background-color: darkblue;
    color: gray;
    margin: 5px 5px 5px 5px;
    border: none;
    cursor: pointer;
    :hover {
        background-color: blue;
        transition: 0.5s;
        color: white;
    }
`;

export const LinkeDIn = styled.a`
    width: 40px;
    border-radius: 100%;
    background-color: darkblue;
    margin: 5px 5px 5px 5px;
    color: gray;
    border: none;
    :hover {
        background-color: blue;
        transition: 0.5s;
        color: white;
    }
`;
export const Phone = styled.a`
    width: 40px;
    border-radius: 100%;
    background-color: darkgreen;
    color: gray;
    margin: 5px 5px 5px 5px;
    border: none;
    cursor: pointer;
    :hover {
        background-color: green;
        transition: 0.5s;
        color: white;
    }
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

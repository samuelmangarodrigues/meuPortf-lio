import styled from "styled-components";

export const Button = styled.a`
    background-color: black;
    color: gray;
    font-weight: bold;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    :hover {
        color: white;
        transition: 0.3s;
    }
`;
export const ButtonNavBar = styled.button`
    position: fixed;
    background-color: black;
    color: gray;
    font-weight: bold;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    display: none;
    :hover {
        color: white;
        transition: 0.3s;
    }
    @media (max-width: 768px) {
        display: block;
    }
`;

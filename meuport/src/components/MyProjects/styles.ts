import styled from "styled-components";

export const Habits = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
    margin: 2px;
    color: black;
    border-radius: 5px;
    padding: 2px;
    border: 1px solid transparent;
    font-size: 20px;
    :hover {
        border-bottom: 1px solid lightblue;
        background: white;
        color: black;
        transition: 0.5s;
    }
`;
export const Title = styled.h1`
    font-family: "Oswald", sans-serif;
    font-size: 30px;
`;
export const ProjectsTechs = styled.div`
    background-color: red;
    font-size: 11px;
    color: white;
    border-radius: 8px;
    margin: 0 2px 20px 1px;
    padding: 5px;
`;

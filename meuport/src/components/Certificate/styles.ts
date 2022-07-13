import styled from "styled-components";

export const Image = styled.div`
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    margin: 5px;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    cursor: pointer;
    ::after {
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        z-index: -1;
    }
    :hover {
        transform: scale(1.1, 1.1);
    }
`;

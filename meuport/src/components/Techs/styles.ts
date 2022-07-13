import styled from "styled-components";

export const Container = styled.div`
    transform: translatey(0px);
    animation: float 5s infinite;
    @keyframes float {
        0% {
            transform: translatey(0px);
        }
        50% {
            transform: translatey(-30px);
        }
        100% {
            transform: translatey(0px);
        }
    }
    @media (max-width: 768px) {
        @keyframes float {
            0% {
                transform: translate(0px);
            }
            50% {
                transform: translate(-30px);
            }
            100% {
                transform: translate(0px);
            }
        }
    }
`;

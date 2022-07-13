import { Flex } from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiGit, DiReact } from "react-icons/di";
import {
    SiDjango,
    SiJavascript,
    SiNodedotjs,
    SiTypescript,
    SiMaterialui,
} from "react-icons/si";

import { Container } from "./styles";

function MyTechs() {
    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            marginRight={[0, 0, 160]}
        >
            <Container>
                <Flex marginTop={150} fontSize={[45, 60, 70, 80, 90, 100]}>
                    <SiJavascript color="yellow" />
                    <DiCss3 color="blue" />
                    <SiMaterialui color="blue" />
                </Flex>
                <Flex marginTop={10} fontSize={[45, 60, 70, 80, 90, 100]}>
                    <SiTypescript color="blue" />
                    <DiReact color="cyan" />
                    <AiFillHtml5 color="red" />
                </Flex>
                <Flex marginTop={10} fontSize={[45, 60, 70, 80, 90, 100]}>
                    <SiNodedotjs color="darkgreen" />
                    <SiDjango color="white" />
                    <DiGit color="red" />
                </Flex>
            </Container>
        </Flex>
    );
}
export default MyTechs;

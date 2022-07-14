import { Flex, Text } from "@chakra-ui/react";
import { FcAbout } from "react-icons/fc";

function AboutMe() {
    return (
        <Flex
            textAlign="center"
            width={[300, 300, 500, 620]}
            flexDirection="column"
            fontFamily="Raleway"
            alignItems="center"
            marginTop={5}
            marginBottom={5}
            fontSize={20}
            background="gray.800"
            opacity="90%"
            padding={10}
            borderRadius={5}
        >
            <FcAbout size={40} />
            <Text color="white">
                Olá, sou Samuel e sou desenvolvedor Full Stack.
            </Text>
            <Text color="white">
                Minha intenção ao fazer esse site é mostrar um pouco sobre meu
                trabalho e alguns projetos que fiz.
            </Text>
            <Text color="white">
                Sou apaixonado desde sempre por tecnologia e no momento em que
                escrevo esse texto estou finalizando um curso de 2000h da Kenzie
                Academy Brasil.
            </Text>
            <Text color="white">
                A cada dia que passa estou evoluindo e crescendo como desenvolvedor e
                espero que goste do meu trabalho.Fique a vontade em meu website
                e aproveite e dê uma olhada nos meus projetos!!
            </Text>
        </Flex>
    );
}
export default AboutMe;

import { Box, Flex, Heading, Img, Text} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

import AboutMe from "../../../components/AboutMe";
import Certificate from "../../../components/Certificate";
import Header from "../../../components/Header";
import LearnedTechs from "../../../components/LearnedTechs";
import MyContact from "../../../components/MyContact";
import MyProjects from "../../../components/MyProjects";
import MyTechs from "../../../components/Techs/index";
import { Hr } from "./styles";

export function HomePage() {
    return (
        <Flex
            flexDirection="column"
            bgImage="https://www.10wallpaper.com/wallpaper/3840x2160/1809/Black_abstract_line_art_4K_design_3840x2160.jpg"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPosition="center center"
        >
            <Heading
                fontSize={19}
                color="white"
                background="black"
                justifyContent="space-between"
                flexDirection="column"
                fontFamily="Raleway"
                position="sticky"
                top={0}
                zIndex={1}
            >
                <Header />
            </Heading>
            <Flex
                flexDirection={["column", "column", "row"]}
                backgroundImage=""
                height="100vh"
                justifyContent={["center", "space-between"]}
                alignItems="center"
            >
                <Flex flexDirection="column" marginLeft={3}>
                    <Text
                        color="white"
                        fontFamily="Arima"
                        fontSize={[20, 20, 20, 25, 30, 35, 40]}
                        fontWeight={400}
                        marginLeft={[1, 2, 3, 4, 5, 6, 7, 8]}
                    >
                        &lt; Samuel Manga Rodrigues/&gt;🧑🏻‍💻
                    </Text>
                    <Text
                        color="white"
                        fontFamily="Arima"
                        fontSize={[20, 20, 20, 25, 30, 35, 40]}
                        fontWeight={400}
                        marginLeft={1}
                    >
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Olá, meu nome é Samuel.")
                                    .changeDelay(200)
                                    .deleteAll()
                                    .typeString("Sou desenvolvedor Full Stack")
                                    .pauseFor(400)
                                    .deleteAll()
                                    .typeString("Bem vindo ao meu portfólio!!")
                                    .pauseFor(400)
                                    .deleteAll()
                                    .typeString(
                                        "Confira alguns dos meus projetos!"
                                    )
                                    .deleteAll()
                                    .typeString("Desenvolvedor Full Stack")
                                    .start();
                            }}
                        />
                    </Text>
                </Flex>
                <MyTechs />
            </Flex>
            <Flex alignItems="center" justifyContent="center">
                <Hr />
                <Text
                    id="about_me"
                    fontFamily="Raleway"
                    color="white"
                    margin={2}
                    fontSize={[20, 20, 30, 40]}
                >
                    Sobre mim
                </Text>
                <Hr />
            </Flex>
            <Flex
                justifyContent="center"
                alignItems="center"
                flexDirection={["column", "row"]}
            >
                <Img
                    marginRight={2}
                    src="https://imgkub.com/images/2022/07/08/IMG_20220707_135846_253_2.jpg"
                    borderRadius="100%"
                    width={263}
                    height={310}
                />
                <AboutMe />
            </Flex>
            <Flex alignItems="center" justifyContent="center" id="projects">
                <Hr />
                <Text
                    fontFamily="Raleway"
                    color="white"
                    margin={2}
                    fontSize={[20, 25, 30, 40]}
                >
                    Meus Projetos
                </Text>
                <Hr />
            </Flex>
            <MyProjects />
            <Flex alignItems="center" justifyContent="center">
                <Hr />
                <Text
                    id="mytechs"
                    fontFamily="Raleway"
                    color="white"
                    margin={2}
                    fontSize={[20, 20, 30, 40]}
                >
                    Tecnologias
                </Text>
                <Hr />
            </Flex>
            <Flex justifyContent="center">
                <LearnedTechs />
            </Flex>
            <Flex
                bg="whiteAlpha.300"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                marginTop={5}
            >
              
                <Flex marginTop={10} alignItems="center" flexDirection={["column", "row"]}>
                    <Certificate />
                    <MyContact />
                </Flex>
                                
                <Box py={10}>
                    <Flex
                        align={'center'}
                        _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor:'gray.200',
                        flexGrow: 1,
                        mr: 8,
                    }}
                        _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor:'gray.200',
                        flexGrow: 1,
                        ml: 8,
                    }}>
                    <Img
                        width={50}
                        src="https://cdn-icons-png.flaticon.com/512/1910/1910037.png"
                    />
                    </Flex>
                    <Text pt={6} fontSize={'sm'} textAlign={'center'} color="white">
                        © Samuel Manga Rodrigues, 01/07/2022
                    </Text>
                    <Text pt={6} fontSize={'sm'} textAlign={'center'} color="white">
                        Praça 13 de Maio, 669, Jardim Paraíso - Cássia-Mg
                        CEP:37980-000
                    </Text>
                </Box>
            </Flex>
        </Flex>
    );
}
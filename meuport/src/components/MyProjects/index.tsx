import {
    Box,
    Flex,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react";
import { AiFillCode } from "react-icons/ai";
import { BsGithub, BsRecycle } from "react-icons/bs";
import { GiRabbit } from "react-icons/gi";
import { IoMdBoat } from "react-icons/io";

import { Habits, ProjectsTechs, Title } from "./styles";

function MyProjects() {
    return (
        <Flex justifyContent="center">
            <Tabs
                isFitted
                variant="enclosed"
                color="white"
                bg="blackAlpha.500"
                borderRadius={8}
                width={["300px", "350px", "400px", "600px"]}
            >
                <TabList mb="1em" fontFamily="Roboto">
                    <Tab>Habits</Tab>
                    <Tab>Oil Cycle</Tab>
                    <Tab>Rent Boats</Tab>
                    <Tab>Code By Girls</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex justifyContent="center" margin={17}>
                            <Box
                                background="blackAlpha.700"
                                _hover={{
                                    bg: "black",
                                    transition: "0.5s",
                                }}
                                alignItems="center"
                                display="flex"
                                flexDirection="column"
                                color="white"
                                textAlign="center"
                                alignSelf="center"
                                width={320}
                                borderRadius={5}
                                padding={3}
                            >
                                <Flex alignItems="flex-start" width="100%">
                                    <ProjectsTechs>JavaScript</ProjectsTechs>
                                    <ProjectsTechs>Reactjs</ProjectsTechs>
                                    <ProjectsTechs>MaterialUi</ProjectsTechs>
                                </Flex>
                                <GiRabbit size={30} color="pink" />
                                <Title>Habits</Title>
                                <Text margin={5} fontSize={20}>
                                    A aplicação tem como objetivo facilitar a
                                    gestão de tempo e estimular o usuário a ter
                                    hábitos que lhe trarão benefícios a medida
                                    que ele conclui as tarefas.
                                </Text>
                                <Flex flexDirection="column">
                                    <Habits
                                        target="_blank"
                                        href="https://habits-1.vercel.app/"
                                    >
                                        Site Habits
                                    </Habits>
                                    <Habits
                                        target="_blank"
                                        href="https://github.com/samuelmangarodrigues/habits"
                                    >
                                        <BsGithub />
                                    </Habits>
                                </Flex>
                            </Box>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex color="white" justifyContent="center" margin={17}>
                            <Box
                                background="blackAlpha.700"
                                _hover={{
                                    bg: "black",
                                    transition: "0.5s",
                                }}
                                alignItems="center"
                                display="flex"
                                flexDirection="column"
                                color="white"
                                textAlign="center"
                                alignSelf="center"
                                borderRadius={5}
                                width={320}
                                padding={3}
                            >
                                <Flex
                                    alignItems="flex-start"
                                    width="100%"
                                    wrap="wrap"
                                >
                                    <ProjectsTechs>JavaScript</ProjectsTechs>
                                    <ProjectsTechs>TypeScript</ProjectsTechs>
                                    <ProjectsTechs>Reactjs</ProjectsTechs>
                                    <ProjectsTechs>ChakraUi</ProjectsTechs>
                                </Flex>
                                <BsRecycle size={30} color="green" />
                                <Title>Oil Cycle</Title>
                                <Text margin={5} fontSize={20}>
                                    Essa aplicação visa disponibilizar um
                                    incentivo de descarte correto do óleo.
                                    Mostrando aos usuários empresas que se
                                    interessam nesse tipo de produto.
                                </Text>
                                <Flex flexDirection="column">
                                    <Habits
                                        target="_blank"
                                        href="https://oil-cycle.vercel.app/"
                                    >
                                        Site Oil Cycle
                                    </Habits>
                                    <Habits
                                        target="_blank"
                                        href="https://github.com/victornunesc/Oil-Cycle"
                                    >
                                        <BsGithub />
                                    </Habits>
                                </Flex>
                            </Box>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex color="white" justifyContent="center" margin={17}>
                            <Box
                                background="blackAlpha.700"
                                _hover={{
                                    bg: "black",
                                    transition: "0.5s",
                                }}
                                alignItems="center"
                                display="flex"
                                flexDirection="column"
                                color="white"
                                width={320}
                                textAlign="center"
                                alignSelf="center"
                                borderRadius={5}
                                padding={3}
                            >
                                <Flex
                                    alignItems="flex-start"
                                    width="100%"
                                    wrap="wrap"
                                >
                                    <ProjectsTechs>JavaScript</ProjectsTechs>
                                    <ProjectsTechs>NodeJs</ProjectsTechs>
                                    <ProjectsTechs>Express</ProjectsTechs>
                                    <ProjectsTechs>Postgres</ProjectsTechs>
                                </Flex>
                                <IoMdBoat size={30} color="white" />
                                <Title>Rent boats</Title>
                                <Text margin={5} fontSize={20}>
                                    Essa aplicação tem como objetivo
                                    disponibilizar uma maneira prática de
                                    locação de embarcações. Possibilitando
                                    cadastrar, alugar e reservar embarcações.
                                </Text>
                                <Flex flexDirection="column">
                                    <Habits
                                        target="_blank"
                                        href="https://github.com/matheus-araujo-cunha/capstone_nodejs"
                                    >
                                        Api Rent Boats
                                    </Habits>
                                    <Habits
                                        target="_blank"
                                        href="https://github.com/matheus-araujo-cunha/capstone_nodejs"
                                    >
                                        <BsGithub />
                                    </Habits>
                                </Flex>
                            </Box>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex color="white" justifyContent="center" margin={17}>
                            <Box
                                background="blackAlpha.700"
                                _hover={{
                                    bg: "black",
                                    transition: "0.5s",
                                }}
                                alignItems="center"
                                display="flex"
                                flexDirection="column"
                                color="white"
                                textAlign="center"
                                alignSelf="center"
                                borderRadius={5}
                                width={[320, 350, 400]}
                                padding={3}
                            >
                                <Flex
                                    alignItems="flex-start"
                                    width="100%"
                                    wrap="wrap"
                                >
                                    <ProjectsTechs>Python</ProjectsTechs>
                                    <ProjectsTechs>Flask</ProjectsTechs>
                                    <ProjectsTechs>Postgres</ProjectsTechs>
                                </Flex>
                                <AiFillCode size={30} color="pink" />
                                <Title>Code by Girls</Title>
                                <Text margin={5} fontSize={20}>
                                    A aplicação foi pensada para divulgação de
                                    vagas e assuntos correlatos bem como a
                                    criação e manutenção de uma rede formada por
                                    mulheres que já atuam ou almejam atuar na
                                    área de tecnologia.
                                </Text>
                                <Flex flexDirection="column">
                                    <Habits
                                        target="_blank"
                                        href="https://github.com/LeandroMedvedev/cap-alexandre-g05/tree/main"
                                    >
                                        Api Code_By_Girls
                                    </Habits>
                                    <Habits
                                        target="_blank"
                                        href="https://github.com/LeandroMedvedev/cap-alexandre-g05/tree/main"
                                    >
                                        <BsGithub />
                                    </Habits>
                                </Flex>
                            </Box>
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    );
}
export default MyProjects;

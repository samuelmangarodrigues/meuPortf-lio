import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
    useColorModeValue,
    Stack,
    Img,
} from "@chakra-ui/react";
import { AiOutlineClose, AiOutlineContacts } from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";
import { GiTechnoHeart, GiHamburgerMenu } from "react-icons/gi";
import { SiAboutdotme } from "react-icons/si";

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg={useColorModeValue("black", "gray.900")} px={4}>
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <IconButton
                    bg="black"
                    color="white"
                    justifyContent="center"
                    alignItems="center"
                    size="md"
                    icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                    aria-label="Open Menu"
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems="center">
                    <Img
                        width={50}
                        src="https://cdn-icons-png.flaticon.com/512/1910/1910037.png"
                    />
                    <HStack
                        as="nav"
                        spacing={4}
                        display={{ base: "none", md: "flex" }}
                    >
                        <Link
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            px={2}
                            py={1}
                            href="#projects"
                            rounded="md"
                            _hover={{
                                textDecoration: "none",
                                color: "black",
                                bg: useColorModeValue("gray.200", "gray.700"),
                            }}
                        >
                            <BiNetworkChart />
                            Meus Projetos
                        </Link>
                        <Link
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            px={2}
                            py={1}
                            href="#contacts"
                            rounded="md"
                            _hover={{
                                textDecoration: "none",
                                color: "black",
                                bg: useColorModeValue("gray.200", "gray.700"),
                            }}
                        >
                            <AiOutlineContacts />
                            Contatos
                        </Link>
                        <Link
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            px={2}
                            py={1}
                            href="#about_me"
                            rounded="md"
                            _hover={{
                                textDecoration: "none",
                                color: "black",
                                bg: useColorModeValue("gray.200", "gray.700"),
                            }}
                        >
                            <SiAboutdotme />
                            Sobre mim
                        </Link>
                        <Link
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            px={2}
                            py={1}
                            href="#mytechs"
                            rounded="md"
                            _hover={{
                                textDecoration: "none",
                                color: "black",
                                bg: useColorModeValue("gray.200", "gray.700"),
                            }}
                        >
                            <GiTechnoHeart />
                            Tecnologias
                        </Link>
                    </HStack>
                </HStack>
                <Flex alignItems="center">
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded="full"
                            variant="link"
                            cursor="pointer"
                            minW={0}
                        >
                            <Avatar
                                size="sm"
                                src="https://imgkub.com/images/2022/07/08/IMG_20220707_135846_253_2.jpg"
                            />
                        </MenuButton>
                        <MenuList>
                            <Link
                                textDecoration="none"
                                href="https://drive.google.com/file/d/1Pf5pDSuCMT21Hv0hvttlxdpYINCmtJPo/view?usp=sharing"
                                target="_blank"
                            >
                                <MenuItem color="black">Meu currículo</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: "none" }}>
                    <Stack as="nav" spacing={4}>
                        <Link
                            px={2}
                            py={1}
                            href="#projects"
                            rounded="md"
                            _hover={{
                                textDecoration: "none",
                                color: "black",
                                bg: "white",
                                transition: "0.4s",
                            }}
                        >
                            Meus Projetos
                        </Link>
                        <Link
                            px={2}
                            py={1}
                            href="#contacts"
                            rounded="md"
                            _hover={{
                                textDecoration: "none",
                                color: "black",
                                bg: "white",
                                transition: "0.4s",
                            }}
                        >
                            Contatos
                        </Link>
                        <Link
                            px={2}
                            py={1}
                            href="#about_me"
                            rounded="md"
                            _hover={{
                                textDecoration: "none",
                                color: "black",
                                bg: "white",
                                transition: "0.4s",
                            }}
                        >
                            Sobre mim
                        </Link>
                        <Link
                            px={2}
                            py={1}
                            href="#mytechs"
                            rounded="md"
                            _hover={{
                                textDecoration: "none",
                                color: "black",
                                bg: "white",
                                transition: "0.4s",
                            }}
                        >
                            Tecnologias
                        </Link>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}
export default Header;

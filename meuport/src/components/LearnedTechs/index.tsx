import { Box, Flex, Text } from "@chakra-ui/react";
import { FaDatabase } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";

function LearnedTechs() {
    return (
        <Flex flexDirection={["column", "column", "row"]}>
            <Box
                _hover={{
                    background: "black",
                    transition: "0.5s",
                }}
                cursor="pointer"
                width={300}
                display="flex"
                flexDirection="column"
                alignItems="center"
                background="blackAlpha.500"
                marginRight={["0", "5"]}
                marginTop={4}
                borderRadius={4}
                padding={3}
            >
                <HiOutlineDesktopComputer color="yellow" size={80} />
                <Text color="yellow.500" fontFamily="Roboto" fontSize={32}>
                    Front End
                </Text>
                <Text
                    fontFamily="Abel"
                    color="white"
                    fontSize={24}
                    display="flex"
                    alignItems="center"
                >
                    HTML5
                </Text>
                <Text
                    fontFamily="Abel"
                    color="white"
                    fontSize={24}
                    display="flex"
                    alignItems="center"
                >
                    CSS3
                </Text>
                <Text
                    fontFamily="Abel"
                    color="white"
                    fontSize={24}
                    display="flex"
                    alignItems="center"
                >
                    JavaScript
                </Text>

                <Text
                    fontFamily="Abel"
                    color="white"
                    fontSize={24}
                    display="flex"
                    alignItems="center"
                >
                    React Js
                </Text>
                <Text
                    fontFamily="Abel"
                    color="white"
                    fontSize={24}
                    display="flex"
                    alignItems="center"
                >
                    Typescript
                </Text>
                <Text
                    fontFamily="Abel"
                    color="white"
                    fontSize={24}
                    display="flex"
                    alignItems="center"
                >
                    MaterialUI
                </Text>
                <Text
                    fontFamily="Abel"
                    color="white"
                    fontSize={24}
                    display="flex"
                    alignItems="center"
                >
                    ChakraUi
                </Text>
            </Box>
            <Box
                cursor="pointer"
                _hover={{
                    background: "black",
                    transition: "0.5s",
                }}
                width={300}
                display="flex"
                flexDirection="column"
                alignItems="center"
                background="blackAlpha.500"
                marginRight={["0", "5"]}
                marginTop={4}
                borderRadius={4}
                padding={3}
            >
                <FaDatabase size={80} color="blue" />
                <Text color="blue" fontFamily="Roboto" fontSize={32}>
                    Back End
                </Text>
                <Text
                    fontFamily="Abel"
                    color="white"
                    fontSize={24}
                    display="flex"
                    alignItems="center"
                >
                    Python
                </Text>
                <Text
                    fontFamily="Abel"
                    color="white"
                    fontSize={24}
                    display="flex"
                    alignItems="center"
                >
                    PostgresSQL
                </Text>
                <Text
                    fontFamily="Abel"
                    color="white"
                    fontSize={24}
                    display="flex"
                    alignItems="center"
                >
                    NodeJs
                </Text>
                <Text
                    fontFamily="Abel"
                    color="white"
                    fontSize={24}
                    display="flex"
                    alignItems="center"
                >
                    Express
                </Text>
                <Text
                    fontFamily="Abel"
                    color="white"
                    fontSize={24}
                    display="flex"
                    alignItems="center"
                >
                    DJango
                </Text>
            </Box>
        </Flex>
    );
}
export default LearnedTechs;

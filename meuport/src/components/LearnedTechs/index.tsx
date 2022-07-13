import { Box, Flex, Text } from "@chakra-ui/react";
import { FcAcceptDatabase, FcMultipleDevices } from "react-icons/fc";

function LearnedTechs() {
    return (
        <Flex flexDirection={["column", "column", "row"]}>
            <Box                
                width={300}
                display="flex"
                flexDirection="column"
                alignItems="center"
                background="white"
                marginRight={["0", "5"]}
                marginTop={4}
                borderRadius={4}
            >
                <FcMultipleDevices color="red" size={100} />
                <Text color="red" fontFamily="Roboto" fontSize={32} bg="red.100" padding={1} margin={3} borderRadius={5}>
                    Front End
                </Text>
                <Box bg="green.50" width="100%" display="flex" alignItems="center" flexDirection="column" borderRadius={4}>
                    <Text
                        fontFamily="Abel"
                        color="black"
                        fontSize={24}
                        display="flex"
                        alignItems="center"
                    >
                        HTML5
                    </Text>
                    <Text
                        fontFamily="Abel"
                        color="black"
                        fontSize={24}
                        display="flex"
                        alignItems="center"
                    >
                        CSS3
                    </Text>
                    <Text
                        fontFamily="Abel"
                        color="black"
                        fontSize={24}
                        display="flex"
                        alignItems="center"
                    >
                        JavaScript
                    </Text>

                    <Text
                        fontFamily="Abel"
                        color="black"
                        fontSize={24}
                        display="flex"
                        alignItems="center"
                    >
                        React Js
                    </Text>
                    <Text
                        fontFamily="Abel"
                        color="black"
                        fontSize={24}
                        display="flex"
                        alignItems="center"
                    >
                        Typescript
                    </Text>
                    <Text
                        fontFamily="Abel"
                        color="black"
                        fontSize={24}
                        display="flex"
                        alignItems="center"
                    >
                        MaterialUI
                    </Text>
                    <Text
                        fontFamily="Abel"
                        color="black"
                        fontSize={24}
                        display="flex"
                        alignItems="center"
                    >
                        ChakraUi
                    </Text>
                </Box>
            </Box>
            <Box
                width={300}
                display="flex"
                flexDirection="column"
                alignItems="center"
                background="white"
                marginRight={["0", "5"]}
                marginTop={4}
                borderRadius={4}
            >
                <FcAcceptDatabase size={100} color="blue" />
                <Text color="blue" fontFamily="Roboto" fontSize={32} bg="blue.100" padding={1} margin={3} borderRadius={5}>
                    Back End
                </Text>
                <Box bg="green.50" width="100%" display="flex" alignItems="center" flexDirection="column" borderRadius={4} height={252}>
                    <Text
                        fontFamily="Abel"
                        color="black"
                        fontSize={24}
                        display="flex"
                        alignItems="center"
                    >
                        Python
                    </Text>
                    <Text
                        fontFamily="Abel"
                        color="black"
                        fontSize={24}
                        display="flex"
                        alignItems="center"
                    >
                        PostgresSQL
                    </Text>
                    <Text
                        fontFamily="Abel"
                        color="black"
                        fontSize={24}
                        display="flex"
                        alignItems="center"
                    >
                        NodeJs
                    </Text>
                    <Text
                        fontFamily="Abel"
                        color="black"
                        fontSize={24}
                        display="flex"
                        alignItems="center"
                    >
                        Express
                    </Text>
                    <Text
                        fontFamily="Abel"
                        color="black"
                        fontSize={24}
                        display="flex"
                        alignItems="center"
                    >
                        DJango
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
}
export default LearnedTechs;

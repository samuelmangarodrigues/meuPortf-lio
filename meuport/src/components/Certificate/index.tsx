import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";
import { BiMedal } from "react-icons/bi";
import { Image } from "./styles";

function Certificate() {
    return (
        <Flex
            boxShadow="2xl"
            id="certificate"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            background="blue.500"
            opacity="80%"
            width={190}
            height={123}
            padding={8}
            marginTop={["2", "0"]}
            borderRadius={10}
        >
            <Box
                display="flex"
                textAlign="center"
                flexDirection="column"
                alignItems="center"
                fontFamily="Oswald"
                color="black"
            >
            </Box>

            <Image>
                <Link
                    href="https://i.im.ge/2022/07/05/u03kC8.jpg"
                    target="_blank"
                >
                    <Img
                        borderRadius={5}
                        src="https://i.im.ge/2022/07/05/u03kC8.jpg"
                        alt="Certificate"
                    />
                </Link>
            </Image>
            <Text
                fontFamily="Arima"
                fontWeight="bold"
                fontSize={12}
                display="flex"
                alignItems="center"
                >
                Front End Developer
                <BiMedal color="yellow" size={15}/>
            </Text>
        </Flex>
    );
}
export default Certificate;

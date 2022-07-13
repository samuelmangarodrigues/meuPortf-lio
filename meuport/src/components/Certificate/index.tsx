import { Box, Flex, Img, Link } from "@chakra-ui/react";
import { BiMedal } from "react-icons/bi";

import { Image } from "./styles";

function Certificate() {
    return (
        <Flex
            boxShadow="xl"
            id="certificate"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            background="white"
            opacity="80%"
            width={150}
            height={123}
            padding={4}
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
                <BiMedal size={25} />
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
        </Flex>
    );
}
export default Certificate;

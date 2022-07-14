import {Flex, Link, Text } from "@chakra-ui/react";
import { BiMedal } from "react-icons/bi";

function Certificate() {
    return (
        <Flex
            id="certificate"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            borderRadius={10}
            marginRight={[0,14]}
        >
                <Link
                    href="https://i.im.ge/2022/07/05/u03kC8.jpg"
                    target="_blank"
                    color="white"
                >
                    <Text
                        fontFamily="Arima"
                        fontWeight="bold"
                        fontSize={12}
                        display="flex"
                        alignItems="center"
                    >
                       Certificado de Front End Developer
                        <BiMedal color="yellow" size={15}/>
                    </Text>
                </Link>
            
        </Flex>
    );
}
export default Certificate;

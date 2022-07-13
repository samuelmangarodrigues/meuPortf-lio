import { Flex, Text } from "@chakra-ui/react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { SiMicrosoftoutlook } from "react-icons/si";

import { Outlook, LinkeDIn, Phone } from "./styles";

function MyContact() {
    return (
        <Flex
            id="contacts"
            flexDirection="column"
            background="white"
            opacity="80%"
            alignItems="center"
            marginTop={12}
            borderRadius={4}
            alignSelf="center"
            margin={8}
            padding={5}
        >
            <Text
                color="white"
                fontSize={[20, 20, 25, 25]}
                fontFamily="Raleway"
            >
                <Flex alignItems="center" color="black" fontWeight="bold">
                    Fale comigo!
                </Flex>
            </Text>
            <Flex>
                <Outlook
                    id="email"
                    href="https://is.gd/samuel_email"
                    target="_blank"
                >
                    <Flex
                        alignItems="center"
                        fontSize={15}
                        fontWeight="bold"
                        padding={2}
                        justifyContent="center"
                    >
                        <SiMicrosoftoutlook size={20} />
                    </Flex>
                </Outlook>
                <Phone
                    id="phone"
                    href="https://api.whatsapp.com/send?phone=5535991111534"
                    target="_blank"
                >
                    <Flex
                        alignItems="center"
                        fontSize={15}
                        fontWeight="bold"
                        padding={2}
                        justifyContent="center"
                    >
                        <BsWhatsapp size={20} />
                    </Flex>
                </Phone>
                <LinkeDIn
                    id="linkedIn"
                    href="https://www.linkedin.com/in/samuelmangarodrigues/"
                    target="_blank"
                >
                    <Flex
                        alignItems="center"
                        fontSize={15}
                        fontWeight="bold"
                        padding={2}
                        justifyContent="center"
                    >
                        <AiFillLinkedin size={20} />
                    </Flex>
                </LinkeDIn>
            </Flex>
        </Flex>
    );
}
export default MyContact;

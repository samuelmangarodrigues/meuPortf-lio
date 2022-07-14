import { Flex, Text} from "@chakra-ui/react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import {MdEmail} from "react-icons/md"

import { Outlook, LinkeDIn, Phone } from "./styles";

function MyContact() {
    return (
        <Flex
            id="contacts"
            flexDirection="column"
            opacity="80%"
            alignItems="center"
            borderRadius={4}
            alignSelf="center"
        >
            <Text
                color="white"
                fontSize={[20, 20, 25, 25]}
                fontFamily="Raleway"
            >
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
                        <MdEmail size={20} />
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

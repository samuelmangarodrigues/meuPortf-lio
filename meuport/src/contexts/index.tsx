import { ChakraProvider } from "@chakra-ui/react";

import { IContextProps } from "../interfaces";
import { theme } from "../styles/theme";

export function AppProvider({ children }: IContextProps) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

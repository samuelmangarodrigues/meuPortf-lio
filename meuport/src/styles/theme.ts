import { extendTheme, theme as ChakraTeme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        gray: {
            100: "#EDF2F7",
        },
        blue: {
            100: "#BEE3F8",
            200: "#90CDF4",
        },
        fonts: {
            heading: "Montserrat",
            body: "Raleway",
        },
        fontSizes: {
            xs: "0.75rem",
            sm: "0.87rem",
            md: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.87rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.75rem",
            "7xl": "4.5rem",
            "8xl": "6rem",
            "9xl": "8rem",
        },
        global: {
            body: {
                bg: "gray.100",
                color: "blue.200",
            },
        },
    },
});

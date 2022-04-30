import { extendTheme } from "@chakra-ui/react";

const thema = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: "orange.50",
                color: "gray.800",
            },
            p: {
                fontSize:{ base: "md", md: "lg" },
                lineHeight: "tall",
            }
        }
    }
})
export default thema;
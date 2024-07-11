import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";

const Heading: ComponentStyleConfig = {
  baseStyle: { fontWeight: "900" },
};

const Link: ComponentStyleConfig = {
  baseStyle: { textDecoration: "underline", textUnderlineOffset: "2px" },
};

export const theme = extendTheme({ components: { Heading, Link } });

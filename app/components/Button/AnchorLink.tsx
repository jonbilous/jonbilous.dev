type Props = ComponentProps<typeof ChakraLink> &
  ComponentProps<typeof RemixLink>;

import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RemixLink } from "@remix-run/react";
import type { ComponentProps } from "react";

export const AnchorLink = ({ ...props }: Props) => {
  return (
    <ChakraLink as={RemixLink} {...props}>
      {props.children}
    </ChakraLink>
  );
};

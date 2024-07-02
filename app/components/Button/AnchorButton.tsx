import { Button } from "@chakra-ui/react";
import { Link as RemixLink } from "@remix-run/react";
import { ComponentProps } from "react";

export const AnchorButton = (
  props: ComponentProps<typeof Button> & ComponentProps<typeof RemixLink>
) => {
  return (
    <Button as={RemixLink} {...props}>
      {props.children}
    </Button>
  );
};

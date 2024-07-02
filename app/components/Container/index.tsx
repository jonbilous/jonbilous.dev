import { Flex, FlexProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function Container({
  children,
  ...props
}: PropsWithChildren<FlexProps>) {
  return (
    <Flex {...props} flex={1} mx="auto" maxW="800px" flexDirection={"column"}>
      {children}
    </Flex>
  );
}

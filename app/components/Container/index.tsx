import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return (
    <Flex flexDirection={"column"} flex={1} p={4}>
      {children}
    </Flex>
  );
}

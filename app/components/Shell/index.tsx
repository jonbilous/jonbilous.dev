import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <Flex overflowY={"auto"} h="$100vh" flexDirection={"column"}>
      {children}
    </Flex>
  );
}

import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navigation from "../Navigation";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Flex flexDirection={"column"} h="$100vh">
      <Navigation />
      {children}
    </Flex>
  );
}

import { Heading, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function ContentBlock({
  children,
  title,
  id,
}: PropsWithChildren<{ title: string; id: string }>) {
  return (
    <VStack
      scrollMarginTop={"100px"}
      id={id}
      spacing={8}
      alignItems={"stretch"}
    >
      <Heading>{title}</Heading>

      {children}
    </VStack>
  );
}

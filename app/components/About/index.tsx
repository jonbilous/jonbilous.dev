import { Flex, Img, Text } from "@chakra-ui/react";
import { IAbout } from "~/content/about";

export default function About({ content }: { content: IAbout }) {
  return (
    <Flex alignItems={"center"}>
      <Text pr={8} mr="auto">
        {content.description}
      </Text>

      {content.img && (
        <Img
          rounded={"full"}
          w="150px"
          src={content.img.src}
          alt={content.img.alt}
        />
      )}
    </Flex>
  );
}

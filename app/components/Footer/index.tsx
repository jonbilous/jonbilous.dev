import { Flex, Link, Text } from "@chakra-ui/react";
import Container from "../Container";

export default function Footer() {
  return (
    <Flex color="white" bg="black">
      <Container p={4}>
        <Flex>
          <Text mr="auto">© {new Date().getFullYear()} Jon Bilous</Text>

          <Link href={`https://github.com/jonbilous/jonbilous.dev`} isExternal>
            Source Code
          </Link>
        </Flex>
      </Container>
    </Flex>
  );
}

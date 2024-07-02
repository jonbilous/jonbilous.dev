import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

export default function Navigation() {
  return (
    <Flex
      borderBottomColor={"gray.200"}
      borderBottom={"1px"}
      alignItems={"center"}
      p={4}
    >
      <Heading as={Link} to="/" mr="auto" size="md">
        Jon Bilous
      </Heading>
    </Flex>
  );
}

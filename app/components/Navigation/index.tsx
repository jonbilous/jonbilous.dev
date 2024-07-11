import { DownloadIcon } from "@chakra-ui/icons";
import { Flex, Heading, HStack, IconButton } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import Container from "~/components/Container";
import { name } from "~/content/general";

export default function Navigation({
  items,
}: {
  items: { to: string; label: string }[];
}) {
  return (
    <Flex bg="black" color="white" position={"sticky"} top={0}>
      <Container p={4}>
        <Flex alignItems={"center"}>
          <Heading as={"button"} mr="auto">
            {name}
          </Heading>

          <HStack mr={4} spacing={4}>
            {items.map((item) => {
              return (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              );
            })}
          </HStack>

          <IconButton
            size="sm"
            isRound
            aria-label="Download Resume"
            icon={<DownloadIcon color="white" />}
            as="a"
            variant={"outline"}
            href="/resume"
            download={"jon-bilous-resume.pdf"}
          />
        </Flex>
      </Container>
    </Flex>
  );
}

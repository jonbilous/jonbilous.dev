import { Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Container from "~/components/Container";
import ProjectList from "~/components/ProjectList";
import WorkExperience from "~/components/WorkExperience";
import { projects } from "~/data/projects";
import { workExperience } from "~/data/work-experience";
import { DESCRIPTION, NAME } from "~/utils/constants";

export const meta: MetaFunction = () => {
  return [{ title: NAME }, { name: "description", content: DESCRIPTION }];
};

export default function Index() {
  return (
    <Flex position="relative" direction={"column"}>
      <Flex bg="black" color="white" position={"sticky"} top={0}>
        <Container p={4}>
          <Flex>
            <Heading as={"button"} mr="auto">
              {NAME}
            </Heading>

            <HStack spacing={4}>
              <Link to="/#about">About Me</Link>
              <Link to="/#work-experience">Work Experience</Link>
              <Link to="/#projects">Projects</Link>
            </HStack>
          </Flex>
        </Container>
      </Flex>

      <Container px={4} py={8}>
        <VStack spacing={16} alignItems={"stretch"}>
          <VStack
            scrollMarginTop={"100px"}
            id="about"
            spacing={8}
            alignItems={"stretch"}
          >
            <Heading>About Me</Heading>
            <Text>
              I am JOn I am JOn I am JOn I am JOn I am JOn I am JOn I am JOn I
              am JOn I am JOn I am JOn I am JOnI am JOn
            </Text>
          </VStack>

          <VStack
            scrollMarginTop={"100px"}
            id="work-experience"
            spacing={8}
            alignItems={"stretch"}
          >
            <Heading>Work Experience</Heading>
            <WorkExperience experience={workExperience} />
          </VStack>

          <VStack
            scrollMarginTop={"100px"}
            id="projects"
            spacing={8}
            alignItems={"stretch"}
          >
            <Heading>Projects</Heading>
            <ProjectList projects={projects} />
          </VStack>
        </VStack>
      </Container>
    </Flex>
  );
}

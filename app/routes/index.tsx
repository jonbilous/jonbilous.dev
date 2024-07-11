import { DownloadIcon } from "@chakra-ui/icons";
import { Flex, HStack, Heading, IconButton, VStack } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import About from "~/components/About";
import Container from "~/components/Container";
import ContentBlock from "~/components/ContentBlock";
import Footer from "~/components/Footer";
import ProjectList from "~/components/ProjectList";
import WorkExperience from "~/components/WorkExperience";
import { about } from "~/content/about";
import { name, seo } from "~/content/general";
import { projects } from "~/content/projects";
import { workExperience } from "~/content/work-experience";

export const meta: MetaFunction = () => {
  return [
    { title: seo.title },
    { name: "description", content: seo.description },
  ];
};

export default function Index() {
  return (
    <Flex position="relative" direction={"column"}>
      <Flex bg="black" color="white" position={"sticky"} top={0}>
        <Container p={4}>
          <Flex alignItems={"center"}>
            <Heading as={"button"} mr="auto">
              {name}
            </Heading>

            <HStack mr={4} spacing={4}>
              <Link to="/#about">About Me</Link>
              <Link to="/#work-experience">Work Experience</Link>
              <Link to="/#projects">Projects</Link>
            </HStack>

            <IconButton
              size="sm"
              isRound
              aria-label="Download Resume"
              icon={<DownloadIcon />}
              as="a"
              href="/resume"
              download={"jon-bilous-resume.pdf"}
            />
          </Flex>
        </Container>
      </Flex>

      <Container px={4} py={8}>
        <VStack spacing={16} alignItems={"stretch"}>
          <ContentBlock id="about" title="About Me">
            <About content={about} />
          </ContentBlock>

          <ContentBlock id="work-experience" title="Work Experience">
            <WorkExperience experience={workExperience} />
          </ContentBlock>

          <ContentBlock title={"Projects"} id="projects">
            <ProjectList projects={projects} />
          </ContentBlock>
        </VStack>
      </Container>

      <Footer />
    </Flex>
  );
}

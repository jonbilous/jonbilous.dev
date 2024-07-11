import { Flex, VStack } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import About from "~/components/About";
import Container from "~/components/Container";
import ContentBlock from "~/components/ContentBlock";
import Footer from "~/components/Footer";
import Navigation from "~/components/Navigation";
import ProjectList from "~/components/ProjectList";
import WorkExperience from "~/components/WorkExperience";
import { about } from "~/content/about";
import { seo } from "~/content/general";
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
      <Navigation
        items={[
          { label: "About Me", to: "/#about" },
          { label: "Work Experience", to: "/#work-experience" },
          { label: "Projects", to: "/#projects" },
        ]}
      />

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

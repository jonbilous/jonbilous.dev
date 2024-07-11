import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Heading, Link, Text, VStack } from "@chakra-ui/react";
import { IProject } from "~/content/projects";
import TagList from "../TagList";

const Project = ({ project }: { project: IProject }) => {
  const urlLabel = new URL(project.url).hostname;

  return (
    <VStack alignItems={"start"}>
      <Heading as="a" target="_blank" href={project.url} size="lg">
        {project.name}
      </Heading>

      <Link
        display={"flex"}
        alignItems={"center"}
        isExternal
        href={project.url}
      >
        {urlLabel}
        <ExternalLinkIcon ml={2} />
      </Link>

      <Text>{project.description}</Text>
      <Text>Deployed to {project.deployment.join(", ")}</Text>

      <TagList tags={project.stack} />
    </VStack>
  );
};

export default function ProjectList({ projects }: { projects: IProject[] }) {
  return (
    <VStack spacing={8} alignItems={"stretch"}>
      {projects.map((project) => {
        return <Project key={project.name} project={project} />;
      })}
    </VStack>
  );
}

import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Heading,
  Link,
  Tag,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { IProject } from "~/data/projects";

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
      <Wrap>
        {project.stack.map((item) => {
          return (
            <WrapItem key={item}>
              <Tag>{item}</Tag>
            </WrapItem>
          );
        })}
      </Wrap>
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

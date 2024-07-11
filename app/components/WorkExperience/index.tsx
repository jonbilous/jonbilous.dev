import {
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { IWorkExperience } from "~/content/work-experience";
import TagList from "../TagList";

const ExperienceItem = ({ item }: { item: IWorkExperience }) => {
  return (
    <VStack spacing={4} alignItems={"start"}>
      <Flex alignItems={"center"} alignSelf={"stretch"}>
        <Heading mr="auto" size="md">
          {item.company}
        </Heading>
        <Text>{item.location}</Text>
      </Flex>

      <Flex alignItems={"center"} alignSelf={"stretch"}>
        <Text mr="auto">{item.title}</Text>
        <Text>
          {item.startDate} - {item.endDate}
        </Text>
      </Flex>

      <UnorderedList>
        {item.description.map((desc) => {
          return <ListItem key={desc}>{desc}</ListItem>;
        })}
      </UnorderedList>

      <TagList tags={item.technologies} />
    </VStack>
  );
};

export default function WorkExperience({
  experience,
}: {
  experience: IWorkExperience[];
}) {
  return (
    <VStack spacing={8} alignItems={"start"}>
      {experience.map((item) => {
        return <ExperienceItem key={item.company} item={item} />;
      })}
    </VStack>
  );
}

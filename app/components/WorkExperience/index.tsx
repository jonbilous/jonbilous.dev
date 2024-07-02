import { Heading, Text, VStack } from "@chakra-ui/react";
import { IWorkExperience } from "~/data/work-experience";

const ExperienceItem = ({ item }: { item: IWorkExperience }) => {
  return (
    <VStack alignItems={"start"}>
      <Heading size="lg">{item.company}</Heading>
      <Text>{item.title}</Text>
      <Text>
        {item.startDate} - {item.endDate}
      </Text>
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

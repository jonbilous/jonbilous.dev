import { Tag, Wrap, WrapItem } from "@chakra-ui/react";

export default function TagList({ tags }: { tags: string[] }) {
  return (
    <Wrap>
      {tags.map((item) => {
        return (
          <WrapItem key={item}>
            <Tag>{item}</Tag>
          </WrapItem>
        );
      })}
    </Wrap>
  );
}

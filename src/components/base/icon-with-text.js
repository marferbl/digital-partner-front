import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export const IconWithText = ({ text, icon }) => {
  return (
    <Flex align={"center"} gap={2} >
      {icon}
      <Text>{text}</Text>
    </Flex>
  );
};

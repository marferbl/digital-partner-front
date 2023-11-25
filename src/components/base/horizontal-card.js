import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { AiOutlineDollar } from "react-icons/ai";
import { IconWithText } from "./icon-with-text";
import { BiMapPin } from "react-icons/bi";

export default function HorizontalCard({ vacant }) {
  return (
    <Box py={6}>
      {vacant && (
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ base: "100%", md: "600px" }}
          height={{ sm: "476px", md: "10rem" }}
          direction={{ base: "column", md: "row" }}
          bg={"white"}
          boxShadow={"2xl"}
          padding={4}
        >
          <Flex p={5} w={120}>
            <Image
              objectFit="contain"
              src={
                "https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
              }
            />
          </Flex>
          <Box>
            <Text fontWeight={700}>{vacant.title}</Text>
            <IconWithText text={vacant.salaryMin} icon={<AiOutlineDollar />} />
            <IconWithText text={vacant.city} icon={<BiMapPin />} />
            <Text mt={2} fontSize={12}>
              {vacant.description}
            </Text>
          </Box>
        </Stack>
      )}
    </Box>
  );
}

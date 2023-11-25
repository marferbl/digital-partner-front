import React, { useState } from "react";

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Center,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { send } from "emailjs-com";
import { useToast } from "@chakra-ui/react";
import FormModal from "./formModal";

export default function FormDemo() {
  const [fromName, setFromName] = useState("");
  const [toName, setToName] = useState("");
  const [message, setMessage] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const toast = useToast();

  const onSubmit = (e) => {
    const toSend = {
      from_name: fromName,
      to_name: "booniuztech@gmail.com",
      message: message,
      reply_to: replyTo,
    };
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_USER_ID
    )
      .then((response) => {
        toast({
          title: "OK",
          description: "Has enviado el correo electrónico",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <Container
      bg="white"
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
      py={"3rem"}
    >
      <Flex>
        <Box
          bg="#a8f0ed"
          boxShadow={"lg"}
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 3, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading color={"gray.700"}>Contáctanos</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.700">
                    Mándanos un mensaje con tu consulta
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Flex
                        height="48px"
                        width="300px"
                        color="gray.600"
                        align={"center"}
                        gap={2}
                      >
                        <MdPhone color="gray.600" size="20px" />
                        <Text> +34 677 785 519</Text>
                      </Flex>

                      <Flex
                        height="48px"
                        width="300px"
                        color="gray.600"
                        align={"center"}
                        gap={2}
                      >
                        <MdEmail color="gray.600" size="20px" />
                        <Text> booniuztech@gmail.com</Text>
                      </Flex>
                      <Flex
                        height="48px"
                        width="300px"
                        color="gray.600"
                        align={"center"}
                        gap={2}
                      >
                        <MdLocationOn color="gray.600" size="20px" />
                        <Text> Valencia, España</Text>
                      </Flex>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem display={{ base: "none", md: "block" }}>
                <Box p={1} bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Nombre</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input
                            placeholder="Nombre"
                            type="text"
                            size="md"
                            onChange={(e) => setFromName(e.target.value)}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Correo electrónico</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input
                            placeholder="Correo"
                            type="text"
                            size="md"
                            onChange={(e) => setReplyTo(e.target.value)}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mensaje</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="Mensaje"
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#FFC480"
                          color="gray.600"
                          _hover={{ bg: "#a8f0ed" }}
                          onClick={onSubmit}
                        >
                          Envíar
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <Center w={"100%"} display={{ base: "flex", md: "none" }}>
                <FormModal />
              </Center>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

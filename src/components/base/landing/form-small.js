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
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { send } from "emailjs-com";
import { useToast } from "@chakra-ui/react";

export const FormContactSmall = ({ close }) => {
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
        close();
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
    <Box bg="white" borderRadius="lg">
      <Text ml={4} mt={5} fontSize={24}>
        Envíanos un correo:
      </Text>
      <Box m={4} color="#0B0E3F">
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
              placeholder="Correo electrónico"
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
  );
};

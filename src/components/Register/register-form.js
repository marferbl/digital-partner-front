import React, { useState } from "react";
import {
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputRightElement,
  InputGroup,
  Radio,
  Flex,
  RadioGroup,
  Stack
} from "@chakra-ui/react";
import axios from "axios";
import CaptchaComponent from "../base/captcha-component";
import { useToast } from "@chakra-ui/react";
import { isEmpty } from "../../hooks/isEmpty";
import { login, signup } from "../../services/auth";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { COLORS } from "../../colors/colors";



const RegisterForm = () => {
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rol, setRol] = useState('1')

  const toast = useToast();

  const [captcha, setCaptcha] = useState(null);
  const [emptyFieldMessage, setEmptyFieldMessage] = useState(false);

  const resetFields = () => {
    setEmail("");
  };

  const handleSubmit = () => {
    if (isEmpty(email) || isEmpty(password)) {
      setEmptyFieldMessage(true);
    } else {
      signup(email, password, name, rol)
        .then((res) => {
          setEmptyFieldMessage(false);
          toast({
            title: "CUENTA CREADA.",
            description: "Cuenta creada correctamente",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        })
        .catch((err) => {
          toast({
            title: "ERROR",
            description: err.response.data.message,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });

      resetFields();
    }
  };
  return (
    <Box py={0} rounded={"xl"} bgColor={"white"}>
      {/* <FormControl isRequired my={5}>
        <FormLabel htmlFor="name">Username</FormLabel>
        <Input id="username" placeholder="Nombre" onChange={(e) => setUsername(e.target.value)} value={username} />
      </FormControl> */}

      <FormControl isRequired my={5}>
        <FormLabel htmlFor="name">Nombre completo</FormLabel>
        <Input
          id="name"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </FormControl>
      <FormControl isRequired my={5}>
        <FormLabel htmlFor="email">Correo electronico</FormLabel>
        <Input
          id="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormControl>

      <FormControl isRequired my={5}>
        <FormLabel htmlFor="name">Contraseña</FormLabel>
        <InputGroup size="md">
          <Input
            id="password"
            placeholder="Contraseña"
            pr="4.5rem"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <InputRightElement >
            <Text
              h="1.75rem"
              size="sm"
              cursor={"pointer"}
              onClick={() => setShowPassword(!showPassword)}
              marginTop={"35%"}
            >
              {!showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </Text>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <RadioGroup onChange={setRol} value={rol}>
        <Stack pb={4}>
          <Radio value='COMPANY'>Soy empresa y busco soluciones digitales</Radio>
          <Radio value='SOFTWARE'>Quiero mostrar mi solución digital</Radio>
        </Stack>
      </RadioGroup>

      <Button
        mt={4}
        bg={COLORS.primary}
        type="submit"
        width={"100%"}
        color={'white'}
        // disabled={isEmpty(email)}
        onClick={handleSubmit}
      >
        Submit
      </Button>

      {emptyFieldMessage && (
        <Text my={2} color={"red"}>
          Rellena todos los campos
        </Text>
      )}
    </Box>
  );
};

export default RegisterForm;

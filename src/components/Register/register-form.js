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
import { useNavigate } from "react-router-dom";




const RegisterForm = () => {
  // const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAux, setPasswordAux] = useState("");

  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rol, setRol] = useState('1')
  const [error, setError] = useState({ message: null })

  const toast = useToast();

  const [captcha, setCaptcha] = useState(null);
  const [emptyFieldMessage, setEmptyFieldMessage] = useState(false);

  const resetFields = () => {
    setEmail("");
  };

  const handleSubmit = () => {
    if (isEmpty(email) || isEmpty(password)) {
      setEmptyFieldMessage(true);
      return
    }
    setEmptyFieldMessage(false)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      setError({ message: 'El formato de email no es correcto' })
      return;
    }

    if (password.length < 8) {
      setError({ message: 'La contraseña tiene que tener al menos 8 carácteres' })
      return;
    }

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
        navigate('/initial-page-digit')
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
  };
  return (
    <Box py={0} rounded={"xl"} bgColor={"white"}>
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


      <Button
        mt={4}
        bg={COLORS.primary}
        type="submit"
        width={"100%"}
        color={'white'}
        // disabled={isEmpty(email)}
        onClick={handleSubmit}
      >
        Registrarse
      </Button>

      {error.message && (
        <Text my={2} color={"red"}>
          {error.message}
        </Text>
      )}

      {emptyFieldMessage && (
        <Text my={2} color={"red"}>
          Rellena todos los campos
        </Text>
      )}
    </Box>
  );
};

export default RegisterForm;

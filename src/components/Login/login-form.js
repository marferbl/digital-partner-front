import React, { useState, useContext, useRef } from "react";
import {
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { isEmpty } from "../../hooks/isEmpty";
import { login, signup } from "../../services/auth";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../colors/colors";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const [emptyFieldMessage, setEmptyFieldMessage] = useState(false);

  const { storeToken, authenticateUser } = useContext(UserContext);
  const buttonRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      buttonRef.current.click(); // Simulate a click on the "Entrar" button
    }
  };

  const resetFields = () => {
    setEmail("");
  };

  const handleSubmit = () => {
    setLoading(true);
    const view = localStorage.getItem("userView");
    if (isEmpty(email) || isEmpty(password)) {
      setEmptyFieldMessage(true);
    } else {
      login(email, password)
        .then((res) => {
          setLoading(false);
          storeToken(res.data.token);
          setEmptyFieldMessage(false);
          authenticateUser();
          toast({
            title: "OK",
            description: "Sesión Iniciada",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setTimeout(() => navigate(view === 'corporate' ? "/private/corporate/profile" : "/private/profile"), 1000);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
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
      <FormControl isRequired my={5}>
        <FormLabel htmlFor="surnames">Correo electronico</FormLabel>
        <Input
          id="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          onKeyDown={handleKeyPress}
        />
      </FormControl>
      <FormControl isRequired my={5}>
        <FormLabel htmlFor="name">Contraseña</FormLabel>
        <Input
          id="password"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          onKeyDown={handleKeyPress}
        />
      </FormControl>

      <Button
        ref={buttonRef} // Assign a ref to the button
        mt={4}
        bg={COLORS.primary}
        color={'white'}
        type="submit"
        width={"100%"}
        onClick={handleSubmit}
        isLoading={loading}
      // disabled={isEmpty(email)}
      >
        Entrar
      </Button>

      {emptyFieldMessage && (
        <Text my={2} color={"red"}>
          Rellena todos los campos
        </Text>
      )}
    </Box>
  );
};

export default LoginForm;

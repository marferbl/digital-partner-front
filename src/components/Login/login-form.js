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
import ChangePassword from "./Change-password";
import { useTranslation } from 'react-i18next'; // Importa useTranslation

const LoginForm = () => {
  const { t } = useTranslation("global"); // Inicializa la traducción
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
            title: t("loginSuccessTitle"),
            description: t("loginSuccessMessage"),
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
            title: t("loginErrorTitle"),
            description: err.response.data.message || t("loginErrorMessage"),
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
        <FormLabel htmlFor="email">{t("emailLabel")}</FormLabel> {/* Traducción del texto */}
        <Input
          id="email"
          placeholder={t("emailPlaceholder")}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          onKeyDown={handleKeyPress}
        />
      </FormControl>
      <FormControl isRequired my={5}>
        <FormLabel htmlFor="password">{t("passwordLabel")}</FormLabel> {/* Traducción del texto */}
        <Input
          id="password"
          placeholder={t("passwordPlaceholder")}
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
      >
        {t("loginButton")} {/* Traducción del botón */}
      </Button>

      {emptyFieldMessage && (
        <Text my={2} color={"red"}>
          {t("emptyFieldMessage")} {/* Traducción del mensaje */}
        </Text>
      )}

      <ChangePassword />
    </Box>
  );
};

export default LoginForm;

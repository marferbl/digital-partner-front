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
  Stack
} from "@chakra-ui/react";
import axios from "axios";
import CaptchaComponent from "../base/captcha-component";
import { useToast } from "@chakra-ui/react";
import { isEmpty } from "../../hooks/isEmpty";
import { login, signup } from "../../services/auth";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { COLORS, DARK_COLORS } from "../../colors/colors";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { IoIosArrowRoundForward } from 'react-icons/io';

const RegisterForm = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAux, setPasswordAux] = useState("");

  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rol, setRol] = useState('1');
  const [error, setError] = useState({ message: null });

  const toast = useToast();

  const [captcha, setCaptcha] = useState(null);
  const [emptyFieldMessage, setEmptyFieldMessage] = useState(false);

  const resetFields = () => {
    setEmail("");
  };

  const handleSubmit = () => {
    if (isEmpty(email) || isEmpty(password)) {
      setEmptyFieldMessage(true);
      return;
    }
    setEmptyFieldMessage(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      setError({ message: t("invalidEmailFormatMessage") });
      return;
    }

    if (password.length < 8) {
      setError({ message: t("passwordTooShortMessage") });
      return;
    }

    signup(email, password, name, rol)
      .then((res) => {
        setEmptyFieldMessage(false);
        toast({
          title: t("accountCreatedTitle"),
          description: t("accountCreatedMessage"),
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate('/start');
      })
      .catch((err) => {
        toast({
          title: t("errorTitle"),
          description: err.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });

    resetFields();
  };

  return (
    <Box 
      py={0} 
      rounded={"xl"} 
      fontFamily='Roobert' 
      fontWeight={'light'}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSubmit();
        }
      }}
    >
      <Text fontSize="5xl" fontWeight="light" textAlign="center" color='white'>
        {t("register.welcome")}
      </Text>
      <Text fontWeight="light" textAlign="center" color={DARK_COLORS.neutral} mb={5}>
        {t("register.enterDataToCreate")}
      </Text>
      <FormControl my={5}>
        <FormLabel color='white' htmlFor="name">{t("nameLabel")}</FormLabel>
        <Input
          id="name"
          placeholder={t("namePlaceholder")}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </FormControl>
      <FormControl my={5}>
        <FormLabel color='white' htmlFor="email">{t("emailLabel")}</FormLabel>
        <Input
          id="email"
          placeholder={t("register.emailPlaceholder")}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormControl>

      <FormControl my={5}>
        <FormLabel color='white' htmlFor="password">{t("passwordLabel")}</FormLabel>
        <InputGroup size="md">
          <Input
            id="password"
            placeholder={t("passwordPlaceholder")}
            pr="4.5rem"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <InputRightElement>
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
        type="submit"
        width={"100%"}
        bg={DARK_COLORS.gridyellow}
        color={'black'}
        onClick={handleSubmit}
      >
        {t("registerButton")}
        <IoIosArrowRoundForward size={30} />
      </Button>

      {error.message && (
        <Text my={2} color={"red"}>
          {error.message}
        </Text>
      )}

      {emptyFieldMessage && (
        <Text my={2} color={"red"}>
          {t("emptyFieldMessage")}
        </Text>
      )}
    </Box>
  );
};

export default RegisterForm;

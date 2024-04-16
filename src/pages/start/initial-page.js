import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Image,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  Center,
  IconProps,
  Icon,
} from "@chakra-ui/react";
import LoginForm from "../../components/Login/login-form";
import { useContext, useEffect, useState } from "react";
import RegisterForm from "../../components/Register/register-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { COLORS } from "../../colors/colors";
import { useLocation } from 'react-router-dom';

export default function InitialPage() {
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    setShowLogin(location.pathname === '/initial-page-digit');
  }, [location.pathname])



  useEffect(() => {
    const view = localStorage.getItem("userView");
    isLoggedIn && navigate(view === 'corporate' ? "/private/corporate/profile" : "/private/profile");

  }, [isLoggedIn]);

  return (
    <Container maxW="lg" px={{ base: '0', sm: '8' }}>
      <Stack spacing="0">
        <Stack spacing="6">
          <Center>
            <Image src={'/logo-d.png'} height={16} w={16} />
          </Center>
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={{ base: 'xs', md: 'sm' }} mb={3} fontFamily={'Montserrat'}>{showLogin ? 'Inicia sesión' : 'Registrarse'}</Heading>
            {/* <Text color="fg.muted">
              {showLogin && '¿No tienes cuenta?'} <Text as={'span'} fontWeight={'bold'} color={COLORS.secondary} cursor={'pointer'} _hover={{ textDecor: 'underline' }} onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Registrarse' : 'Volver a login'}</Text>
            </Text> */}
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '4' }}
          px={{ base: '4', sm: '3' }}
          bg={{ base: 'transparent', sm: 'white' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            {showLogin ? <LoginForm /> : <RegisterForm />}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

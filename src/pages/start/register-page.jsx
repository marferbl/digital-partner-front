import { Helmet } from "react-helmet";

import { Box, Container } from "@chakra-ui/react";
import RegisterForm from "../../components/Register/register-form";
import { Outlet } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <Helmet
        title={"Registro / webcam"}
        titleTemplate={"Registro / webcam"}
        meta={[
          {
            name: `description`,
            content: "Registrar cuenta",
          },
          {
            property: `og:title`,
            content: "webcam",
          },
          {
            property: `og:description`,
            content: "Activa tu cuenta y aumenta tu bienestar al disminuir tus niveles de burnout y estrés.",
          },
          {
            property: `og:type`,
            content: `website`,
          },
        ]}
      />

      <Box position={"absolute"} zIndex={"1"} width={"100%"}>
        <Container pt={"5.7rem"} px={{ base: 2, lg: 0 }} maxW={"100%"} minH={"100vh"}>
          <Box w={"100%"} h={"80vh"}>
            <RegisterForm />
          </Box>
        </Container>
      </Box>
      <Outlet />
    </>
  );
};

export default RegisterPage;

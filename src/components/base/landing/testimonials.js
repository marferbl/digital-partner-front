import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }) => {
  return <Box maxW={{ base: "100%", md: "33%" }}>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={10}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      minH={230}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={20} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading mb={3}>Nuestros clientes dicen...</Heading>
          <Text>
            Profesionales, empresas e instituciones educativas que han utilizado
            nuestros servicios
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Gané en todo</TestimonialHeading>
              <TestimonialText>
                Conseguí encontrar las oportunidades que más se ajustaban a lo
                que buscaba. Me prepararon curriculum, prueba técnica y
                entrevistas con la empresa, y en nada estaba trabajando con
                ellos.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://media.licdn.com/dms/image/C4D03AQElft4xFQXoFA/profile-displayphoto-shrink_100_100/0/1662477945078?e=1686787200&v=beta&t=LthyXN135XW8Xb4juKE54qL2HM03Jt5bOkDbemi9Gd8"
              }
              name={"Miguel Muñoz"}
              title={"Back end developer"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Fácil lo dificil</TestimonialHeading>
              <TestimonialText>
                Llevaba 3 meses buscando un desarrollador con otras consultoras,
                hasta que encontre a boomiuz. En dos semanas tenía el perfil que
                quería y en menos de un mes ya estaba en plantilla.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
               "https://estaticos-cdn.prensaiberica.es/clip/1683fce3-29b9-4d56-905d-98eb2d00642e_21-9-aspect-ratio_default_0.jpg"
              }
              name={"Juan Carlos Bernabé"}
              title={"CEO de Bernatrelis S.L"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Inmejorable</TestimonialHeading>
              <TestimonialText>
                Boomiuz compartió con todos nuestros alumnos un pequeño taller
                sobre como preparar el curriculum y configurar su linkedIn. La
                verdad es que todos acabamos súper contentos.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              name={"Cristina Pellicer"}
              title={"Profesora de bootcamp"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}

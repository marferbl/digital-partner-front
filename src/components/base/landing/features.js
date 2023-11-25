import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";
import FeatureModal from "./featureModal";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={"100%"}
          h={20}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
        >
          {icon}
        </Flex>
        <Box textAlign={"center"}>
          <Heading size="md" mb={4}>
            {heading}
          </Heading>
          <Text my={5} mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Center w={"100%"}>
          <FeatureModal title={heading} image={icon} />
        </Center>
      </Stack>
    </Box>
  );
};

export default function Features() {
  return (
    <Box p={4} mt={10} >
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl" }}
          mb={3}
          fontWeight={"bold"}
        >
          ¿Que ofrecemos?
        </Heading>
        <Text color={"gray.500"}>
          Ofrecemos distintos servicios segun el tipo de perfil que seas,
          <br /> elige lo que más se adapte a ti...
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12} pb={"6rem"}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Profesional"}
            icon={
              <Image
                height={12}
                src={"https://cdn-icons-png.flaticon.com/512/4128/4128240.png"}
              />
            }
            description={
              "¿Buscando un cambio laboral pero harto de ofertas que ni te interesan ni se ajustan a tu perfil? ¡Te estamos esperando!"
            }
            href={"#"}
          />
          <Card
            heading={"Empresa"}
            icon={<Image src={"./company.jpeg"} height={16} />}
            description={
              "¿Estás buscando digitalizar tu compañía con los mejores profesionales del sector? ¡Podemos ayudarte!"
            }
            href={"#"}
          />
          <Card
            heading={"Centro formativo"}
            icon={<Image src={"./institutions.png"} height={16} />}
            description={
              "¿Quieres orientar a tus alumnos hacia su primera experiencia profesional? ¡Nosotros nos encargamos!"
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}

import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Logo = (props) => {
  return <Image src={"/logo-d.png"} h={10} ml={-2} />;
};

const NavLink = ({ label, link }) => {
  return (
    <Link to={link}>
      <Text _hover={{ textDecor: 'underline' }}>
        {label}
      </Text>
    </Link>
  )
}

export default function FooterLanding() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <NavLink label='¿Quiénes somos?' link='about' />
            <NavLink label='Preguntas frecuentes' link='faqs' />
            <Text fontSize={"sm"}>© 2024 digitalando. All rights reserved</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

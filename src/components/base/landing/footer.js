import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Icon,
  Flex
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import CountryFlag from "../country-flag";


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
          <Stack spacing={6}>
            <Box h={8} />
            <Flex align={'center'} gap={1}>
              <Icon as={FaInstagram} />
              <a href="https://www.instagram.com/digitalando_/">
                <Text>Instagram</Text>
              </a>
            </Flex>
            <Flex align={'center'} gap={1}>
              <Icon as={FaLinkedin} />
              <a href="https://www.linkedin.com/company/digital-ando">
                <Text>LinkedIn</Text>
              </a>
            </Flex>
          </Stack>
          <Stack spacing={6}>
            <Box h={8} />
            <Text>Español <CountryFlag country='spain' />  </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

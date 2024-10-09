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
import { useTranslation } from 'react-i18next'; // Importa useTranslation
import conditionsPDF from '../../../pdf/conditions.pdf'

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
  const { t } = useTranslation('global');
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 2fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>

            <NavLink label={t('whoWeAre')} link='about' />
            <NavLink label={t('frequentlyAskedQuestions')} link='faqs' />
            <a href={conditionsPDF} target="_blank" rel="noreferrer">
              <Text _hover={{ textDecor: 'underline' }}>Condiciones Generales de usuario</Text>
            </a>
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
            <Flex align={'center'} gap={2}>
              <Text>{t('spanish')} <CountryFlag country='spain' />  </Text>
              <Text>{t('english')} <CountryFlag country='england' />  </Text>
            </Flex>

          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

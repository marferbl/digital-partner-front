import {
  Box,
  Container,
  Image,
  Grid,
  GridItem,
  Stack,
  Text,
  useColorModeValue,
  Icon,
  Flex
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import CountryFlag from "../country-flag";
import { useTranslation } from "react-i18next";
import conditionsPDF from "../../../pdf/digitalando-user-conditions.pdf";
import videoUrl from "../../../videos/footer-split.mp4";
import conditions from '../../../pdf/conditions.pdf'
import cookies from '../../../pdf/cookies.pdf'
import privacypolicy from '../../../pdf/privacypolicy.pdf'
import brandkit from '../../../pdf/brandkit.pdf'


const Logo = (props) => {
  return <Image src={"/logo-d.png"} h={10} ml={-2} />;
};

const NavLink = ({ label, link }) => {
  return (
    <Link to={link}>
      <Text fontWeight={'bold'} _hover={{ textDecor: "underline" }} textTransform={'uppercase'} fontSize={{ base: 16, md: 20 }}>{label}</Text>
    </Link>
  );
};

export default function FooterLanding() {
  const { t } = useTranslation("global");
  return (
    <Flex
      justify={"center"}
      minH={"100vh"}
      position="relative"
      overflow="hidden" // Ensure the video does not overflow the container
      fontFamily={'Roobert'}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the video covers the container
          zIndex: -1,
          opacity: 1, // Adjust for brightness
        }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <Container maxW={"6xl"} py={10}>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}  // Three columns layout
          gap={8}
          minH={'50%'}
        >
          {/* First Column */}
          <GridItem textAlign="left" w='full' fontWeight={'light'}>
            <Stack spacing={6}>
              <Text fontSize={"sm"}>© 2024 digitalando. All rights reserved</Text>

              <Text fontSize={{ base: "2xl", md: "5xl" }} letterSpacing={2}>
                THE NEXT PIECE OF THE PUZZLE
              </Text>
            </Stack>
          </GridItem>

          {/* Second Column */}
          <GridItem textAlign="center">
            <Stack spacing={6}>
              <Text fontSize="lg">IDIOMA: Español / Ingles</Text>
            </Stack>
          </GridItem>

          {/* Third Column */}
          <GridItem textAlign="right">

            <Box>
              <Flex gap={3}>
                LEGAL
                <a href={cookies} target="_blank" rel="noreferrer">
                  <Text _hover={{ textDecor: "underline" }}>
                    Cookies                   </Text>
                </a>
                /
                <a href={conditions} target="_blank" rel="noreferrer">
                  <Text _hover={{ textDecor: "underline" }}>
                    Condiciones
                  </Text>
                </a>
                /
                <a href={privacypolicy} target="_blank" rel="noreferrer">
                  <Text _hover={{ textDecor: "underline" }}>
                    Privacidad
                  </Text>
                </a>
              </Flex>
            </Box>
            <Flex gap={3}>
              SOCIAL
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
            </Flex>

          </GridItem>
        </Grid>
        <Flex spacing={6} w='full' justify={'end'} gap={6}>
          <NavLink label={t("whoWeAre")} link="about" />
          -
          <NavLink label={t("frequentlyAskedQuestions")} link="faqs" />
          -
          <a href={brandkit} target="_blank" rel="noreferrer">
            <Text fontWeight={'bold'} _hover={{ textDecor: "underline" }} textTransform={'uppercase'} fontSize={{ base: 16, md: 20 }}>
              BRAND-KIT                   </Text>
          </a>

        </Flex>
      </Container>
    </Flex>
  );
}

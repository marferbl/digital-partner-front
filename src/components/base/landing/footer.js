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
  Flex,
  Select
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import CountryFlag from "../country-flag";
import { useTranslation } from "react-i18next";
import conditionsPDF from "../../../pdf/digitalando-user-conditions.pdf";
import conditions from '../../../pdf/conditions.pdf'
import cookies from '../../../pdf/cookies.pdf'
import privacypolicy from '../../../pdf/privacypolicy.pdf'
import brandkit from '../../../pdf/brandkit.pdf'
import { changeLanguage } from "../../../utils/languageUtils";

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
  const { t, i18n } = useTranslation("global");

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(i18n, newLanguage);
  };

  return (
    <Flex
      justify={"center"}
      position="relative"
      h='90vh'
      overflow="hidden"
      fontFamily={'Roobert'}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
          opacity: 1,
        }}
      >
        <source src={'/videos/footer-split.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <Container maxW={"6xl"} py={10} zIndex={99}>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={8}
          minH={'50%'}
        >
          {/* First Column */}
          <GridItem textAlign="left" w='full' fontWeight={'light'}>
            <Stack spacing={6}>
              <Text fontSize={"sm"}>{t('copyright')}</Text>

              <Text fontSize={{ base: "2xl", md: "5xl" }} letterSpacing={2}>
                {t('footer.nextPieceOfPuzzle')}
              </Text>
            </Stack>
          </GridItem>

          {/* Second Column */}
          <GridItem textAlign="center">
            <Stack spacing={6}>
              <Text
                fontSize="lg"
                cursor="pointer"
              >
                {t('footer.languages')}: <Text as='span' _hover={{ textDecor: "underline" }}
                  onClick={() => handleLanguageChange('es')}
                >{t('spanish')}</Text> /
                <Text as='span' _hover={{ textDecor: "underline" }}
                  onClick={() => handleLanguageChange('en')}>{t('english')}</Text>

              </Text>
            </Stack>
          </GridItem>

          {/* Third Column */}
          <GridItem textAlign="right">

            <Box>
              <Flex gap={3}>
                {t('footer.legal')}
                <a href={cookies} target="_blank" rel="noreferrer">
                  <Text _hover={{ textDecor: "underline" }}>
                    {t('footer.cookies')}
                  </Text>
                </a>
                /
                <a href={conditions} target="_blank" rel="noreferrer">
                  <Text _hover={{ textDecor: "underline" }}>
                    {t('footer.conditions')}
                  </Text>
                </a>
                /
                <a href={privacypolicy} target="_blank" rel="noreferrer">
                  <Text _hover={{ textDecor: "underline" }}>
                    {t('footer.privacy')}
                  </Text>
                </a>
              </Flex>
            </Box>
            <Flex gap={3}>
              {t('footer.social')}
              <Flex align={'center'} gap={1}>
                <Icon as={FaInstagram} />
                <a href="https://www.instagram.com/digitalando_/">
                  <Text>{t('footer.instagram')}</Text>
                </a>
              </Flex>
              <Flex align={'center'} gap={1}>
                <Icon as={FaLinkedin} />
                <a href="https://www.linkedin.com/company/digital-ando">
                  <Text>{t('footer.linkedin')}</Text>
                </a>
              </Flex>
            </Flex>

          </GridItem>
        </Grid>
        <Flex spacing={6} w='full' justify={'end'} gap={6}>
          <NavLink label={t("whoWeAre")} link="/about" />
          -
          <NavLink label={t("frequentlyAskedQuestions")} link="/faqs" />
          -
          <a href={brandkit} target="_blank" rel="noreferrer">
            <Text fontWeight={'bold'} _hover={{ textDecor: "underline" }} textTransform={'uppercase'} fontSize={{ base: 16, md: 20 }}>
              {t('footer.brandKit')}
            </Text>
          </a>

        </Flex>
      </Container>
    </Flex>
  );
}

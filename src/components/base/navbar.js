import { useState, useContext, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  useDisclosure,
  useColorModeValue,
  Text,
  Stack,
  Button,
  Select
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { COLORS, DARK_COLORS } from "../../colors/colors";
import { UserContext } from "../../context/userContext";
import { SoftwareSearcherInput } from "./software-searcher-input";
import { useTranslation } from "react-i18next";
import CountryFlag from "./country-flag";
import { useLocation } from "react-router-dom";



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, i18n } = useTranslation("global")
  const { isLoggedIn } = useContext(UserContext);
  const [selectedRoute, setSelectedRoute] = useState('home')
  const location = useLocation();



  useEffect(() => {
    if (location) {
      let locationName = location.pathname
      const text = locationName === '/' ? 'home' : locationName?.includes('private') ? 'portal' : 'explore'
      location && setSelectedRoute(text)
    }

  }, [location])

  const Links = [
    {
      label: 'home',
      link: '/',
      key: 'home'
    },
    {
      label: 'explore',
      link: '/search/',
      key: 'explore'
    },
    {
      label: 'myPanel',
      link: '/start',
      key: 'portal',
      hide: !isLoggedIn
    },
  ];

  const LinksMobile = [
    {
      label: 'home',
      link: '/',
      key: 'home'
    },
    { label: 'login', link: '/start', key: 'login' },

    // {
    //   label: 'explore',
    //   link: '/search/',
    //   key: 'explore'
    // },
    // {
    //   label: 'myPanel',
    //   link: '/start',
    //   key: 'portal',
    // },
  ];


  return (
    <>
      <Box bg='black' px={41} position='sticky' top={0} zIndex={99}>
        <Flex h={'80px'} alignItems={"center"} justifyContent={"space-between"}>
          <Box display={{ base: 'none', md: 'block' }} w={200}>
            <Link to="/">
              <img src="/logos/navbar.png" className="h-16 w-16" alt="Digitalando navbar logo" />
            </Link>
          </Box>
          <Box>
            {/* <HStack as="nav" display={{ base: "none", md: "flex" }} color="black" spacing="0" bg={DARK_COLORS.darkgray} rounded='3xl'>
              {Links.map((link) => (
                !link.hide && (
                  <Link
                    key={link.key}
                    to={{ pathname: link.link, state: { filter: link.param } }}
                    style={{ textDecoration: 'none' }}
                    aria-current={selectedRoute === link.key ? 'page' : undefined}
                  >
                    <Box
                      flex="1"
                      w={82}
                      p={2}
                      textAlign="center"
                      bg={selectedRoute === link.key ? DARK_COLORS.gridyellow : 'transparent'}
                      color={selectedRoute === link.key ? "black" : "white"}
                      _hover={{ shadow: 'xl' }}
                      rounded={selectedRoute === link.key ? '3xl' : 'none'}
                      fontSize={12}
                      py={3}
                      sx={{ userSelect: 'none' }}
                    >
                      {t(link.label)}
                    </Box>
                  </Link>
                )
              ))}
            </HStack> */}


          </Box>

          <Flex display={{ base: 'none', md: 'block' }} alignItems={"center"}>
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                color={'black'}
              >
                <Box p={3} w={120} _hover={{ transform: "scale(1.02)" }} color='white' rounded={'lg'}>
                  {!isLoggedIn ? <Link key={'/start'} to={{ pathname: '/start' }} >{t('login')}</Link> : ''}
                </Box>
              </HStack>
              <Flex gap={3} pr={3}>
                <Select
                  size="sm"
                  w="120px"
                  value={i18n.language}
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                  variant="ghost"
                  border="1px solid"
                  borderColor="pink.400"
                  color="white"
                  bg="transparent"
                  _hover={{ borderColor: "pink.300", bg: "transparent" }}
                  _focus={{ borderColor: "pink.500", boxShadow: "0 0 0 1px pink.500", bg: "transparent" }}
                  _active={{ bg: "transparent" }}
                >
                  <option value="es" style={{ backgroundColor: 'black', color: 'white' }}>Español</option>
                  <option value="en" style={{ backgroundColor: 'black', color: 'white' }}>English</option>
                </Select>
              </Flex>
            </HStack>
          </Flex>
          <IconButton
            size="sm"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            color="yellow.400"         // icon color
            borderColor="transparent"   // outline border color
            _hover={{ bg: 'transparent', borderColor: DARK_COLORS.gridyellow, color: DARK_COLORS.gridyellow }}
            _active={{ bg: 'transparent', borderColor: DARK_COLORS.gridyellow, color: DARK_COLORS.gridyellow }}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {LinksMobile.map((link) => (
                <Box fontSize={12} color={DARK_COLORS.gridyellow} fontWeight='light' textAlign={'right'} decoration={selectedRoute === link.key ? 'underline' : ''}>
                  {!link.hide && <Link to={{ pathname: link.link, state: { filter: link.param } }} href="#Contact">{t(link.label)}</Link>}
                </Box>
              ))}
              <Flex justify="flex-end" pt={2}>
                <Text
                  fontSize="10px"
                  color="pink.400"
                  cursor="pointer"
                  _hover={{ color: "pink.300" }}
                  onClick={() => i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
                >
                  {i18n.language === 'es' ? 'Cambiar a Inglés' : 'Change to Spanish'}
                </Text>
              </Flex>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

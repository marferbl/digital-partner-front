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
  Button
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
      label: 'Home',
      link: '/',
      key: 'home'
    },
    {
      label: 'Explorar',
      link: '/search/',
      key: 'explore'
    },
    {
      label: 'Mi panel',
      link: '/start',
      key: 'portal',
      hide: !isLoggedIn
    }
  ];

  return (
    <>
      <Box bg='black' px={41} position='sticky' top={0} zIndex={99}>
        <Flex h={'80px'} alignItems={"center"} justifyContent={"space-between"}>
          <Box display={{ base: 'none', md: 'block' }} w={200}>
            <Link to="/">
              <video src={'/videos/logo-symbol.mp4'} autoPlay loop muted style={{ width: '100px', height: '100px' }} />
            </Link>
          </Box>
          <Box>
            <HStack as="nav" display={{ base: "none", md: "flex" }} color="black" spacing="0" bg={DARK_COLORS.darkgray} rounded='3xl'>
              {Links.map((link) => (
                <Box
                  display={link.hide && !isLoggedIn ? 'none' : 'block'}
                  key={link.key}
                  as="button"
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
                >
                  {!link.hide && <Link to={{ pathname: link.link, state: { filter: link.param } }}>{link.label}</Link>}
                </Box>
              ))}
            </HStack>


          </Box>

          <Flex display={{ base: 'none', md: 'block' }} alignItems={"center"}>
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                color={'black'}
              >
                <Box p={3} w={200} _hover={{ transform: "scale(1.02)" }} color='white' rounded={'lg'}>
                  {!isLoggedIn ? <Link key={'/start'} to={{ pathname: '/start' }} >{'Iniciar sesión'}</Link> : ''}
                </Box>
              </HStack>
              {/* <Flex gap={3} pr={3}>
                <Button size={'small'} onClick={() => i18n.changeLanguage('es')}>
                  <CountryFlag country={'spain'} />
                </Button>
                <Button size={'small'} onClick={() => i18n.changeLanguage('en')}>
                  <CountryFlag country={'england'} />
                </Button>
              </Flex> */}
            </HStack>
          </Flex>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Box color={DARK_COLORS.gridyellow} fontWeight='semibold'>
                  {!link.hide && <Link to={{ pathname: link.link, state: { filter: link.param } }} href="#Contact">{link.label}</Link>}
                </Box>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

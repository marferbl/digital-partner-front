import { ReactNode, useContext } from "react";
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
import { COLORS } from "../../colors/colors";
import { UserContext } from "../../context/userContext";
import { SoftwareSearcherInput } from "./software-searcher-input";
import { useTranslation } from "react-i18next";
import CountryFlag from "./country-flag";




export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, i18n } = useTranslation("global")
  const { isLoggedIn } = useContext(UserContext);

  const Links = [
    {
      label: isLoggedIn ? 'Ir al panel' : 'Iniciar sesión',
      link: '/start'
    },
    {
      label: 'Regístrate gratis',
      link: '/start/a',
      param: 'register',
      hide: true
    }];

  return (
    <>
      <Box bg={useColorModeValue("gray.50", "gray.900")} px={4}>
        <Flex h={'80px'} alignItems={"center"} justifyContent={"space-between"}>
          <Box display={{ base: 'none', md: 'block' }}>
            <Link to="/">
              <Image src={"/logo-digitalando.png"} height={14} pl={4} />
            </Link>

          </Box>
          <SoftwareSearcherInput />
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex display={{ base: 'none', md: 'block' }} alignItems={"center"}>
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                color={'black'}
              >
                {Links.map((link) => (
                  <Box p={3} _hover={{ transform: link.param ? "scale(1.02)" : "scale(1.04)" }} fontWeight={link.param ? 'bold' : 'inherit'} rounded={'lg'} bg={link.param && !link.hide ? COLORS["digitalando.green"] : 'inherit'} color={link.param ? 'white' : 'inherit'}>
                    {!link.hide && <Link key={link} to={{ pathname: link.link, state: { filter: link.param } }} >{link.label}</Link>}
                  </Box>
                ))}
              </HStack>
              <Flex gap={3} pr={3}>
                <Button size={'small'} onClick={() => i18n.changeLanguage('es')}>
                  <CountryFlag country={'spain'} />
                </Button>
                <Button size={'small'} onClick={() => i18n.changeLanguage('en')}>
                  <CountryFlag country={'england'} />
                </Button>
              </Flex>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Box>
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

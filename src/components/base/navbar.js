import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  useDisclosure,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { COLORS } from "../../colors/colors";

const Links = [{
  label: 'Iniciar sesión',
  link: '/newRouteHidden'
}];


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#Testimonials"}
  >
    {children}
  </Link>
);
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.50", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to={'/'}>
            <Text fontSize="lg" fontWeight="bold" color={COLORS.primary} p={2} rounded={'xl'}>
              TheDigitalPartner
            </Text>
          </Link>
          <Flex h={16} alignItems={"center"}>
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                color={'black'}
              >
                {Links.map((link) => (
                  <Box p={3} _hover={{ fontWeight:800 }} rounded={'lg'}>
                    <Link to={link.link}>{link.label}</Link>
                  </Box>
                ))}
              </HStack>
            </HStack>
          </Flex>
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                // <NavLink key={link}>{link}</NavLink>
                <a href="#Contact">Hero</a>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
    </>
  );
}

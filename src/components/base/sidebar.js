import React, { ReactNode, useContext } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiUsers,
  FiStar,
  FiDatabase,
  FiUser,
  FiMenu,
  FiTool,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const LinkItems = [
  { name: "Inicio", icon: FiHome },
  { name: "Panel", icon: FiTrendingUp },
];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();



  return (
    <Box minH="100vh" bg={'#f8fafc'}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="6">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const { userView } = useContext(UserContext);

  const userRoutes = [
    { name: "Perfil", icon: FiUser, to: "profile" },
    { name: "Freelance", icon: FiTrendingUp, to: "freelance" },
    { name: "Guru", icon: FiStar, to: "dashboard" },
  ]

  const adminRoutes = [
    { name: "Corporate", icon: FiDatabase, to: "corporate/profile" },
    { name: "Soluciones", icon: FiTool, to: "corporate/solutions" },


  ]
  return (
    <Box
      bg={useColorModeValue("white", "gray.100")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.400")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="5" justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold" color={'black'} p={3} rounded={'xl'}>
          TheDigitalPartner
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {userView === 'corporate' ? (adminRoutes.map((link) => (
        <NavItem key={link.name} icon={link.icon} to={link.to}>
          {link.name}
        </NavItem>
      ))) : (userRoutes.map((link) => (
        <NavItem key={link.name} icon={link.icon} to={link.to}>
          {link.name}
        </NavItem>
      )
      )
      )}

    </Box>
  );
};

const NavItem = ({ icon, children, to, ...rest }) => {
  return (
    <Flex
      align="center"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: "cyan.400",
        color: "white",
      }}
      {...rest}
    >
      <Link to={to} style={{ width: '100%', padding: '12px', display: 'flex', alignItems: 'center' }}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Link>

    </Flex>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};

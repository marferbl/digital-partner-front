import React, { useEffect, useContext } from "react";
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
  FiRepeat,
  FiBookOpen,
  FiCalendar,
  FiSearch,
  FiUserCheck
} from "react-icons/fi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { FiGrid } from "react-icons/fi";
import { COLORS } from "../../colors/colors";
import { useState } from "react";
import { getApplications } from "../../services/corporate";

const LinkItems = [
  { name: "Inicio", icon: FiHome },
  { name: "Panel", icon: FiTrendingUp },
];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);



  return (
    <Box minH="100vh" bg={'#f8fafc'}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        isSidebarOpen={isSidebarOpen} setIsSidebarOpen={() => setIsSidebarOpen(!isSidebarOpen)}
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
          <SidebarContent onClose={onClose} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: isSidebarOpen ? 60 : 10 }} p="6">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, isSidebarOpen, setIsSidebarOpen, ...rest }) => {
  const { userView, me } = useContext(UserContext);
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const APPLICATIONS = ['corporate', 'solutions', 'services', 'events', 'teamManagement', 'recruitment', 'licenses']

  useEffect(() => {
    if (me && me.corporate) {
      getCompanyApplications();
    }
  }, [me])


  useEffect(() => {
    if (applications) {
      const arrayTrue = Object.keys(applications).filter(key => applications[key]);
      const array = APPLICATIONS.filter(app => arrayTrue.includes(app));
      setFilteredApplications(array);
    }

  }, [applications]);

  const getCompanyApplications = async () => {
    if (!me.corporate) {
      return;
    }
    const res = await getApplications(me.corporate._id);
    if (res) {
      setApplications(res.data.applications);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const userRoutes = [
    { name: "Perfil", icon: FiUser, to: "profile" },
    // { name: "Digital Profile", icon: FiUserCheck, to: "/digital-profile", },
    { name: "Freelance", icon: FiTrendingUp, to: "freelance", soon: true },
    { name: "Empleo", icon: FiGrid, to: "dashboard", soon: true },
    { name: "Gurús", icon: FiStar, to: "dashboard", soon: true },

  ]

  const adminRoutes = [
    { name: "Corporate", icon: FiDatabase, to: "corporate/profile", application: 'corporate' },
    { name: "Soluciones", icon: FiTool, to: "corporate/solutions", application: 'solutions' },
    { name: "Servicios", icon: FiRepeat, to: "corporate/service", application: 'services' },
    { name: "Eventos", icon: FiCalendar, to: "corporate/users", soon: true, application: 'events' },
    { name: "Equipo", icon: FiUsers, to: "corporate/users", soon: true, application: 'teamManagement' },
    { name: "Licencias", icon: FiBookOpen, to: "corporate/users", soon: true, application: 'licenses' },
    { name: "Ofertas", icon: FiSearch, to: "corporate/users", soon: true, application: 'recruitment' },
  ]

  const adminRoutesFiltered = adminRoutes.filter((route) => filteredApplications.includes(route.application) || route.application === 'corporate')


  return (
    <Box
      bg={useColorModeValue("white", "gray.100")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.400")}
      w={isSidebarOpen ? { base: "full", md: 60 } : 0}
      pos="fixed"
      h="full"
      transition="width 0.3s ease"
      {...rest}
    >
      <Flex w='full' justify={isSidebarOpen ? 'end' : ''}>
        <IconButton
          bg={'white'}
          variant="outline"
          onClick={toggleSidebar}
          aria-label="open menu"
          icon={isSidebarOpen ? <FaAngleLeft /> : <FaAngleRight />}
          mt={4}
          mx={1}
        />
      </Flex>
      {isSidebarOpen &&
        <>
          <Flex mt={-10} mb={10} h="10" alignItems="center" ml={1} justifyContent="space-between">
            <Link to="/">
              <Image ml={3} src={"/logo-digitalando.png"} height={12} />
            </Link>
            <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
          </Flex>
          {userView === 'corporate' ? (adminRoutesFiltered.map((link) => (
            <NavItem key={link.name} icon={link.icon} to={link.to} soon={link.soon}>
              {link.name}
              {link.soon ? <Text fontSize={9} color="gray.400" ml="auto">Próximamente</Text> : null}

            </NavItem>
          ))) : (userRoutes.map((link) => (
            <NavItem key={link.name} icon={link.icon} to={link.to} soon={link.soon}>
              {link.name}
              {link.soon ? <Text fontSize={9} color="gray.400" ml="auto">Próximamente</Text> : null}

            </NavItem>
          )
          )
          )}
        </>
      }

    </Box>
  );
};


const NavItem = ({ icon, children, to, soon, ...rest }) => {
  return (
    <Flex
      align="center"
      mx="4"
      borderRadius="lg"
      role="group"
      _hover={!soon && {
        bg: "cyan.400",
        color: "white",
      }}
      color={soon ? "gray.400" : COLORS.primary}
      {...rest}
    >
      <Link to={!soon ? to : null} style={{ width: '100%', padding: '12px', display: 'flex', alignItems: 'center', cursor: !soon ? 'pointer' : 'not-allowed' }}>
        {icon && (
          <Icon
            mr="3"
            fontSize="16"
            _groupHover={!soon && {
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

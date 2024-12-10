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
  Menu,
  MenuList,
  Button,
  MenuItem
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
import { SoftwareSearcherInput } from "./software-searcher-input";
import { useLocation } from 'react-router-dom';




const LinkItems = [
  { name: "Inicio", icon: FiHome },
  { name: "Panel", icon: FiTrendingUp },
];

export const HorizontalMenu = ({ onClose, isSidebarOpen, setIsSidebarOpen, ...rest }) => {
  const { userView, me } = useContext(UserContext);
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const APPLICATIONS = ['corporate', 'solutions', 'services', 'events', 'teamManagement', 'recruitment', 'licenses']
  const [selectedKey, setSelectedKey] = useState('profile');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('solutions')) {
      setSelectedKey('solutions');
    } else if (location.pathname.includes('service')) {
      setSelectedKey('service');
    } else if (location.pathname.includes('events')) {
      setSelectedKey('events');
    } else if (location.pathname.includes('digital-profile')) {
      setSelectedKey('digital-profile');
    }
  }, [location])

  console.log(selectedKey)


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


  const userRoutes = [
    { name: "Perfil", icon: FiUser, to: "profile", key: 'profile' },
    { name: "Freelance", icon: FiTrendingUp, to: "digital-profile", key: 'digital-profile', soon: true },
    { name: "Empleo", icon: FiGrid, to: "dashboard", soon: true },
    { name: "Gurús", icon: FiStar, to: "dashboard", soon: true },
  ];

  const adminRoutes = [
    { name: "Mi Corporate", icon: FiDatabase, to: "corporate/profile", application: 'corporate', key: 'profile' },
    { name: "Soluciones", icon: FiTool, to: "corporate/solutions", application: 'solutions', key: 'solutions' },
    { name: "Servicios", icon: FiRepeat, to: "corporate/service", application: 'services', key: 'service' },
    { name: "Eventos", icon: FiCalendar, to: "corporate/events", application: 'events', key: 'events' },
    { name: "Equipo", icon: FiUsers, soon: true, application: 'teamManagement' },
    { name: "Licencias", icon: FiBookOpen, soon: true, application: 'licenses' },
    { name: "Ofertas", icon: FiSearch, soon: true, application: 'recruitment' },
  ];

  const adminRoutesFiltered = adminRoutes.filter((route) => filteredApplications.includes(route.application) || route.application === 'corporate');

  return (
    <Flex
      borderBottomColor={useColorModeValue("gray.200", "gray.400")}
      flexWrap="wrap"
      w="full"
      p={4}
      pb={8}
      justify="center"
      align="center"
      gap={4}
      {...rest}
    >
      {userView === 'corporate' ? (
        adminRoutesFiltered.map((link, index) => (
          <MenuButton
            key={index}
            keyLabel={link.key}
            icon={link.icon}
            to={link.to}
            soon={link.soon}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
          >
            {link.name}
          </MenuButton>
        ))
      ) : (
        userRoutes.map((link) => (
          <MenuButton
            keyLabel={link.key}
            icon={link.icon}
            to={link.to}
            soon={link.soon}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
          >
            {link.name}
          </MenuButton>
        ))
      )}
    </Flex>
  );
};

const MenuButton = ({ icon, children, to, soon, keyLabel, selectedKey, setSelectedKey, ...rest }) => {
  const isSelected = selectedKey === keyLabel;

  return (
    <Link to={!soon ? to : null}>

      <Flex
        as="button"
        flexDirection="column"
        align="center"
        mx="2"
        p="2"
        fontSize={{ base: "xs", md: "sm" }}
        borderRadius="md"
        bg={isSelected ? "white" : "transparent"}
        color={soon ? "gray.700" : isSelected ? "black" : 'white'}
        _hover={!soon && {
          bg: isSelected ? 'gray.600' : "gray.600",
          color: isSelected ? 'white' : "black",
        }}
        cursor={soon ? "not-allowed" : "pointer"}
        rounded="2xl"
        onClick={() => {
          if (!soon) {
            setSelectedKey(keyLabel);
          }
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Link>
  );
};




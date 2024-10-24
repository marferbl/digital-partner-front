import {
    Flex, Box, Image, Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Input,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
} from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { UserContext } from "../../context/userContext";
import { getMe } from '../../services/auth';
import { SoftwareSearcherInput } from './software-searcher-input';
import { useNavigate } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import { Tooltip } from '@chakra-ui/react'




export const NavbarUser = () => {
    const { loggedUser, userView, changeUserView, logOutUser, setMe, me } = useContext(UserContext);
    const navigate = useNavigate()


    useEffect(() => {
        setMeData()
    }, [])


    const LinkDropdown = ({ label, action }) => {
        return (
            <MenuItem onClick={action} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={14} textAlign={'center'} width={'full'} fontWeight={'bold'}>{label}</MenuItem>
        )
    }


    const setMeData = () => {
        getMe().then((res) => {
            setMe(res.data)
        })
    }

    const isInPanel = () => {
        return window.location.pathname.includes('private');
    }

    const goToSearch = () => {
        navigate(getRoute(), { state: { filters: {}, isFavorites: true } })
    }

    const getRoute = () => {
        return isInPanel() ? `/private/favorites/${''}` : `/favorites/${''}`;
    };

    return (
        <Flex w={'full'} justify={'space-between'}>
            <SoftwareSearcherInput />
            <Flex display={{ base: 'none', md: 'block' }}>
                <Menu>
                    <MenuButton as={Button} rounded={'xl'} p={2} bg={'white'} w={150} justify={'space-between'} align={'center'}>
                        <Flex justifyContent={'space-between'} alignItems={'center'}>
                            <Text fontSize={14}>{userView === 'corporate' ? 'Corporate' : 'Personal'}</Text>
                            <Image rounded={"100%"} h={6} w={6} src={me?.avatar} />
                        </Flex>
                    </MenuButton>
                    <MenuList width={20} p={0}>
                        <LinkDropdown label={userView === 'corporate' ? 'Cambiar a personal' : 'Cambiar a corporate'} action={() => changeUserView()} />
                        <LinkDropdown label={'Cerrar sesión'} action={logOutUser} />
                    </MenuList>
                </Menu>
                <Tooltip label="Tus favoritos">
                    <Button rounded={'xl'} variant='ghost' p={2} w={12} ml={2} justify={'space-between'} align={'center'} onClick={goToSearch}>
                        <FcLike size={20} />
                    </Button>
                </Tooltip>
            </Flex>
        </Flex>
    )
} 
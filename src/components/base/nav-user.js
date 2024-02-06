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
import { get } from 'mongoose';
import React, { useContext, useEffect } from 'react';
import { UserContext } from "../../context/userContext";
import { SoftwareSearcherInput } from './software-searcher-input';



export const NavbarUser = () => {
    const { loggedUser, userView, changeUserView, logOutUser } = useContext(UserContext);


    const LinkDropdown = ({ label, action }) => {
        return (
            <MenuItem onClick={action} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={14} textAlign={'center'} width={'full'} fontWeight={'bold'}>{label}</MenuItem>
        )
    }



    return (
        <Flex w={'full'} justify={'space-between'} >
            <SoftwareSearcherInput />
            <Menu>
                <MenuButton as={Button} rounded={'xl'} p={2} bg={'white'} w={150} justify={'space-between'} align={'center'}>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontSize={14}>{userView === 'corporate' ? 'Corporate' : 'Personal'}</Text>
                        <Image rounded={"100%"} h={6} src={loggedUser?.avatar} />
                    </Flex>
                </MenuButton>
                <MenuList width={20} p={0}>
                    <LinkDropdown label={userView === 'corporate' ? 'Cambiar a personal' : 'Cambiar a corporate'} action={() => changeUserView()} />
                    <LinkDropdown label={'Cerrar sesión'} action={logOutUser} />
                </MenuList>
            </Menu>

        </Flex>
    )
} 
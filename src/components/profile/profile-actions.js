import React, { useContext } from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { UserContext } from '../../context/userContext'


const ProfileActionsDropdown = ({ children }) => {

    const { logOutUser, changeUserView, userView, me } = useContext(UserContext)

    const LinkDropdown = ({ label, action, color }) => {
        return (
            <MenuItem _focus={{ bg: 'transparent' }} onClick={action} _hover={{ bg: 'gray.600' }} py={3} color={color || 'white'} h={'full'} fontSize={12} textAlign={'center'} width={'full'} fontWeight={'bold'} rounded='md'>{label}</MenuItem>
        )
    }

    return (
        <div>
            <Menu _focus={{ boxShadow: 'none' }}  // Remove focus outline
            >
                <MenuButton rounded={'xl'} p={2} w={150} justify={'space-between'} align={'center'}>
                    {children}
                </MenuButton>
                <MenuList width={20} p={0} bg='black' borderColor={'gray.400'}>
                    <LinkDropdown label={userView === 'corporate' ? 'Cambiar a cuenta personal' : 'Cambiar a cuenta corporate'} action={() => changeUserView()} />
                    <LinkDropdown label={'Cerrar sesión'} action={logOutUser} color={'red.300'} />
                </MenuList>
            </Menu>
        </div>
    )
}

export default ProfileActionsDropdown
import React, { useContext } from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { UserContext } from '../../context/userContext'
import { useTranslation } from "react-i18next";


const ProfileActionsDropdown = ({ children }) => {

    const { logOutUser, changeUserView, userView, me } = useContext(UserContext)

    const LinkDropdown = ({ label, action, color }) => {
        return (
            <MenuItem _focus={{ bg: 'transparent' }} onClick={action} _hover={{ bg: 'gray.600' }} py={3} color={color || 'white'} h={'full'} fontSize={12} textAlign={'center'} width={'full'} fontWeight={'bold'} rounded='md'>{label}</MenuItem>
        )
    }

    const { t } = useTranslation("global");

    return (
        <div>
            <Menu _focus={{ boxShadow: 'none' }}  // Remove focus outline
            >
                <MenuButton rounded={'xl'} p={2} w={150} justify={'space-between'} align={'center'}>
                    {children}
                </MenuButton>
                <MenuList width={20} p={0} bg='black' borderColor={'gray.400'}>
                    <LinkDropdown label={userView === 'corporate' ? t('profileUser.actions.changeToCorporate') : t('profileUser.actions.changeToPersonal')} action={() => changeUserView()} />
                    <LinkDropdown label={t('profileUser.actions.logout')} action={logOutUser} color={'red.300'} />
                </MenuList>
            </Menu>
        </div>
    )
}

export default ProfileActionsDropdown
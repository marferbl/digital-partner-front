import React, { useState, useEffect, useContext } from 'react'
import { Box, Button, Flex, Text, Input, GridItem, } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Grid,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { COLORS } from "../../../colors/colors";
import { createCorporate } from '../../../services/corporate';
import PartnerModalCreate from './create-service/partner';
import { createService } from '../../../services/service';





export const ButtonCreateService = ({ refreshServices }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [serviceType, setServiceType] = useState('');
    const [config, setConfig] = useState({});

    const closeModal = () => {
        onClose();
    }

    const openModal = (type) => {
        setServiceType(type);
        onOpen();
    }

    const create = async () => {
        createService({ ...config, serviceType: serviceType }).then((res) => {
            refreshServices();
            onClose();
        }
        ).catch((err) => {
            console.log(err);
        }
        );
    };

    return (
        <>
            <Menu>
                <MenuButton rounded={'xl'} p={2} bg={'white'} justify={'space-between'} align={'center'}>
                    <Button bg={COLORS.primary} color={'white'} _hover={{ bg: 'blue.700' }} onClick={onOpen}>Crear servicio</Button>
                </MenuButton>
                <MenuList width={20} p={0}>
                    <MenuItem onClick={() => { openModal('partner') }} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={14} textAlign={'center'} width={'full'} fontWeight={'bold'}>Partner</MenuItem>
                    <MenuItem onClick={() => { openModal('development') }} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={14} textAlign={'center'} width={'full'} fontWeight={'bold'}>Desarrollo</MenuItem>
                    <MenuItem onClick={() => { openModal('renting') }} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={14} textAlign={'center'} width={'full'} fontWeight={'bold'}>Renting</MenuItem>
                    <MenuItem onClick={() => { openModal('helps') }} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={14} textAlign={'center'} width={'full'} fontWeight={'bold'}>Ayudas</MenuItem>
                    <MenuItem onClick={() => { openModal('training') }} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={14} textAlign={'center'} width={'full'} fontWeight={'bold'}>Training</MenuItem>
                </MenuList>
            </Menu>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear Servicio ({serviceType})</ModalHeader>
                    <ModalCloseButton onClick={closeModal} />
                    <ModalBody py={5}>
                        {serviceType === 'partner' && <PartnerModalCreate onChangeConfig={(value) => {
                            setConfig(value)
                        }} />}
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={closeModal}>
                            cancelar
                        </Button>
                        <Button colorScheme='teal' onClick={create}>Confirmar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

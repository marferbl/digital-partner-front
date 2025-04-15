import React, { useState, useEffect, useContext } from 'react'
import { Box, Button, Flex, Text, Input, Image, Center, } from '@chakra-ui/react'
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
import { createService, updateService } from '../../../services/service';
import { ImageUploadInput } from '../../base/image-upload';





export const ButtonUpdateService = ({ refreshServices, item, children, serviceTypeDefault }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [serviceType, setServiceType] = useState('');
    const [config, setConfig] = useState({});
    const [logo, setLogo] = useState('');


    useEffect(() => {
        setConfig(item);
        setLogo(item?.logo)
    }, [item]);




    const closeModal = () => {
        onClose();
    }

    const openModal = (type) => {
        setServiceType(type);
        onOpen();
    }

    const create = async () => {
        const body = {
            ...config,
            serviceType: serviceTypeDefault || serviceType,
            logo: logo
        }
        updateService(item._id, body).then((res) => {
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
                <Box _hover={{ bg: 'gray.100' }} onClick={onOpen}>{children}</Box>

                <MenuList width={20} p={0}>
                    <MenuItem onClick={() => { openModal('partner') }} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={14} textAlign={'center'} width={'full'} fontWeight={'bold'}>Partner</MenuItem>
                    <MenuItem onClick={() => { openModal('development') }} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={14} textAlign={'center'} width={'full'} fontWeight={'bold'}>Desarrollo</MenuItem>
                    <MenuItem onClick={() => { openModal('renting') }} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={14} textAlign={'center'} width={'full'} fontWeight={'bold'}>Renting</MenuItem>
                    <MenuItem onClick={() => { openModal('helps') }} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={14} textAlign={'center'} width={'full'} fontWeight={'bold'}>Ayudas</MenuItem>
                    <MenuItem onClick={() => { openModal('training') }} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={14} textAlign={'center'} width={'full'} fontWeight={'bold'}>Training</MenuItem>
                    <MenuItem onClick={() => { openModal('growth') }} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={14} textAlign={'center'} width={'full'} fontWeight={'bold'}>Growth</MenuItem>

                </MenuList>
            </Menu>
            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear Servicio</ModalHeader>
                    <ModalCloseButton onClick={closeModal} />
                    <ModalBody py={5}>
                        <Center w={'full'} flexDir={'column'} gap={5}>
                            {logo && <Image src={logo} alt="Logo" w={32} h={32} rounded='lg' objectFit='cover' />}
                            <ImageUploadInput url={`service/uploadImage/${item?._id}`} big setLogo={setLogo} />
                        </Center>
                        <PartnerModalCreate initialConfig={item} type={serviceType} onChangeConfig={(value) => {
                            setConfig(value)
                        }} />
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={closeModal}>
                            cancelar
                        </Button>
                        <Button colorScheme='gray' onClick={create}>Confirmar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

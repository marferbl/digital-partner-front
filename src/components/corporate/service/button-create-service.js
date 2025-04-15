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
import { COLORS, DARK_COLORS } from "../../../colors/colors";
import { createCorporate } from '../../../services/corporate';
import PartnerModalCreate from './create-service/partner';
import { createService } from '../../../services/service';
import { ImageUploadInput } from '../../base/image-upload';





export const ButtonCreateService = ({ refreshServices }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [serviceType, setServiceType] = useState('');
    const [config, setConfig] = useState({});
    const [logo, setLogo] = useState('');

    const closeModal = () => {
        onClose();
    }

    const openModal = (type) => {
        setServiceType(type);
        onOpen();
    }

    const create = async () => {
        createService({ ...config, serviceType: serviceType, logo: logo }).then((res) => {
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
                <MenuButton rounded={'xl'} justify={'space-between'} align={'center'}>
                    <Button bg={DARK_COLORS.gridyellow} color={'black'} _hover={{ bg: 'gray.100' }} fontSize={{ base: 12, md: 16 }} onClick={onOpen}>Crear servicio</Button>
                </MenuButton>
                <MenuList width={20} p={0}>
                    <MenuItem onClick={() => { openModal('partner') }} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={14} textAlign={'center'} width={'full'} fontWeight={'bold'}>Partner</MenuItem>
                    <MenuItem onClick={() => { openModal('development') }} _hover={{ bg: 'gray.100' }} h={'full'} fontSize={14} textAlign={'center'} width={'full'} fontWeight={'bold'}>Desarrollo a medida</MenuItem>
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
                            {logo && <Image src={logo} alt="Logo" w={32} h={32} objectFit='cover' rounded='lg' />}
                            <ImageUploadInput url={`image/upload`} big setLogo={setLogo} />
                        </Center>
                        <PartnerModalCreate type={serviceType} onChangeConfig={(value) => {
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

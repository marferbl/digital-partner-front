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
import { ImageGalleryUpload } from '../../base/image-gallery-upload';

export const ButtonUpdateService = ({ refreshServices, item, children, serviceTypeDefault }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [currentStep, setCurrentStep] = useState(1);
    const [serviceType, setServiceType] = useState('');
    const [config, setConfig] = useState({});
    const [logo, setLogo] = useState('');
    const [galleryImages, setGalleryImages] = useState([]);

    useEffect(() => {
        setConfig(item);
        setLogo(item?.logo);
        setGalleryImages(item?.gallery || []);
    }, [item]);

    const closeModal = () => {
        onClose();
        setCurrentStep(1);
    }

    const openModal = (type) => {
        setServiceType(type);
        onOpen();
    }

    const create = async () => {
        const body = {
            ...config,
            serviceType: serviceTypeDefault || serviceType,
            logo: logo,
            gallery: galleryImages
        }
        updateService(item._id, body).then((res) => {
            refreshServices();
            onClose();
        }).catch((err) => {
            console.log(err);
        });
    };

    const handleNextStep = () => {
        if (currentStep < 2) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
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
            <Modal isOpen={isOpen} onClose={closeModal} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Editar Servicio</ModalHeader>
                    <ModalCloseButton onClick={closeModal} />
                    <ModalBody py={5}>
                        {currentStep === 1 && (
                            <Box>
                                <Center w={'full'} flexDir={'column'} gap={5}>
                                    {logo && <Image src={logo} alt="Logo" w={32} h={32} rounded='lg' objectFit='cover' />}
                                    <ImageUploadInput url={`service/uploadImage/${item?._id}`} big setLogo={setLogo} />
                                </Center>
                                <PartnerModalCreate initialConfig={item} type={serviceType} onChangeConfig={(value) => {
                                    setConfig(value)
                                }} />
                            </Box>
                        )}

                        {currentStep === 2 && (
                            <Box>
                                <Text fontWeight="bold" mb={4}>Galería de Imágenes</Text>
                                <ImageGalleryUpload url={`image/upload`} setGalleryImages={setGalleryImages} defaultUrls={galleryImages} />
                            </Box>
                        )}
                    </ModalBody>

                    <ModalFooter>
                        {currentStep > 1 && (
                            <Button variant='ghost' mr={3} onClick={handlePrevStep}>Anterior</Button>
                        )}
                        {currentStep === 1 ? (
                            <Button onClick={handleNextStep} colorScheme='gray'>Siguiente</Button>
                        ) : (
                            <Button colorScheme='gray' onClick={create}>Confirmar</Button>
                        )}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

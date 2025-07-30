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
import { ImageGalleryUpload } from '../../base/image-gallery-upload';
import { PaymentForm } from '../../stripe';
import { UserContext } from '../../../context/userContext';

export const ButtonCreateService = ({ refreshServices }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { getToken } = useContext(UserContext);

    const [currentStep, setCurrentStep] = useState(1);
    const [serviceType, setServiceType] = useState('');
    const [config, setConfig] = useState({});
    const [logo, setLogo] = useState('');
    const [galleryImages, setGalleryImages] = useState([]);
    const [paymentCompleted, setPaymentCompleted] = useState(false);

    const closeModal = () => {
        onClose();
        setCurrentStep(1);
        setServiceType('');
        setConfig({});
        setLogo('');
        setGalleryImages([]);
        setPaymentCompleted(false);
    }

    const openModal = (type) => {
        setServiceType(type);
        onOpen();
    }

    const create = async () => {
        try {
            await createService({
                ...config,
                serviceType: serviceType,
                logo: logo,
                gallery: galleryImages
            });
            refreshServices();
            closeModal();
        } catch (err) {
            console.log(err);
        }
    };

    const handleNextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handlePaymentSuccess = () => {
        setPaymentCompleted(true);
        create();
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
            <Modal isOpen={isOpen} onClose={closeModal} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear Servicio</ModalHeader>
                    <ModalCloseButton onClick={closeModal} />
                    <ModalBody py={5}>
                        {currentStep === 1 && (
                            <Box w={'full'} flexDir={'column'} gap={5} w='100%' px={{ base: 2, md: 10 }}>
                                {logo && <Image src={logo} alt="Logo" w={32} h={32} objectFit='cover' rounded='lg' />}
                                <ImageUploadInput url={`image/upload`} big setLogo={setLogo} />
                                <PartnerModalCreate type={serviceType} onChangeConfig={(value) => {
                                    setConfig(value)
                                }} />
                            </Box>
                        )}

                        {currentStep === 2 && (
                            <Box>
                                <Text fontWeight="bold" mb={4}>Galería de Imágenes</Text>
                                <ImageGalleryUpload url={`image/upload`} setGalleryImages={setGalleryImages} />
                            </Box>
                        )}

                        {currentStep === 3 && (
                            <Box>
                                <Text fontWeight="bold" mb={4}>Pago del Servicio</Text>
                                <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
                            </Box>
                        )}
                    </ModalBody>

                    <ModalFooter>
                        {currentStep > 1 && (
                            <Button variant='ghost' mr={3} onClick={handlePrevStep}>Anterior</Button>
                        )}
                        {currentStep === 1 ? (
                            <Button onClick={handleNextStep} disabled={!config.title || !config.description || !config.languages || !config.countries || !config.web} colorScheme='gray'>Siguiente</Button>
                        ) : currentStep === 2 ? (
                            <Button onClick={handleNextStep} colorScheme='gray'>Siguiente</Button>
                        ) : (
                            <></>
                        )}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input, FormControl, FormLabel, useDisclosure } from '@chakra-ui/react';
import { createCertification } from '../../../../../services/certification';
import { COLORS, DARK_COLORS } from "../../../../../colors/colors"


export const ButtonCreateCertification = ({ refreshCertifications, disabled, id }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [certificationData, setCertificationData] = useState({ name: '', link: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCertificationData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        const data = { ...certificationData, solution: id }
        createCertification(data).then(() => {
            refreshCertifications();
            onClose()
        }).catch((error) => {
            console.log(error)
        }
        );
    };

    return (
        <>
            <Button bg={DARK_COLORS.gridyellow} color={'white'} _hover={{ bg: 'blue.700' }} disabled={disabled} onClick={onOpen}>Crear certificación</Button>

            <Modal isOpen={isOpen} onClose={onClose} size='md'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear Certificación</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={5}>
                        <FormControl>
                            <FormLabel>Nombre</FormLabel>
                            <Input type="text" name="name" value={certificationData.name} onChange={handleChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Enlace</FormLabel>
                            <Input type="text" name="link" fontSize={12} value={certificationData.link} onChange={handleChange} />
                        </FormControl>
                        <Button mt={4} onClick={handleSubmit}>Guardar</Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
};

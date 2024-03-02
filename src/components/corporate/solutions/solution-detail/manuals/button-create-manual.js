import React, { useState, useEffect, useContext } from 'react'
import { Box, Button, Flex, Text, Input, Textarea, } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Select
} from '@chakra-ui/react'
import { COLORS } from "../../../../../colors/colors"
import CreateManualForm from '../../../../base/uploadDocument';





export const ButtonCreateManual = ({ refreshManuals, disabled }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button bg={COLORS.primary} color={'white'} _hover={{ bg: 'blue.700' }} disabled={disabled} onClick={onOpen}>Crear manual</Button>

            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear Manual</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={5}>
                        <CreateManualForm refreshManuals={refreshManuals} onClose={onClose} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

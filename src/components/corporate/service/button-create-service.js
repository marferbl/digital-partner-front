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

} from '@chakra-ui/react'
import { COLORS } from "../../../colors/colors";
import { createCorporate } from '../../../services/corporate';
import { SearchSelectSolutions } from '../../base/search-select-solutions';





export const ButtonCreateService = ({ refreshCorporate }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [step, setStep] = useState(1);
    const [selected, setSelected] = useState('');


    const create = async () => {
        createCorporate().then((res) => {
            refreshCorporate();
            onClose();
        }).catch((err) => {
            console.log(err);
        });
    };

    const renderCard = (label) => {
        return (
            <Box onClick={() => { setSelected(label) }} cursor='pointer' textAlign={'center'} fontSize={12} display={'flex'} alignItems={'start'} flexDir={'column'} py={8} borderWidth={1} shadow='xl' _hover={{ transform: 'scale(1.05)' }}>
                <Text textAlign={'center'} w='full'>{label}</Text>
            </Box>
        )
    }

    return (
        <>
            <Button bg={COLORS.primary} color={'white'} _hover={{ bg: 'blue.700' }} onClick={onOpen}>Crear servicio</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear Servicio</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={5}>
                        {step === 1 && <Box fontSize={12} display={'flex'} alignItems={'start'} flexDir={'column'}>
                            <Grid templateColumns="repeat(6, 1fr)" gap={6} w='full'>
                                <GridItem textAlign={'center'} colSpan={2} m>
                                    {renderCard('Partner')}
                                </GridItem>
                                <GridItem textAlign={'center'} colSpan={2}>
                                    {renderCard('Desarrollo')}
                                </GridItem>
                                <GridItem textAlign={'center'} colSpan={2} m>
                                    {renderCard('Renting')}
                                </GridItem>
                                <GridItem textAlign={'center'} colSpan={3}>
                                    {renderCard('Ayudas')}
                                </GridItem>
                                <GridItem textAlign={'center'} colSpan={3}>
                                    {renderCard('Training')}
                                </GridItem>
                            </Grid>
                        </Box>}
                        {step === 2 && <Box>
                            <SearchSelectSolutions />
                        </Box>
                        }
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            cancelar
                        </Button>
                        <Button onClick={() => setStep(step + 1)} colorScheme='teal'>Confirmar</Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

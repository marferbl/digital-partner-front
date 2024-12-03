import React, { useState, useEffect, useContext } from 'react'
import { Box, Button, Flex, Text, Input, } from '@chakra-ui/react'
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
import { COLORS, DARK_COLORS } from "../../colors/colors";
import { createCorporate } from '../../services/corporate';
import { PaymentForm } from '../stripe';
import { FaInfoCircle } from "react-icons/fa";
import SearchSelectCountries from '../base/search-select-countries';
import PlansSelector from '../plan/plan-selector';





export const ButtonCreateCorporate = ({ refreshCorporate }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [country, setCountry] = useState("");
    const [name, setName] = useState("");
    const [cif, setCif] = useState("");
    const [size, setSize] = useState("");
    const [web, setWeb] = useState("");
    const [step, setStep] = useState(0);
    const [selectedPlan, setSelectedPlan] = useState('');
    const [loading, setLoading] = useState(false);

    const create = async () => {
        setLoading(true);
        createCorporate({ name, cif, size: Number(size), country, web, plan: selectedPlan }).then((res) => {
            refreshCorporate();
            onClose();
            setLoading(false);
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        });
    };

    const closeModal = () => {
        onClose();
        setName("");
        setCif("");
        setSize("");
        setCountry("");
        setWeb("");
        setStep(0);
    };

    const handlePlanSelection = (plan) => {
        setSelectedPlan(plan)
    };

    return (
        <>
            <Button bg={DARK_COLORS.gridyellow} color={'black'} _hover={{ bg: 'blue.700' }} onClick={onOpen}>Crear corporate</Button>

            <Modal isOpen={isOpen} onClose={closeModal} size={step === 1 ? '4xl' : 'xl'}>
                <ModalOverlay />
                <ModalContent bg={'#1a1a1a'}>
                    <ModalHeader color='white'>Crear Corporate</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={5}>
                        {step === 0 ? <Box fontSize={12} display={'flex'} alignItems={'start'} flexDir={'column'} color='white'>
                            <Text fontWeight={"bold"}>Nombre: </Text>
                            <Input value={name} w={300} onChange={(e) => setName(e.target.value)} placeholder={'Corporate Nueva'} />
                            <Flex gap={2}>
                                <Box >
                                    <Text mt={3} fontWeight={"bold"}>
                                        CIF:{" "}
                                    </Text>
                                    <Input
                                        value={cif}
                                        onChange={(e) => setCif(e.target.value)}
                                        placeholder="A12345678"
                                    />
                                </Box>
                                <Box>
                                    <Text mt={3} fontWeight={"bold"}>
                                        Numero de empleados:{" "}
                                    </Text>
                                    <Input
                                        placeholder="20"
                                        type={"number"}
                                        value={size}
                                        onChange={(e) => setSize(e.target.value)}
                                    />
                                </Box>
                            </Flex>


                            <Text mt={3} fontWeight={"bold"}>
                                País:{" "}
                            </Text>
                            <SearchSelectCountries w='full' isMulti={false} onChange={(value) => setCountry(value)} />
                            <Text mt={3} fontWeight={"bold"}>
                                Página web:{" "}
                            </Text>
                            <Input
                                placeholder="www.corporate.com"
                                value={web}
                                onChange={(e) => setWeb(e.target.value)}
                            />
                        </Box> : step === 1 ? <Box>
                            <PlansSelector setPlanSelected={handlePlanSelection} selectedPlan={selectedPlan} />
                        </Box> : <Box py={1}>
                            <Flex flexDir={'column'} pb={8} >
                                <Flex align='baseline' justify={'start'} color='white'>
                                    <Text ml={2} fontSize={50} fontWeight={'extrabold'}> 0€</Text>
                                </Flex>
                                <Flex align='start' justify={'start'} ml={2}>
                                    <FaInfoCircle size={20} color='white' />
                                    <Text fontSize={12} ml={2} color='white'>
                                        El pago unico incluye la creación de la corporate y la publicación de una oferta de servicio o de solución.
                                    </Text>
                                </Flex>
                            </Flex>
                            <Box position='relative' minH={52} >
                                <Text align={'center'} position={'absolute'} left={'%'} top={'40%'} zIndex={99} bg={'gray.100'} rounded='xl' p={2}>
                                    Para pagos de 0 euros no es necesario introducir datos de pago.
                                </Text>
                                <Box opacity={0.15}>
                                    <PaymentForm />
                                </Box>
                            </Box>
                        </Box>}
                    </ModalBody>

                    <ModalFooter>
                        <Button bg={'gray.200'} mr={3} onClick={closeModal}>
                            cancelar
                        </Button>
                        <Button disabled={loading} bg={DARK_COLORS.gridyellow} onClick={() => { step < 2 ? setStep(step + 1) : create() }} colorScheme='gray'>{loading ? 'Creando...' : step < 2 ? 'Continuar' : 'Confirmar'}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

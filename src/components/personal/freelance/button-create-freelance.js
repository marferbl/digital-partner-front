import React, { useState, useEffect, useContext } from 'react'
import { Box, Button, Flex, Text, Input, Textarea } from '@chakra-ui/react'
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
import { COLORS } from '../../../colors/colors';
import SkillSelector from "./skills-select"
import { FinancialStep } from "./financial-step"


export const ButtonCreateFreelance = ({ refreshCorporate, disabled }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [step, setStep] = useState(1);

    const [country, setCountry] = useState("");
    const [description, setDescription] = useState("");
    const [slogan, setSlogan] = useState("");
    const [web, setWeb] = useState("");
    const [telephone, setTelephone] = useState("");
    const [skills, setSkills] = useState({});
    const [financial, setFinancial] = useState({});

    const closeModal = () => {
        setStep(1);
        onClose();
    }

    const setSkillsData = (data) => {
        setSkills(data);
    }

    const setFinancialData = (data) => {
        setFinancial(data);
    }


    return (
        <>
            <Button bg={COLORS.primary} color={'white'} _hover={{ bg: 'blue.700' }} disabled={disabled} onClick={onOpen}>Alta como freelance</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent minH={520}>
                    <ModalHeader>Alta como freelance</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={5}>
                        {step === 1 ? <Box>
                            <Box fontSize={12} display={'flex'} alignItems={'start'} flexDir={'column'}>
                                <Text fontWeight={"bold"}>Especialidad: </Text>
                                <Input value={slogan} w={'full'} onChange={(e) => setSlogan(e.target.value)} placeholder={'Descripción en 10-12 palabras'} />
                                <Flex justify={'space-between'} gap={2}>
                                    <Flex flexDir={'column'} w={"40%"}>
                                        <Text mt={5} fontWeight={"bold"}>
                                            Telefono:{" "}
                                        </Text>
                                        <Input
                                            value={telephone}
                                            onChange={(e) => setTelephone(e.target.value)}
                                            placeholder="A12345678"
                                        />
                                    </Flex>
                                    <Flex flexDir={'column'} w={'60%'}>
                                        <Text mt={5} fontWeight={"bold"}>
                                            País:{" "}
                                        </Text>
                                        <Select placeholder='Select option' onChange={(e) => setCountry(e.target.value)}>
                                            <option value='option1'>Option 1</option>
                                            <option value='option2'>Option 2</option>
                                            <option value='option3'>Option 3</option>
                                        </Select>
                                    </Flex>
                                </Flex>
                                <Text mt={5} fontWeight={"bold"}>
                                    Descripción:{" "}
                                </Text>
                                <Textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder='Here is a sample placeholder'
                                    size='sm'
                                />
                                <Text mt={5} fontWeight={"bold"}>
                                    Web:{" "}
                                </Text>
                                <Input
                                    value={web}
                                    onChange={(e) => setWeb(e.target.value)}
                                    placeholder="www.portfolio.com"
                                />
                            </Box>
                        </Box> :
                            <Box>
                                {step === 2 ? <SkillSelector onChange={(data) => { setSkillsData(data) }} /> : <FinancialStep onChange={(data) => { setFinancialData(data) }} />}
                            </Box>
                        }
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={() => { step > 1 ? setStep(step - 1) : closeModal() }}>
                            {step === 1 ? "Cancelar" : "Atras"}
                        </Button>
                        <Button onClick={() => setStep(step + 1)} bg={COLORS.primary} color={'white'} _hover={{ bg: 'blue.600' }}>{step < 3 ? " Continuar" : "Confirmar"}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

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
import { createCorporate } from '../../../services/corporate';
import { COLORS } from '../../../colors/colors';
import SkillSelector from "./skills-select"


export const ButtonCreateFreelance = ({ refreshCorporate, disabled }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [step, setStep] = useState(1);

    const [country, setCountry] = useState("");
    const [description, setDescription] = useState("");
    const [slogan, setSlogan] = useState("");
    const [web, setWeb] = useState("");
    const [telephone, setTelephone] = useState("");






    const create = async () => {
        // createCorporate({ name, cif, size, country, web }).then((res) => {
        //     refreshCorporate();
        //     onClose();
        // }).catch((err) => {
        //     console.log(err);
        // });
    };

    return (
        <>
            <Button bg={COLORS.primary} color={'white'} _hover={{ bg: 'blue.700' }} disabled={disabled} onClick={onOpen}>Alta como freelance</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
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
                            </Box>
                        </Box> :
                            <Box>
                                <SkillSelector />
                            </Box>
                        }
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            cancelar
                        </Button>
                        <Button onClick={() => setStep(step + 1)} colorScheme='teal'>Continuar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

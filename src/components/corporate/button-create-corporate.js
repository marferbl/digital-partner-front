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
import { COLORS } from "../../colors/colors";
import { useBackendUrlBuilder } from '../../hooks/useBackendUrlBuilder';
import axios from 'axios';
import { UserContext } from '../../context/userContext';





export const ButtonCreateCorporate = ({ refreshCorporate }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [country, setCountry] = useState("");
    const [name, setName] = useState("");
    const [cif, setCif] = useState("");
    const [size, setSize] = useState("");
    const [web, setWeb] = useState("");


    const createCorporateURL = useBackendUrlBuilder("/corporate/create");
    const { getToken } = useContext(UserContext);


    const createCorporate = async () => {
        const storedToken = getToken();
        axios
            .post(
                createCorporateURL,
                { name, country, cif, size, web },
                {
                    headers: {
                        authorization: `Bearer ${storedToken || ""}`,
                    },
                }
            )
            .then((res) => {
                refreshCorporate()
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Button bg={COLORS.primary} color={'white'} _hover={{ bg: 'blue.700' }} onClick={onOpen}>Crear corporate</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear Corporate</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={5}>
                        <Box fontSize={12} display={'flex'} alignItems={'start'} flexDir={'column'}>
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
                            <Select placeholder='Select option' onChange={(e) => setCountry(e.target.value)}>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                            <Text mt={3} fontWeight={"bold"}>
                                Página web:{" "}
                            </Text>
                            <Input
                                placeholder="www.corporate.com"
                                value={web}
                                onChange={(e) => setWeb(e.target.value)}
                            />
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            cancelar
                        </Button>
                        <Button onClick={createCorporate} colorScheme='teal'>Confirmar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

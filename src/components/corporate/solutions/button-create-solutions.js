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
import { COLORS } from "../../../colors/colors";
import { createSolution } from '../../../services/solution';
import SearchSelect from '../../base/search-select';





export const ButtonCreateSolution = ({ refreshSolutions, disabled }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [countries, setCountries] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    // const [logo, setLogo] = useState("");
    const [website, setWebsite] = useState("");
    const [type, setType] = useState("");
    const [languages, setLanguages] = useState([]);
    const [feature, setFeature] = useState([]);

    const countriesOptions = [
        { value: 'england', label: 'Inglaterra' },
        { value: 'spain', label: 'España' },
        { value: 'france', label: 'Francés' },
        { value: 'italy', label: 'Italia' },
    ];
    const languageOptions = [
        { value: 'english', label: 'Inglés' },
        { value: 'spanish', label: 'Español' },
        { value: 'french', label: 'Francés' },
        { value: 'italian', label: 'Italiano' },
    ];
    const typesOptions = [
        { value: 'sector', label: 'Sector' },
        { value: 'multi', label: 'Multisector' },
    ];

    const create = async () => {
        createSolution({
            name,
            description,
            website,
            type: type.value,
            countries,
            languages,
            feature
        }).then((res) => {
            refreshSolutions();
            console.log("gola", res)
            onClose();
        }
        )
    };

    return (
        <>
            <Button bg={COLORS.primary} color={'white'} _hover={{ bg: 'blue.700' }} disabled={disabled} onClick={onOpen}>Crear solución digital</Button>

            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear Solución Digital</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={5}>
                        <Box fontSize={12} display={'flex'} alignItems={'start'} flexDir={'column'}>


                            <Flex gap={2} w='full'>
                                <Box w='48%'>
                                    <Text fontWeight={"bold"}>Nombre: </Text>
                                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder={'Corporate Nueva'} />
                                </Box>

                                <Box w='49%'>
                                    <Text fontWeight={"bold"}>
                                        Web:{" "}
                                    </Text>
                                    <Input
                                        placeholder="web.com"
                                        type={"text"}
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                </Box>
                            </Flex>


                            <Text mt={5} fontWeight={"bold"}>
                                Descripción:{" "}
                            </Text>
                            <Textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder='Descripción de la solución digital'
                                size='sm'
                            />
                            <Flex gap={2} w='full'>
                                <Box w='48%'>
                                    <Text mt={3} fontWeight={"bold"}>
                                        Tipo de software:{" "}
                                    </Text>
                                    <SearchSelect options={typesOptions} value={type} onChange={(value) => setType(value)} />
                                </Box>
                                <Box w='49%'>
                                    <Text mt={3} fontWeight={"bold"}>
                                        Funcionalidades:{" "}
                                    </Text>
                                    <SearchSelect options={languageOptions} value={feature} isMulti onChange={(value) => setFeature(value)} />
                                </Box>
                            </Flex>
                            <Flex gap={2} w='full'>
                                <Box w='48%'>
                                    <Text mt={3} fontWeight={"bold"}>
                                        Paises disponibles:{" "}
                                    </Text>
                                    <SearchSelect options={countriesOptions} value={countries} isMulti onChange={(value) => setCountries(value)} />
                                </Box>
                                <Box w='49%'>
                                    <Text mt={3} fontWeight={"bold"}>
                                        Idiomas:{" "}
                                    </Text>
                                    <SearchSelect options={languageOptions} value={languages} isMulti onChange={(value) => setLanguages(value)} />
                                </Box>
                            </Flex>

                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            cancelar
                        </Button>
                        <Button onClick={create} colorScheme='teal'>Confirmar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

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
    Select,
    Checkbox
} from '@chakra-ui/react'
import { COLORS } from "../../../colors/colors";
import { createSolution } from '../../../services/solution';
import SearchSelect from '../../base/search-select';
import { COUNTRIES, LANGUAGES } from '../../../utils/constants';





export const ButtonCreateSolution = ({ refreshSolutions, disabled }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [countries, setCountries] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    // const [logo, setLogo] = useState("");
    const [website, setWebsite] = useState("");
    const [sectorType, setSectorType] = useState("");
    const [languages, setLanguages] = useState([]);
    const [feature, setFeature] = useState([]);
    const [isVertical, setIsVertical] = useState(false);


    const countriesOptions = COUNTRIES
    const languageOptions = LANGUAGES

    const featureOptions = [
        { value: 'rrhh', label: 'RRHH' },
        { value: 'sellmarketing', label: 'Ventas y marketing' },
        { value: 'finance', label: 'Finanzas y contabilidad' },
        { value: 'logistics', label: 'Cadena de suministro' },
        { value: 'it', label: 'IT' },
        { value: 'data', label: 'Data' },
        { value: 'law', label: 'Legal' },
        { value: 'transversal', label: 'Transversal' },
    ];
    const typesOptions = [
        { value: 'services', label: 'Servicios' },
        { value: 'industrial', label: 'Industrial' },
        { value: 'firstSector', label: 'Primer sector' },

    ];

    const create = async () => {
        createSolution({
            name,
            description,
            website,
            sectorType,
            countries,
            languages,
            feature,
            isVertical
        }).then((res) => {
            refreshSolutions();
            console.log("gola", res)
            onClose();
        }
        )
    };

    const handleCheckboxChange = (event) => {
        setIsVertical(event.target.checked); // Update state based on checkbox's checked status
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
                            <Checkbox
                                mt={4}
                                isChecked={isVertical}
                                onChange={handleCheckboxChange} // Attach onChange handler to update state
                            >
                                <Text fontSize={13}>¿Es una solución vertical?</Text>
                            </Checkbox>
                            <Flex gap={2} w='full'>

                                {isVertical && <Box w='48%'>
                                    <Text mt={3} fontWeight={"bold"}>
                                        Sector:{" "}
                                    </Text>
                                    <SearchSelect options={typesOptions} value={sectorType} onChange={(value) => setSectorType(value)} />
                                </Box>}
                                <Box w={isVertical ? '49%' : '100%'}>
                                    <Text mt={3} fontWeight={"bold"}>
                                        Funcionalidades:{" "}
                                    </Text>
                                    <SearchSelect options={featureOptions} value={feature} onChange={(value) => setFeature(value)} />
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

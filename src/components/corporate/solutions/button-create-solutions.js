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
    Image,
    Checkbox,
    Center
} from '@chakra-ui/react'
import { COLORS } from "../../../colors/colors";
import { createSolution } from '../../../services/solution';
import SearchSelect from '../../base/search-select';
import { COUNTRIES, LANGUAGES } from '../../../utils/constants';
import SearchSelectSpecifyFeatures from '../../base/search-select-specify-features';
import { UploadImageGeneric } from '../../base/upload-image-generic';
import axios from 'axios';
import { UserContext } from '../../../context/userContext';
import { ImageUploadInput } from '../../base/image-upload';







export const ButtonCreateSolution = ({ refreshSolutions, disabled }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { getToken } = useContext(UserContext);


    const [countries, setCountries] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    // const [logo, setLogo] = useState("");
    const [website, setWebsite] = useState("");
    const [sectorType, setSectorType] = useState("");
    const [languages, setLanguages] = useState([]);
    const [feature, setFeature] = useState([]);
    const [isSectorial, setisSectorial] = useState(false);
    const [isErp, setIsErp] = useState(false);
    const [specifyFeatures, setSpecifyFeatures] = useState([]);
    const [logo, setLogo] = useState('');


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
        const specifyFeaturesArray = typeof specifyFeatures === 'string' ? [specifyFeatures] : specifyFeatures;

        try {
            const res = await createSolution({
                name,
                description,
                website,
                sectorType,
                countries,
                languages,
                features: feature,
                isErp,
                isSectorial,
                specifyFeatures: specifyFeaturesArray,
                logo: logo,
            });

            refreshSolutions();
            onClose();
        } catch (error) {
            console.error("Error creating solution:", error);
            // Handle the error appropriately here, e.g., show a notification to the user
        }
    };

    const handleCheckboxChange = (event) => {
        setisSectorial(event.target.checked); // Update state based on checkbox's checked status
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

                            <Center w={'full'} flexDir={'column'} gap={5}>
                                {logo && <Image src={logo} alt="Logo" w={32} h={32} objectFit='cover' />}
                                <ImageUploadInput url={`image/upload`} setLogo={setLogo} />

                            </Center>


                            <Flex gap={2} pt={6} w='full'>
                                <Box w='48%'>
                                    <Text fontWeight={"bold"}>Nombre: </Text>
                                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder={'Solución Nueva'} />
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
                            <Flex mt={3} gap={2} w='full' align={'center'}>
                                {/* <Checkbox
                                    w={'40%'}
                                    isChecked={isErp}
                                    onChange={(e) => setIsErp(e.target.checked)}
                                >
                                    <Text fontSize={13}>¿Es un ERP?</Text>
                                </Checkbox> */}
                                <Box flex={1}>
                                    <Text mt={5} fontWeight={"bold"}>
                                        Funcionalidades:{" "}
                                    </Text>
                                    <SearchSelect options={featureOptions} value={feature} isMulti={true} onChange={(value) => {
                                        const array = typeof value === 'string' ? [value] : value;
                                        setFeature(array)
                                    }} />
                                </Box>
                            </Flex>
                            {feature.length ? <Flex mt={3} gap={2} w='full' align={'center'}>
                                <Box flex={1}>
                                    <Text mt={5} fontWeight={"bold"}>
                                        Funcionalidades específicas:{" "}
                                    </Text>
                                    <SearchSelectSpecifyFeatures feature={feature} value={specifyFeatures} isMulti onChange={(value) => setSpecifyFeatures(value)} />
                                </Box>
                            </Flex> : <></>}
                            <Flex mt={3} gap={2} w='full' align={'center'} h={12}>
                                <Checkbox
                                    w={'40%'}
                                    isChecked={isSectorial}
                                    onChange={handleCheckboxChange} // Attach onChange handler to update state
                                >
                                    <Text fontSize={13}>¿Es una solución sectorial?</Text>
                                </Checkbox>
                                {isSectorial && <Box flex={1}>
                                    <SearchSelect options={typesOptions} value={sectorType} onChange={(value) => setSectorType(value)} />
                                </Box>}
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

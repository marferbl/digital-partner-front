import React, { useState, useContext } from 'react'
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
import { COLORS, DARK_COLORS } from "../../../colors/colors";
import { createSolution } from '../../../services/solution';
import SearchSelect from '../../base/search-select';
import { COUNTRIES, LANGUAGES } from '../../../utils/constants';
import SearchSelectSpecifyFeatures from '../../base/search-select-specify-features';
import { ImageUploadInput } from '../../base/image-upload';
import { ImageGalleryUpload } from '../../base/image-gallery-upload';  // Import the new component
import { UserContext } from '../../../context/userContext';

export const ButtonCreateSolution = ({ refreshSolutions, disabled }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { getToken } = useContext(UserContext);

    const [currentStep, setCurrentStep] = useState(1);  // Step tracker
    const [countries, setCountries] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [website, setWebsite] = useState("");
    const [sectorType, setSectorType] = useState("");
    const [languages, setLanguages] = useState([]);
    const [feature, setFeature] = useState([]);
    const [isSectorial, setisSectorial] = useState(false);
    const [specifyFeatures, setSpecifyFeatures] = useState([]);
    const [logo, setLogo] = useState('');
    const [galleryImages, setGalleryImages] = useState([]);  // Store uploaded images

    const countriesOptions = COUNTRIES;
    const languageOptions = LANGUAGES;
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
                isSectorial,
                specifyFeatures: specifyFeaturesArray,
                logo: logo,
                gallery: galleryImages,  // Add the uploaded gallery images
            });

            refreshSolutions();
            closeAndReset()
        } catch (error) {
            console.error("Error creating solution:", error);
        }
    };

    const handleNextStep = () => setCurrentStep(2);  // Move to step 2
    const handlePrevStep = () => setCurrentStep(1);  // Move to step 1

    const closeAndReset = () => {
        onClose();
        setCurrentStep(1);
        setName("");
        setDescription("");
        setWebsite("");
        setSectorType("");
        setCountries([]);
        setLanguages([]);
        setFeature([]);
        setisSectorial(false);
        setSpecifyFeatures([]);
        setLogo('');
        setGalleryImages([]);  // Reset the gallery images
    };



    return (
        <>
            <Button bg={DARK_COLORS.gridyellow} color={'black'} _hover={{ bg: 'blue.700' }} fontSize={{base: 10, md: 16}} disabled={disabled} onClick={onOpen}>Crear solución digital</Button>

            <Modal isOpen={isOpen} onClose={closeAndReset} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear Solución Digital</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={5}>
                        {currentStep === 1 && (
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
                                        <Text fontWeight={"bold"}>Web: </Text>
                                        <Input
                                            placeholder="web.com"
                                            type={"text"}
                                            value={website}
                                            onChange={(e) => setWebsite(e.target.value)}
                                        />
                                    </Box>
                                </Flex>

                                <Text mt={5} fontWeight={"bold"}>Descripción: </Text>
                                <Textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder='Descripción de la solución digital'
                                    size='sm'
                                />

                                <Flex mt={3} gap={2} w='full' align={'center'}>
                                    <Box flex={1}>
                                        <Text mt={5} fontWeight={"bold"}>Funcionalidades: </Text>
                                        <SearchSelect options={featureOptions} value={feature} isMulti={true} onChange={(value) => setFeature(value)} />
                                    </Box>
                                </Flex>
                                {feature.length > 0 && (
                                    <Flex mt={3} gap={2} w='full' align={'center'}>
                                        <Box flex={1}>
                                            <Text mt={5} fontWeight={"bold"}>Funcionalidades específicas: </Text>
                                            <SearchSelectSpecifyFeatures feature={feature} value={specifyFeatures} isMulti onChange={setSpecifyFeatures} />
                                        </Box>
                                    </Flex>
                                )}

                                <Flex mt={3} gap={2} w='full' align={'center'} h={12}>
                                    <Checkbox w={'40%'} isChecked={isSectorial} onChange={(e) => setisSectorial(e.target.checked)}>
                                        <Text fontSize={13}>¿Es una solución sectorial?</Text>
                                    </Checkbox>
                                    {isSectorial && (
                                        <Box flex={1}>
                                            <SearchSelect options={typesOptions} value={sectorType} onChange={setSectorType} />
                                        </Box>
                                    )}
                                </Flex>
                                <Flex gap={2} w='full'>
                                    <Box w='48%'>
                                        <Text mt={3} fontWeight={"bold"}>Paises disponibles: </Text>
                                        <SearchSelect options={countriesOptions} value={countries} isMulti onChange={setCountries} />
                                    </Box>
                                    <Box w='49%'>
                                        <Text mt={3} fontWeight={"bold"}>Idiomas: </Text>
                                        <SearchSelect options={languageOptions} value={languages} isMulti onChange={setLanguages} />
                                    </Box>
                                </Flex>
                            </Box>
                        )}

                        {currentStep === 2 && (
                            <Box>
                                <Text fontWeight="bold" mb={4}>Galería de Imágenes</Text>
                                <ImageGalleryUpload url={`image/upload`} setGalleryImages={setGalleryImages} />
                            </Box>
                        )}
                    </ModalBody>

                    <ModalFooter>
                        {currentStep === 2 && (
                            <Button variant='ghost' mr={3} onClick={handlePrevStep}>Anterior</Button>
                        )}
                        {currentStep === 1 ? (
                            <Button onClick={handleNextStep} colorScheme='teal'>Siguiente</Button>
                        ) : (
                            <Button onClick={create} colorScheme='teal'>Confirmar</Button>
                        )}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

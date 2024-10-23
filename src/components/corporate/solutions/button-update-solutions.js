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
import { createSolution, updateSolution } from '../../../services/solution';
import SearchSelect from '../../base/search-select';
import { COUNTRIES, LANGUAGES } from '../../../utils/constants';
import SearchSelectSpecifyFeatures from '../../base/search-select-specify-features';
import { ImageUploadInput } from '../../base/image-upload';
import { ImageGalleryUpload } from '../../base/image-gallery-upload';





export const ButtonUpdateSolution = ({ children, refreshSolutions, disabled, solution }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
    const [logo, setLogo] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);  // Store uploaded images
    const [currentStep, setCurrentStep] = useState(1);  // Step tracker

    useEffect(() => {
        setName(solution.name);
        setDescription(solution.description);
        setWebsite(solution.website);
        setSectorType(solution.sectorType);
        setCountries(solution.countries);
        setLanguages(solution.languages);
        setFeature(solution.features);
        setIsErp(solution.isErp);
        setisSectorial(solution.isSectorial);
        setSpecifyFeatures(solution.specifyFeatures);
        setLogo(solution.logo);
        setGalleryImages(solution.gallery || []);

    }, [solution])


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


    const handleNextStep = () => setCurrentStep(2);  // Move to step 2
    const handlePrevStep = () => setCurrentStep(1);  // Move to step 1

    const closeAndReset = () => {
        setCurrentStep(1);
        onClose();
    }

    const create = async () => {
        const specifyFeaturesArray = typeof specifyFeatures === 'string' ? [specifyFeatures] : specifyFeatures;
        updateSolution(solution._id, {
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
            gallery: galleryImages
        }).then((res) => {
            refreshSolutions();
            closeAndReset()
        }
        )
    };


    const handleCheckboxChange = (event) => {
        setisSectorial(event.target.checked); // Update state based on checkbox's checked status
    };


    return (
        <>
            <Box disabled={disabled} onClick={onOpen}>{children}</Box>

            <Modal isOpen={isOpen} onClose={closeAndReset} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Editar Solución Digital</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={5}>
                        {currentStep === 1 && (
                            <Box fontSize={12} display={'flex'} alignItems={'start'} flexDir={'column'}>
                                <Center w={'full'} flexDir={'column'} gap={5}>
                                    <Image rounded={'xl'} src={logo} alt={solution.name} w={100} h={100} />
                                    <ImageUploadInput url={`solution/uploadImage/${solution._id}`} setLogo={setLogo} />
                                </Center>


                                <Flex gap={2} w='full' mt={5}>
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
                                <Flex mt={3} gap={2} w='full' align={'center'}>
                                    <Checkbox
                                        w={'40%'}
                                        isChecked={isErp}
                                        onChange={(e) => setIsErp(e.target.checked)}
                                    >
                                        <Text fontSize={13}>¿Es un ERP?</Text>
                                    </Checkbox>
                                    <Box flex={1}>
                                        <SearchSelect options={featureOptions} value={feature} isMulti={isErp} onChange={(value) => {
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
                                        <SearchSelectSpecifyFeatures defaultValue={specifyFeatures} feature={feature} value={specifyFeatures} isMulti onChange={(value) => setSpecifyFeatures(value)} />
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

                            </Box>)}

                        {currentStep === 2 && (
                            <Box>
                                <Text fontWeight="bold" mb={4}>Galería de Imágenes</Text>
                                <ImageGalleryUpload url={`image/upload`} setGalleryImages={setGalleryImages} defaultUrls={galleryImages} />
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
    )
}

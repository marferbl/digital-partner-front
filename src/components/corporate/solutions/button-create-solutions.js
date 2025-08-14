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
import { COUNTRIES, LANGUAGES, DEPLOYMENT_OPTIONS, INTEGRATION_OPTIONS, SUPPORT_OPTIONS, DIGITALANDO_COMPANY_ID } from '../../../utils/constants';
import SearchSelectSpecifyFeatures from '../../base/search-select-specify-features';
import { ImageUploadInput } from '../../base/image-upload';
import { ImageGalleryUpload } from '../../base/image-gallery-upload';
import { UserContext } from '../../../context/userContext';
import { PaymentForm } from '../../stripe';

export const ButtonCreateSolution = ({ refreshSolutions, disabled }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { loggedUser } = useContext(UserContext);

    const [currentStep, setCurrentStep] = useState(1);
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
    const [galleryImages, setGalleryImages] = useState([]);
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    const [deployment, setDeployment] = useState([]);
    const [integration, setIntegration] = useState([]);
    const [support, setSupport] = useState([]);

    const countriesOptions = COUNTRIES;
    const languageOptions = LANGUAGES;
    const featureOptions = [
        { value: 'rrhh', label: 'RRHH' },
        { value: 'sellmarketing', label: 'Ventas y marketing' },
        { value: 'finance', label: 'Finanzas y contabilidad' },
        { value: 'logistics', label: 'CSM' },
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

    const isDigitalando = loggedUser._id === DIGITALANDO_COMPANY_ID;

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
                gallery: galleryImages,
                deployment,
                integration,
                support,
            });

            refreshSolutions();
            closeAndReset()
        } catch (error) {
            console.error("Error creating solution:", error);
        }
    };

    const handleNextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

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
        setGalleryImages([]);
        setPaymentCompleted(false);
        setDeployment([]);
        setIntegration([]);
        setSupport([]);
    };

    const handlePaymentSuccess = () => {
        setPaymentCompleted(true);
        create();
    };

    return (
        <>
            <Button bg={DARK_COLORS.gridyellow} color={'black'} _hover={{ bg: 'gray.100' }} fontSize={{ base: 10, md: 16 }} disabled={disabled} onClick={onOpen}>Crear solución digital</Button>

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
                                    <ImageUploadInput url={`image/upload`} big setLogo={setLogo} />
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

                                <Flex gap={2} w='full' mt={3}>
                                    <Box w='48%'>
                                        <Text fontWeight={"bold"}>Deployment: </Text>
                                        <SearchSelect options={DEPLOYMENT_OPTIONS} value={deployment} isMulti onChange={setDeployment} />
                                    </Box>
                                    <Box w='49%'>
                                        <Text fontWeight={"bold"}>Integración: </Text>
                                        <SearchSelect options={INTEGRATION_OPTIONS} value={integration} isMulti onChange={setIntegration} />
                                    </Box>
                                </Flex>

                                <Box w='full' mt={3}>
                                    <Text fontWeight={"bold"}>Soporte: </Text>
                                    <SearchSelect options={SUPPORT_OPTIONS} value={support} isMulti onChange={setSupport} />
                                </Box>
                            </Box>
                        )}

                        {currentStep === 2 && (
                            <Box>
                                <Text fontWeight="bold" mb={4}>Galería de Imágenes</Text>
                                <ImageGalleryUpload url={`image/upload`} setGalleryImages={setGalleryImages} />
                            </Box>
                        )}

                        {currentStep === 3 && !isDigitalando && (
                            <Box>
                                <Text fontWeight="bold" mb={4}>Pago de la Solución</Text>
                                <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
                            </Box>
                        )}
                        {isDigitalando && currentStep === 3 && (
                            <Box bg='purple.100' p={3} borderRadius={5}>
                                Estas usando el modo superadmin de hello@digitalando.com
                            </Box>
                        )}

                    </ModalBody>

                    <ModalFooter>
                        {currentStep > 1 && (
                            <Button variant='ghost' mr={3} onClick={handlePrevStep}>Anterior</Button>
                        )}
                        {currentStep === 1 ? (
                            <Button onClick={handleNextStep} colorScheme='gray'>Siguiente</Button>
                        ) : currentStep === 2 ? (
                            <Button onClick={handleNextStep} disabled={!name || !description} colorScheme='gray'>Siguiente</Button>
                        ) : (
                            <></>
                            // <Button
                            //     onClick={create}
                            //     colorScheme='gray'
                            //     isDisabled={!paymentCompleted}
                            // >
                            //     Confirmar
                            // </Button>
                        )}
                        {isDigitalando && currentStep === 3 ? <Button
                            onClick={create}
                            colorScheme='gray'
                        >
                            Confirmar
                        </Button> : <></>}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

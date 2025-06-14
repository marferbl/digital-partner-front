import React, { useState, useEffect, useRef } from 'react';
import {
    Button,
    Center,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Textarea,
    Checkbox,
    NumberInput,
    NumberInputField,
    useDisclosure,
    Image,
    Text,
    Flex,
    Box
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { createEvent } from '../../../services/event';
import { COLORS, DARK_COLORS } from '../../../colors/colors';
import MapSearcher from '../../base/map-searcher';
import { ImageGalleryUpload } from '../../base/image-gallery-upload.js';



export const ButtonCreateEvent = ({ refreshEvents }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    // State for form fields
    const [logo, setLogo] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [types, setTypes] = useState([]); // Array for event types
    const [corporate, setCorporate] = useState(false);
    const [maximumCapacity, setMaximumCapacity] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [duration, setDuration] = useState('');
    const [address, setAddress] = useState(''); // Only visible if "presencial" is selected
    const [step, setStep] = useState(1); // Step control
    const [price, setPrice] = useState('');
    const [city, setCity] = useState('');
    const [gallery, setGallery] = useState([]);

    const [coordinates, setCoordinates] = useState({ lat: 40.416775, lng: -3.703790 });
    const autoCompleteRef = useRef(null);

    // Handle checkbox change for event types
    const handleTypeChange = (type) => {
        if (types.includes(type)) {
            setTypes(types.filter((t) => t !== type));
        } else {
            setTypes([...types, type]);
        }
    };

    // Handle coordinates change from MapSearcher
    const handleCoordinatesChange = (data) => {
        setCoordinates({ lat: data.lat, lng: data.lng });
        if (data.city) {
            setCity(data.city);
        }
    };

    // Handle form submission
    const create = async () => {
        const config = {
            name,
            description,
            link,
            type: types,
            address: types.includes('presential') ? address : null,
            corporate,
            maximumCapacity,
            date,
            time,
            duration,
            photo: logo,
            coordinates: types.includes('presential') ? coordinates : null,
            price,
            city: types.includes('presential') ? city : null,
            gallery
        };
        createEvent(config)
            .then((res) => {
                refreshEvents();
                closeModal();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const closeModal = () => {
        onClose();
        setStep(1); // Reset step to 1 when modal is closed
        resetForm()
    };


    const resetForm = () => {
        setLogo('');
        setName('');
        setDescription('');
        setLink('');
        setTypes([]);
        setCorporate(false);
        setMaximumCapacity('');
        setDate(new Date());
        setTime(new Date());
        setDuration('');
        setAddress('');
        setCoordinates({ lat: 40.416775, lng: -3.703790 });
        setPrice('');
        setCity('');
        setGallery([]);
    };

    const formCompleted = () => {
        if (step === 1) {
            return !!name && !!description && !!link;
        } else {
            return types.length > 0 && (types.includes('remote') || !!address) && !!date && !!time
        }
    };



    return (
        <>
            <Button onClick={onOpen} bg={DARK_COLORS.gridyellow} color={'black'} _hover={{ bg: 'gray.100' }} fontSize={{ base: 12, md: 16 }} mr={2}>Crear Evento</Button>
            <Modal isOpen={isOpen} onClose={closeModal} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{step === 1 ? "Paso 1: Información Básica" : "Paso 2: Detalles del Evento"}</ModalHeader>
                    <ModalCloseButton onClick={closeModal} />
                    <ModalBody py={5}>
                        {step === 1 && (
                            <>
                                <Box>
                                    <Text fontWeight="bold" mb={4}>Galería de Imágenes</Text>
                                    <ImageGalleryUpload url={`image/upload`} setGalleryImages={setGallery} />
                                </Box>
                                <Text fontSize='12'>
                                    Nombre del evento
                                </Text>
                                <Input
                                    placeholder="Nombre del evento"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    mb={4}
                                />
                                <Text fontSize='12'>
                                    Descripción
                                </Text>
                                <Textarea
                                    placeholder="Descripción del evento"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    mb={4}
                                />
                                <Text fontSize='12'>
                                    Link
                                </Text>
                                <Input
                                    placeholder="Enlace del evento"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    mb={4}
                                />

                                <Flex w='full' gap={2}>
                                    <Box w={'30%'}>
                                        <Text fontSize='12'>
                                            Aforo máximo
                                        </Text>
                                        <NumberInput
                                            value={maximumCapacity}
                                            onChange={(valueString) => setMaximumCapacity(valueString)}
                                            mb={4}
                                        >
                                            <NumberInputField placeholder="Aforo" />
                                        </NumberInput>
                                    </Box>
                                    <Box w={'30%'}>
                                        <Text fontSize='12'>
                                            Duración (H)
                                        </Text>
                                        <NumberInput
                                            value={duration}
                                            onChange={(valueString) => setDuration(valueString)}
                                            mb={4}
                                        >
                                            <NumberInputField placeholder="Duración (H)" />
                                        </NumberInput>
                                    </Box>
                                    <Box w={'30%'}>
                                        <Text fontSize='12'>
                                            Precio
                                        </Text>
                                        <NumberInput
                                            value={price}
                                            onChange={(valueString) => setPrice(valueString)}
                                            mb={4}
                                        >
                                            <NumberInputField placeholder="Precio" />
                                        </NumberInput>
                                    </Box>
                                </Flex>
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <Text fontSize='12'>
                                    Fecha y hora del evento
                                </Text>
                                <Flex w='full'>
                                    <Box w='50%'>
                                        <DatePicker
                                            selected={date}
                                            onChange={(date) => setDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            customInput={<Input placeholder="Fecha del evento" mb={4} />}
                                        />
                                    </Box>
                                    <Box w='50%'>
                                        <DatePicker
                                            selected={time}
                                            onChange={(time) => setTime(time)}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={15}
                                            timeCaption="Hora"
                                            dateFormat="HH:mm"
                                            customInput={<Input placeholder="Hora del evento" mb={4} />}
                                        />
                                    </Box>
                                </Flex>
                                <Text fontSize='12' mb={2}>
                                    Tipo de evento
                                </Text>
                                <Checkbox
                                    isChecked={types.includes('remote')}
                                    onChange={() => handleTypeChange('remote')}
                                    mb={2}
                                >
                                    Remoto
                                </Checkbox>
                                <Checkbox
                                    isChecked={types.includes('presential')}
                                    onChange={() => handleTypeChange('presential')}
                                    mb={2}
                                    mx={2}
                                >
                                    Presencial
                                </Checkbox>

                                {types.includes('presential') && (
                                    <>
                                        {city && (
                                            <Text fontSize="sm" color="gray.500" mb={2}>
                                                Ciudad: {city}
                                            </Text>
                                        )}
                                        <MapSearcher
                                            onChange={handleCoordinatesChange}
                                            onChangeAddress={setAddress}
                                        />
                                    </>
                                )}
                            </>
                        )}
                    </ModalBody>

                    <ModalFooter>
                        {step === 1 ? (
                            <>
                                <Button variant='ghost' mr={3} onClick={closeModal}>
                                    Cancelar
                                </Button>
                                <Button colorScheme='gray' onClick={() => setStep(2)} disabled={!formCompleted()}>Siguiente</Button>
                            </>
                        ) : (
                            <>
                                <Button variant='ghost' mr={3} onClick={() => setStep(1)} >
                                    Volver
                                </Button>
                                <Button colorScheme='gray' onClick={create} disabled={!formCompleted()}>Confirmar</Button>
                            </>
                        )}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

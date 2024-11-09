import React, { useEffect, useState } from 'react';
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
import { updateService } from '../../../services/service';
import { ImageUploadInput } from '../../base/image-upload';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { updateEvent } from '../../../services/event';
import MapSearcher from '../../base/map-searcher';

export const ButtonUpdateEvent = ({ children, item, refreshEvents }) => {
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
    const [coordinates, setCoordinates] = useState({ lat: '', lng: '' }); // Coordinates for map

    useEffect(() => {
        if (item) {
            setName(item.name);
            setDescription(item.description);
            setLink(item.link);
            setTypes(item.type);
            setCorporate(item.corporate);
            setMaximumCapacity(item.maximumCapacity);
            setDate(new Date(item.date));
            setTime(new Date(item.time));
            setDuration(item.duration);
            setAddress(item.address);
            setLogo(item.logo);
            setCoordinates(item.coordinates);
        }
    }, [item]);


    // Handle checkbox change for event types
    const handleTypeChange = (type) => {
        if (types.includes(type)) {
            setTypes(types.filter((t) => t !== type));
        } else {
            setTypes([...types, type]);
        }
    };


    // Handle form submission
    const create = async () => {
        const id = item._id;
        console.log(address, coordinates)

        const config = {
            name,
            description,
            link,
            type: types,
            address: address,
            corporate,
            maximumCapacity,
            date,
            time,
            duration,
            photo: logo,
            coordinates
        };
        updateEvent(id, config)
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
    };

    console.log(coordinates, address)

    return (
        <>
            <Box onClick={onOpen}>
                {children}
            </Box>
            <Modal isOpen={isOpen} onClose={closeModal} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{step === 1 ? "Paso 1: Información Básica" : "Paso 2: Detalles del Evento"}</ModalHeader>
                    <ModalCloseButton onClick={closeModal} />
                    <ModalBody py={5}>
                        {step === 1 && (
                            <>
                                <Center w={'full'} flexDir={'column'} gap={5} pb={5}>
                                    {logo && <Image src={logo} alt="Logo" w={32} h={32} objectFit='cover' rounded='lg' />}
                                    <ImageUploadInput url={`image/upload`} setLogo={setLogo} />
                                </Center>
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
                                    <Box w={'50%'}>
                                        <Text fontSize='12'>
                                            Aforo máximo
                                        </Text>
                                        <NumberInput
                                            value={maximumCapacity}
                                            onChange={(valueString) => setMaximumCapacity(valueString)}
                                            mb={4}
                                        >
                                            <NumberInputField placeholder="Capacidad máxima" />
                                        </NumberInput>
                                    </Box>
                                    <Box w={'50%'}>
                                        <Text fontSize='12'>
                                            Duración del evento
                                        </Text>
                                        <NumberInput
                                            value={duration}
                                            onChange={(valueString) => setDuration(valueString)}
                                            mb={4}
                                        >
                                            <NumberInputField placeholder="Duración del evento (horas)" />
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
                                        <MapSearcher onChange={setCoordinates} onChangeAddress={setAddress} defaultAddress={address} defaultCoordinates={coordinates} />
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
                                <Button colorScheme='teal' onClick={() => setStep(2)}>Siguiente</Button>
                            </>
                        ) : (
                            <>
                                <Button variant='ghost' mr={3} onClick={() => setStep(1)}>
                                    Volver
                                </Button>
                                <Button colorScheme='teal' onClick={create}>Confirmar</Button>
                            </>
                        )}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

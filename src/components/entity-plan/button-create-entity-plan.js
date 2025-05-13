import React, { useState } from 'react';
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
    NumberInput,
    NumberInputField,
    useDisclosure,
    Text,
    Select,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';
import { createEntityPlan } from '../../services/entity-plan';
import { DARK_COLORS } from '../../colors/colors';
import { ColorPicker } from '../base/ColorPicker';

export const ButtonCreateEntityPlan = ({ refreshEntityPlans, entity }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    // State for form fields
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [period, setPeriod] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('bg-red-500');


    // Handle form submission
    const create = async () => {
        const config = {
            name,
            price: Number(price),
            period,
            description,
            color,
            entity: {
                model: entity.lineType === 'solutions' ? 'solution' : 'service',
                itemId: entity._id
            }
        };

        try {
            await createEntityPlan(config);
            refreshEntityPlans();
            closeModal();
        } catch (error) {
            console.error('Error creating entity plan:', error);
        }
    };

    const closeModal = () => {
        onClose();
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setPrice('');
        setPeriod('');
        setDescription('');
        setColor('');
    };

    const formCompleted = () => {
        return !!name && !!price && !!period && !!color;
    };

    return (
        <>
            <Button
                onClick={onOpen}
                bg={DARK_COLORS.gridyellow}
                color={'black'}
                _hover={{ bg: 'gray.100' }}
                fontSize={{ base: 12, md: 16 }}
                mr={2}
            >
                Crear Plan
            </Button>

            <Modal isOpen={isOpen} onClose={closeModal} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Crear Nuevo Plan</ModalHeader>
                    <ModalCloseButton onClick={closeModal} />
                    <ModalBody py={5}>
                        <FormControl isRequired mb={4}>
                            <FormLabel fontSize='12'>Nombre del Plan</FormLabel>
                            <Input
                                placeholder="Nombre del plan"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormControl>

                        <FormControl isRequired mb={4}>
                            <FormLabel fontSize='12'>Precio</FormLabel>
                            <NumberInput
                                value={price}
                                onChange={(valueString) => setPrice(valueString)}
                            >
                                <NumberInputField placeholder="Precio" />
                            </NumberInput>
                        </FormControl>

                        <FormControl isRequired mb={4}>
                            <FormLabel fontSize='12'>Período</FormLabel>
                            <Select
                                placeholder="Seleccionar período"
                                value={period}
                                onChange={(e) => setPeriod(e.target.value)}
                            >
                                <option value="monthly">Mensual</option>
                                <option value="quarterly">Trimestral</option>
                                <option value="yearly">Anual</option>
                            </Select>
                        </FormControl>

                        <FormControl isRequired mb={4}>
                            <FormLabel fontSize='12'>Color del Plan</FormLabel>
                            <ColorPicker
                                selectedColor={color}
                                onColorSelect={setColor}
                            />
                        </FormControl>

                        <FormControl mb={4}>
                            <FormLabel fontSize='12'>Descripción</FormLabel>
                            <Textarea
                                placeholder="Descripción del plan"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={closeModal}>
                            Cancelar
                        </Button>
                        <Button
                            colorScheme='gray'
                            onClick={create}
                            disabled={!formCompleted()}
                        >
                            Crear Plan
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}; 
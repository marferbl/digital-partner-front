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
    Checkbox,
    Flex,
} from '@chakra-ui/react';
import { createEntityPlan } from '../../services/entity-plan';
import { DARK_COLORS } from '../../colors/colors';
import { ColorPicker } from '../base/ColorPicker';

export const ButtonCreateEntityPlan = ({ refreshEntityPlans, entity }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    // State for form fields
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [endPrice, setEndPrice] = useState('');
    const [period, setPeriod] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('bg-red-500');
    const [hasPriceRange, setHasPriceRange] = useState(false);


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

        // Only add endPrice if price range is enabled and endPrice has a value
        if (hasPriceRange && endPrice) {
            config.endPrice = Number(endPrice);
        }

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
        setEndPrice('');
        setPeriod('');
        setDescription('');
        setColor('');
        setHasPriceRange(false);
    };

    const formCompleted = () => {
        const basicFields = !!name && !!price && !!period && !!color;
        // If price range is enabled, endPrice must also be filled
        if (hasPriceRange) {
            return basicFields && !!endPrice;
        }
        return basicFields;
    };

    const handlePriceRangeChange = (e) => {
        setHasPriceRange(e.target.checked);
        if (!e.target.checked) {
            setEndPrice(''); // Clear endPrice when disabling price range
        }
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
                            <FormLabel fontSize='12'>
                                {hasPriceRange ? 'Precio inicial' : 'Precio'}
                            </FormLabel>
                            {hasPriceRange ? (
                                <Flex gap={3}>
                                    <NumberInput
                                        value={price}
                                        onChange={(valueString) => setPrice(valueString)}
                                        flex={1}
                                    >
                                        <NumberInputField placeholder="Precio inicial" />
                                    </NumberInput>
                                    <NumberInput
                                        value={endPrice}
                                        onChange={(valueString) => setEndPrice(valueString)}
                                        flex={1}
                                    >
                                        <NumberInputField placeholder="Precio final" />
                                    </NumberInput>
                                </Flex>
                            ) : (
                                <NumberInput
                                    value={price}
                                    onChange={(valueString) => setPrice(valueString)}
                                >
                                    <NumberInputField placeholder="Precio" />
                                </NumberInput>
                            )}
                        </FormControl>

                        <FormControl mb={4}>
                            <Checkbox
                                isChecked={hasPriceRange}
                                onChange={handlePriceRangeChange}
                                colorScheme="gray"
                            >
                                <Text fontSize='12'>Añadir horquilla de precio</Text>
                            </Checkbox>
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
                                <option value="indeterminate">Indeterminado</option>
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
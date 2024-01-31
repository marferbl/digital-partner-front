import React, { useState } from 'react';
import { Flex, Box, Checkbox, VStack, Heading, Text } from '@chakra-ui/react';

const FiltersSection = () => {
    const [filterValues, setFilterValues] = useState({
        filter1: false,
        filter2: false,
        filter3: false,
        filter4: false,
        filter5: false,
        filter6: false,

    });

    const handleToggle = (filterName) => {
        setFilterValues((prevValues) => ({
            ...prevValues,
            [filterName]: !prevValues[filterName],
        }));
    };

    return (
        <Box p={4} borderWidth={1} rounded={'md'} mt={5} bg={'white'} >
            <VStack align="center" spacing={4}>
                <Text>
                    Busca a tu medida
                </Text>
                <Flex gap={6} flexWrap={'wrap'}>
                    <Flex gap={1} align='center'>
                        <Checkbox
                            isChecked={filterValues.filter1}
                            onChange={() => handleToggle('filter1')}
                        >
                            Fichajes
                        </Checkbox>
                    </Flex>
                    <Flex gap={1} align='center'>
                        <Checkbox
                            isChecked={filterValues.filter2}
                            onChange={() => handleToggle('filter2')}
                        >
                            Descansos
                        </Checkbox>
                    </Flex>
                    <Flex gap={1} align='center'>
                        <Checkbox
                            isChecked={filterValues.filter3}
                            onChange={() => handleToggle('filter3')}
                        >
                            Vacaciones
                        </Checkbox>
                    </Flex>
                    <Flex gap={1} align='center'>
                        <Checkbox
                            isChecked={filterValues.filter4}
                            onChange={() => handleToggle('filter4')}
                        >
                            Denuncias
                        </Checkbox>
                    </Flex>
                    <Flex gap={1} align='center'>
                        <Checkbox
                            isChecked={filterValues.filter5}
                            onChange={() => handleToggle('filter5')}
                        >
                            Reclutamiento
                        </Checkbox>
                    </Flex>
                    <Flex gap={1} align='center'>
                        <Checkbox
                            isChecked={filterValues.filter6}
                            onChange={() => handleToggle('filter6')}
                        >
                            Nóminas
                        </Checkbox>
                    </Flex>
                </Flex>

            </VStack>
        </Box>
    );
};


export default FiltersSection;

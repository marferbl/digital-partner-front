import React, { useState, useEffect } from 'react';
import { Flex, Box, Checkbox, VStack, Heading, Text } from '@chakra-ui/react';
import SearchSelectCountries from '../base/search-select-countries';
import SearchSelectLanguage from '../base/search-select-language';
import SearchSelect from '../base/search-select';

const FiltersSection = ({ filters, onChangeFilters }) => {
    const [filterValues, setFilterValues] = useState(filters);

    const handleToggle = (filterName, value) => {
        setFilterValues((prevValues) => ({
            ...prevValues,
            [filterName]: value,
        }));
        onChangeFilters(filterValues);
    };

    useEffect(() => {
        // Call onChangeFilters whenever filterValues change
        onChangeFilters(filterValues);
    }, [filterValues]);

    const lineTypeOptions = [
        { value: 'solutions', label: 'Soluciones' },
        { value: 'services', label: 'Servicios' },
        { value: 'talent', label: 'Talento' },
        { value: 'events', label: 'Eventos' },
    ]

    return (
        <Box p={4} borderWidth={1} rounded={'md'} mt={5} bg={'white'} >
            <VStack align="center" spacing={4}>
                <Text>
                    Busca a tu medida
                </Text>
                <Flex gap={6} flexWrap={'wrap'}>
                    <Flex gap={1} align='center'>
                        <SearchSelect options={lineTypeOptions} width={150} onChange={(value) => handleToggle('lineType', value)} value={filterValues.lineType} />
                    </Flex>

                    <Flex gap={1} align='center'>
                        <SearchSelectCountries width={36} onChange={(value) => handleToggle('countries', value)} />
                        <SearchSelectLanguage width={36} onChange={(value) => handleToggle('languages', value)} />
                    </Flex>

                </Flex>

            </VStack>
        </Box>
    );
};


export default FiltersSection;

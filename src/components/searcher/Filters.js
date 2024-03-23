import React, { useState, useEffect } from 'react';
import { Flex, Box, Checkbox, VStack, Heading, Text } from '@chakra-ui/react';
import SearchSelectCountries from '../base/search-select-countries';
import SearchSelectLanguage from '../base/search-select-language';
import SearchSelectFeatures from '../base/search-select-features';
import SearchSelect from '../base/search-select';
import GradientButton from '../base/GradientButton';

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
    const partnerTypeOptions = [
        { value: 'implant', label: 'Implantador' },
        { value: 'selling', label: 'Venta' },
        { value: 'training', label: 'Formación' },
    ]

    const clearFilters = () => {
        setFilterValues({
            lineType: '',
            feature: '',
            partnerType: '',
            countries: '',
            languages: '',
        });
    };

    const hasFilters = Object.values(filterValues).some((value) => value !== '');

    return (
        <Box p={4} borderWidth={1} rounded={'md'} mt={5} bg={'white'} >
            <VStack align="center" spacing={4}>
                <Flex justify={'center'} w={'100%'}>
                    <Text fontSize={14}>Busca a tu medida</Text>
                </Flex>

                <Flex gap={6} flexWrap={'wrap'} alignItems={'center'}>
                    <SearchSelect options={lineTypeOptions} width={160} label={'Tipo'} onChange={(value) => handleToggle('lineType', value)} value={filterValues.lineType} />
                    {filterValues.lineType === 'solutions' && <SearchSelectFeatures showLabel width={44} onChange={(value) => handleToggle('feature', value)} />}
                    {filterValues.lineType === 'services' && <SearchSelect options={partnerTypeOptions} width={150} label={'Servicio'} onChange={(value) => handleToggle('partnerType', value)} value={filterValues.partnerType} />}

                    {/* {(filterValues.lineType === 'solutions' || filterValues.lineType === 'services') && */}
                        <Flex gap={6}>
                            <SearchSelectCountries showLabel width={36} onChange={(value) => handleToggle('countries', value)} defaultValue={filterValues.countries} />
                            <SearchSelectLanguage showLabel width={36} onChange={(value) => handleToggle('languages', value)} defaultValue={filterValues.languages} />
                        </Flex>
                    {/* } */}
                    {hasFilters && <Box pt={4}>
                        <GradientButton label='Mostrar todo' type='red' size={'sm'} onClick={clearFilters} />
                    </Box>}

                </Flex>

            </VStack>
        </Box>
    );
};


export default FiltersSection;

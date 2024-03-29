import React, { useState, useEffect } from 'react';
import { Flex, Box, Icon, VStack, Heading, Text } from '@chakra-ui/react';
import SearchSelectCountries from '../base/search-select-countries';
import SearchSelectLanguage from '../base/search-select-language';
import SearchSelectFeatures from '../base/search-select-features';
import SearchSelect from '../base/search-select';
import GradientButton from '../base/GradientButton';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { COLORS } from '../../colors/colors';


const FiltersSection = ({ filters, setTermLabel, onChangeFilters }) => {
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
    ];
    const partnerTypeOptions = [
        { value: 'implant', label: 'Implantador' },
        { value: 'selling', label: 'Venta' },
        { value: 'training', label: 'Formación' },
    ];

    const serviceTypeOptions = [
        { value: 'partner', label: 'Partner' },
        { value: 'development', label: 'Desarrollo' },
        { value: 'renting', label: 'Renting' },
        { value: 'helps', label: 'Ayudas' },
        { value: 'training', label: 'Training' },


    ];

    const clearFilters = () => {
        setFilterValues({
            lineType: '',
            feature: '',
            partnerType: '',
            countries: '',
            languages: '',
            serviceType: ''
        });
        setTermLabel('');
    };

    const hasFilters = Object.values(filterValues).some((value) => value !== '');

    return (
        <Box borderRightWidth={1} h={'full'} >
            <VStack align="left" spacing={4} pt={4}>
                <Flex pr={5} gap={1} flexWrap={'wrap'} alignItems={'center'} flexDir='column'>
                    <SearchSelect options={lineTypeOptions} width={'100%'} label={'Tipo'} onChange={(value) => handleToggle('lineType', value)} value={filterValues.lineType} />
                    {filterValues.lineType === 'solutions' && <SearchSelectFeatures showLabel width={'100%'} onChange={(value) => handleToggle('feature', value)} />}
                    {filterValues.lineType === 'services' && <SearchSelect options={serviceTypeOptions} width={'100%'} label={'Tipo'} onChange={(value) => handleToggle('serviceType', value)} value={filterValues.serviceType} />}
                    {filterValues.lineType === 'services' && filterValues.serviceType === 'partner' && <SearchSelect options={partnerTypeOptions} width={'100%'} label={'Servicio'} onChange={(value) => handleToggle('partnerType', value)} value={filterValues.partnerType} />}
                    <SearchSelectCountries showLabel width={'100%'} onChange={(value) => handleToggle('countries', value)} defaultValue={filterValues.countries} />
                    <SearchSelectLanguage showLabel width={'100%'} onChange={(value) => handleToggle('languages', value)} defaultValue={filterValues.languages} />
                    {hasFilters && (
                        <Box pt={4}>
                            <GradientButton label='Mostrar todo' type='red' size={'sm'} onClick={clearFilters} />
                        </Box>
                    )}
                </Flex>
            </VStack>
        </Box>
    );
};


export default FiltersSection;

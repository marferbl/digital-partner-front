import React, { useState, useEffect } from 'react';
import { Flex, Box, Icon, VStack, Heading, Text, Checkbox } from '@chakra-ui/react';
import SearchSelectCountries from '../base/search-select-countries';
import SearchSelectLanguage from '../base/search-select-language';
import SearchSelectFeatures from '../base/search-select-features';
import SearchSelect from '../base/search-select';
import GradientButton from '../base/GradientButton';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { COLORS } from '../../colors/colors';
import SearchSelectSpecifyFeatures from '../base/search-select-specify-features';


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
        setTermLabel('');
        onChangeFilters(filterValues);
    }, [filterValues]);

    const lineTypeOptions = [
        { value: 'solutions', label: 'Soluciones' },
        { value: 'services', label: 'Servicios' },
        // { value: 'talent', label: 'Talento', disabled: true },
        //{ value: 'events', label: 'Eventos', disabled: true },
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
        setFilterValues({});
        setTermLabel('');
    };

    const hasFilters = Object.values(filterValues).some((value) => value !== '');


    return (
        <Box borderRightWidth={1} h={'full'} >
            <VStack align="left" spacing={4} pt={4}>
                <Flex pr={5} gap={1} flexWrap={'wrap'} alignItems={'center'} flexDir='column'>
                    <SearchSelect options={lineTypeOptions} width={'100%'} label={'Línea'} onChange={(value) => handleToggle('lineType', value)} value={filterValues.lineType} />
                    {filterValues.lineType === 'solutions' && <Checkbox
                        w={'full'}
                        isChecked={filterValues.isErp}
                        onChange={(e) => handleToggle('isErp', e.target.checked)}
                        my={2}
                    >
                        <Text fontSize={13}>¿Solo ERPs?</Text>
                    </Checkbox>}
                    {filterValues.lineType === 'solutions' && <SearchSelectFeatures value={filterValues.features} showLabel width={'100%'} isMulti onChange={(value) => handleToggle('features', value)} />}
                    {(filterValues.lineType === 'solutions' && filterValues.features?.length) ? <SearchSelectSpecifyFeatures value={filterValues.specifyFeatures} showLabel width={'100%'} label={'Funcionalidad especifica'} feature={filterValues.features} onChange={(value) => handleToggle('specifyFeatures', value)} /> : null}
                    {filterValues.lineType === 'services' && <SearchSelect options={serviceTypeOptions} width={'100%'} label={'Tipo'} onChange={(value) => handleToggle('serviceType', value)} value={filterValues.serviceType} />}
                    {filterValues.lineType === 'services' && filterValues.serviceType === 'partner' && <SearchSelect options={partnerTypeOptions} isMulti width={'100%'} label={'Servicio'} onChange={(value) => handleToggle('partnerType', value)} value={filterValues.partnerType} />}
                    <SearchSelectCountries value={filterValues.countries} showLabel width={'100%'} isMulti onChange={(value) => {
                        let arrayValue = typeof value === 'object' ? value : [value];
                        handleToggle('countries', arrayValue)
                    }} defaultValue={filterValues.countries} />
                    <SearchSelectLanguage value={filterValues.languages} showLabel width={'100%'} isMulti onChange={(value) => {
                        let arrayValue = typeof value === 'object' ? value : [value];
                        handleToggle('languages', arrayValue)
                    }} defaultValue={filterValues.languages} />
                    {hasFilters && (
                        <Box pt={4}>
                            <GradientButton label='Limpiar filtros' type='red' size={'sm'} onClick={clearFilters} />
                        </Box>
                    )}
                </Flex>
            </VStack>
        </Box>
    );
};


export default FiltersSection;

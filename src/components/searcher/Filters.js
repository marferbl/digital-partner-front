import React, { useState, useEffect } from 'react';
import { Flex, Box, Grid, GridItem, VStack, Heading, Text, Checkbox } from '@chakra-ui/react';
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
        { value: 'growth', label: 'Growth' },

    ];


    const clearFilters = () => {
        setFilterValues({});
        setTermLabel('');
    };

    const hasFilters = Object.values(filterValues).some((value) => value !== '');


    return (
        <Box borderRightWidth={1} h={'full'} bg={'gray.50'} px={4} pb={4} shadow={'lg'}>
            <VStack align="left" spacing={4} pt={4}>
                {/* Use Flex with wrap for dynamic layout */}
                <Flex flexWrap="wrap" gap={4} w="full">

                    {/* Always visible selects */}
                    <Box minW="200px" pt={1}>
                        <SearchSelect
                            size="small"
                            options={lineTypeOptions}
                            width="100%"
                            label="Línea"
                            onChange={(value) => handleToggle('lineType', value)}
                            value={filterValues.lineType}
                        />
                    </Box>

                    {/* Conditionally rendered selects */}
                    {filterValues.lineType === 'solutions' ? (
                        <Box flexBasis="10%" minW="80px" h={'full'} mt={5}>
                            <Checkbox
                                w="full"
                                isChecked={filterValues.isErp}
                                onChange={(e) => handleToggle('isErp', e.target.checked)}
                                my={2}
                            >
                                <Text fontSize={13}>¿Solo ERPs?</Text>
                            </Checkbox>
                        </Box>
                    ) : ''}
                    {filterValues.lineType === 'solutions' ? (
                        <Box flexBasis="20%" minW="200px">
                            <SearchSelectFeatures
                                value={filterValues.features}
                                showLabel
                                width="100%"
                                isMulti
                                onChange={(value) => handleToggle('features', value)}

                            />
                        </Box>
                    ) : ''}
                    {(filterValues.lineType === 'solutions' && filterValues.features?.length) ? (
                        <Box flexBasis="10%" minW="200px">
                            <SearchSelectSpecifyFeatures
                                value={filterValues.specifyFeatures}
                                showLabel
                                width="100%"
                                label="Funcionalidad especifica"
                                feature={filterValues.features}
                                onChange={(value) => handleToggle('specifyFeatures', value)}

                            />
                        </Box>
                    ) : ''}
                    {filterValues.lineType === 'services' ? (
                        <Box flexBasis="10%" minW="200px" pt={1}>
                            <SearchSelect
                                options={serviceTypeOptions}
                                width="100%"
                                label="Tipo"
                                onChange={(value) => handleToggle('serviceType', value)}
                                value={filterValues.serviceType}

                            />
                        </Box>
                    ) : ''}

                    {filterValues.lineType === 'services' && filterValues.serviceType === 'partner' ? (
                        <Box flexBasis="10%" minW="200px">
                            <SearchSelect
                                options={partnerTypeOptions}
                                isMulti
                                width="100%"
                                label="Servicio"
                                onChange={(value) => handleToggle('partnerType', value)}
                                value={filterValues.partnerType}
                                height="40px"
                            />
                        </Box>
                    ) : ''}

                    <Box flexBasis="10%" minW="200px">
                        <SearchSelectCountries
                            value={filterValues.countries}
                            showLabel
                            width="100%"
                            isMulti
                            onChange={(value) => {
                                let arrayValue = typeof value === 'object' ? value : [value];
                                handleToggle('countries', arrayValue);
                            }}
                            defaultValue={filterValues.countries}

                        />
                    </Box>

                    <Box flexBasis="10%" minW="200px">
                        <SearchSelectLanguage
                            value={filterValues.languages}
                            showLabel
                            width="100%"
                            isMulti
                            onChange={(value) => {
                                let arrayValue = typeof value === 'object' ? value : [value];
                                handleToggle('languages', arrayValue);
                            }}
                            defaultValue={filterValues.languages}

                        />
                    </Box>

                    {hasFilters ? (
                        <Box flexBasis="30%" minW="200px" pt={7}>
                            <GradientButton label="Limpiar filtros" type="red" size="xs" onClick={clearFilters} />
                        </Box>
                    ) : ''}
                </Flex>
            </VStack>
        </Box >


    );
};


export default FiltersSection;

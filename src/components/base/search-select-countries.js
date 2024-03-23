import React from 'react'
import SearchSelect from './search-select.js';
import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { COUNTRIES } from '../../utils/constants';

const SearchSelectCountries = ({ isMulti, onChange, showLabel, defaultValue, ...props }) => {

    const [value, setValue] = useState(defaultValue || null)

    useEffect(() => {
        if (!defaultValue) setValue(null)
    }, [defaultValue])



    const changeValue = (value) => {
        setValue(value);
        onChange(value);
    }
    const countriesOptions = COUNTRIES

    return (
        <Box my={1} {...props}>
            <SearchSelect options={countriesOptions} value={value} isMulti={isMulti} label={showLabel ? 'País' : null} onChange={(value) => changeValue(value)} />
        </Box>
    )
}

export default SearchSelectCountries
import React from 'react'
import SearchSelect from './search-select.js';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { COUNTRIES } from '../../utils/constants';

const SearchSelectCountries = ({ isMulti, onChange, ...props }) => {

    const [value, setValue] = useState(null)

    const changeValue = (value) => {
        setValue(value);
        onChange(value);
    }
    console.log(value)
    const countriesOptions = COUNTRIES

    return (
        <Box my={1} {...props}>
            <SearchSelect options={countriesOptions} value={value} isMulti={isMulti} onChange={(value) => changeValue(value)} />
        </Box>
    )
}

export default SearchSelectCountries
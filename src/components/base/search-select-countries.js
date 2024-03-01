import React from 'react'
import SearchSelect from './search-select.js';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';

const SearchSelectCountries = ({ isMulti, onChange, props }) => {

    const [value, setValue] = useState(null)

    const changeValue = (value) => {
        setValue(value);
        onChange(value);
    }


    const languageOptions = [
        { value: 'england', label: 'Inglaterra' },
        { value: 'spain', label: 'España' },
        { value: 'france', label: 'Francia' },
        { value: 'italy', label: 'Italia' },
    ];

    return (
        <Box my={1}>
            <SearchSelect options={languageOptions} value={value} isMulti={isMulti} onChange={(value) => changeValue(value)} />
        </Box>
    )
}

export default SearchSelectCountries
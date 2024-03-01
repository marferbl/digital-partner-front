import React from 'react'
import SearchSelect from './search-select.js';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';

const SearchSelectLanguage = ({ isMulti, onChange, props }) => {

    const [value, setValue] = useState(null)

    const changeValue = (value) => {
        setValue(value);
        onChange(value);
    }


    const languageOptions = [
        { value: 'english', label: 'Inglés' },
        { value: 'spanish', label: 'Español' },
        { value: 'french', label: 'Francés' },
        { value: 'italian', label: 'Italiano' },
    ];

    return (
        <Box my={1}>
            <SearchSelect options={languageOptions} value={value} isMulti={isMulti} onChange={(value) => changeValue(value)} />
        </Box>
    )
}

export default SearchSelectLanguage
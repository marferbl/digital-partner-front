import React from 'react'
import SearchSelect from './search-select.js';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { LANGUAGES } from '../../utils/constants.js';

const SearchSelectLanguage = ({ isMulti, onChange, ...props }) => {

    const [value, setValue] = useState(null)

    const changeValue = (value) => {
        setValue(value);
        onChange(value);
    }


    const languageOptions = LANGUAGES

    return (
        <Box my={1} {...props}>
            <SearchSelect options={languageOptions} value={value} isMulti={isMulti} onChange={(value) => changeValue(value)} />
        </Box>
    )
}

export default SearchSelectLanguage
import React from 'react'
import SearchSelect from './search-select.js';
import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { LANGUAGES } from '../../utils/constants.js';
import { useTranslation } from 'react-i18next';

const SearchSelectLanguage = ({ isMulti, onChange, showLabel, defaultValue, ...props }) => {
    const { t, i18n } = useTranslation("global")


    const [value, setValue] = useState(defaultValue)


    const changeValue = (value) => {
        setValue(value);
        onChange(value);
    }

    useEffect(() => {
        setValue(defaultValue)
    }, [defaultValue])

    const languageOptions = LANGUAGES

    return (
        <Box my={1} {...props}>
            <SearchSelect options={languageOptions} value={value} isMulti={isMulti} label={showLabel ? t('language') : null} onChange={(value) => changeValue(value)} />
        </Box>
    )
}

export default SearchSelectLanguage
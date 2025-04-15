import React from 'react'
import SearchSelect from './search-select.js';
import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { LANGUAGES } from '../../utils/constants.js';
import { useTranslation } from 'react-i18next';

const SearchSelectLanguage = ({ isMulti, onChange, showLabel, defaultValue, ...props }) => {
    const { t, i18n } = useTranslation("global")


    const [value, setValue] = useState(defaultValue)
    const [languagesOptions, setLanguagesOptions] = useState(LANGUAGES)

    useEffect(() => {
        const withLabels = LANGUAGES.map(language => {
            return {
                value: language.value,
                label: t(language.value)
            }
        })
        setLanguagesOptions(withLabels)
    }, [languagesOptions, LANGUAGES])


    const changeValue = (value) => {
        setValue(value);
        onChange(value);
    }

    useEffect(() => {
        setValue(defaultValue)
    }, [defaultValue])


    return (
        <Box my={1} {...props}>
            <SearchSelect options={languagesOptions} value={value} isMulti={isMulti} label={showLabel ? t('language') : null} onChange={(value) => changeValue(value)} />
        </Box>
    )
}

export default SearchSelectLanguage
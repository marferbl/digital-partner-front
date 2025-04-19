import React from 'react'
import SearchSelect from './search-select.js';
import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { COUNTRIES } from '../../utils/constants';
import { useTranslation } from "react-i18next";


const SearchSelectCountries = ({ isMulti, onChange, showLabel, defaultValue, theme = 'light', ...props }) => {
    const { t } = useTranslation("global")
    const [value, setValue] = useState(defaultValue || null)
    const [countriesOptions, setCountriesOptions] = useState(COUNTRIES)

    useEffect(() => {
        const withLabels = COUNTRIES.map(country => {
            return {
                value: country.value,
                label: t(country.value)
            }
        })
        setCountriesOptions(withLabels)
    }, [COUNTRIES])


    useEffect(() => {
        setValue(defaultValue)
    }, [defaultValue])

    const changeValue = (value) => {
        setValue(value);
        onChange(value);
    }


    return (
        <Box my={1} {...props}>
            <SearchSelect options={countriesOptions} value={value} isMulti={isMulti} theme={theme} label={showLabel ? t('country') : null} onChange={(value) => changeValue(value)} />
        </Box>
    )
}

export default SearchSelectCountries
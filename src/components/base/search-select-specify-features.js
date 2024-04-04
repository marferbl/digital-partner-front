import React from 'react'
import SearchSelect from './search-select.js';
import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { COUNTRIES } from '../../utils/constants';
import { SPECIFY_FEATURES } from '../../utils/constants';


const SearchSelectSpecifyFeatures = ({ feature, defaultValue, onChange, props, showLabel }) => {

    console.log(feature)

    const [value, setValue] = useState(defaultValue || null)
    const [options, setOptions] = useState([])

    useEffect(() => {
        if (!defaultValue) setValue(null)
    }, [defaultValue])

    useEffect(() => {
        setFilteredQuestions()
    }, [feature])


    const changeValue = (value) => {
        console.log(value)
        setValue(value);
        onChange(value);
    }

    const setFilteredQuestions = () => {
        const filtered = []
        feature.forEach(f => {
            SPECIFY_FEATURES[f].forEach(s => {
                filtered.push(s)
            })
        })
        setOptions(filtered)
    }

    return (
        <Box my={1} {...props}>
            <SearchSelect options={options} value={value} isMulti label={showLabel ? 'Funcionalidad' : null} onChange={(value) => changeValue(value)} />
        </Box>
    )
}

export default SearchSelectSpecifyFeatures
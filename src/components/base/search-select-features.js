import React from 'react'
import SearchSelect from './search-select.js';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';

const SearchSelectFeatures = ({ isMulti, onChange, defaultValue, showLabel, ...props }) => {

    const [value, setValue] = useState(null)

    const featureOptions = [
        { value: 'rrhh', label: 'RRHH' },
        { value: 'sellmarketing', label: 'Ventas y marketing' },
        { value: 'finance', label: 'Finanzas y contabilidad' },
        { value: 'logistics', label: 'Cadena de suministro' },
        { value: 'it', label: 'IT' },
        { value: 'data', label: 'Data' },
        { value: 'law', label: 'Legal' },
        { value: 'transversal', label: 'Transversal' },
    ];

    const changeValue = (value) => {
        setValue(value);
        onChange(value);
    }

    console.log(value)
    return (
        <Box my={1} {...props}>
            <SearchSelect options={featureOptions} value={value} label={showLabel ? 'Funcionalidad' : null} isMulti={isMulti} onChange={(value) => changeValue(value)} defaultValue={defaultValue} />
        </Box>
    )
}

export default SearchSelectFeatures
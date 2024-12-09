import React from 'react'
import SearchSelect from './search-select.js';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const SearchSelectFeatures = ({ isMulti, onChange, defaultValue, showLabel, ...props }) => {
    const { t } = useTranslation('global')

    const [value, setValue] = useState(null)

    const featureOptions = [
        { value: 'rrhh', label: t('rrhh')},
        { value: 'sellmarketing', label: t('sellmarketing') },
        { value: 'finance', label: t('finance') },
        { value: 'logistics', label: t('logistics') },
        { value: 'it', label: t('it')},
        { value: 'data', label: t('data') },
        { value: 'law', label: t('law') },
        { value: 'transversal', label: t('transversal') },
    ];

    const changeValue = (value) => {
        setValue(value);
        onChange(value);
    }

    return (
        <Box my={1} {...props}>
            <SearchSelect options={featureOptions} value={value} label={showLabel ? t('feature') : null} isMulti={isMulti} onChange={(value) => changeValue(value)} defaultValue={defaultValue} />
        </Box>
    )
}

export default SearchSelectFeatures
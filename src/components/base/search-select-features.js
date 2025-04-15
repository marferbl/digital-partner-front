import React from 'react'
import SearchSelect from './search-select.js';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const SearchSelectFeatures = ({ isMulti, onChange, defaultValue, showLabel, ...props }) => {
    const { t } = useTranslation('global')

    const [value, setValue] = useState(null)

    const featureOptions = [
        { value: 'data', label: t('data') },
        { value: 'finance', label: t('finance') },
        { value: 'it', label: t('it') },
        { value: 'law', label: t('law') },
        { value: 'logistics', label: t('logistics') },
        { value: 'rrhh', label: t('rrhh') },
        { value: 'sellmarketing', label: t('sellmarketing') },
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
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Text } from '@chakra-ui/react';
import { COLORS } from '../../colors/colors';

export default function SearchSelect({ options, isMulti, onChange, searchable, value, label, disabled, ...props }) {
    const [selectedOption, setSelectedOption] = useState(null);


    useEffect(() => {
        if (value) {
            const selected = isMulti
                ? options.filter(option => value.includes(option.value))
                : typeof value !== 'string' ? options.find(option => option.value === value[0]) : options.find(option => option.value === value);
            setSelectedOption(selected);
        } else {
            setSelectedOption(null);
        }
    }, [value, isMulti, options]);

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        if (onChange) {
            onChange(isMulti ? selectedOption.map(option => option.value) : selectedOption.value);
        }
    };

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            fontSize: 14,
            color: state.isSelected ? 'white' : 'black',
            backgroundColor: state.isSelected ? COLORS.secondary : 'white',
            '&:hover': {
                backgroundColor: 'aliceblue',
                cursor: 'pointer',
            },
        }),
        singleValue: (provided) => ({
            ...provided,
            padding: 3,
            borderRadius: 5,
            width: 'fit-content',
            color: COLORS.secondary,
        }),
    };

    return (
        <div style={{ width: '100%', ...props }}>
            {label && <Text fontSize={12}>{label}</Text>}
            <Select
                value={selectedOption}
                onChange={handleSelectChange}
                options={options}
                isMulti={isMulti}
                placeholder={'Seleccionar'}
                isSearchable={searchable}
                styles={customStyles}
                disabled={disabled}
                noOptionsMessage={() => "Sin resultados"}
            />
        </div>
    );
}

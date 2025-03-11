import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Text } from '@chakra-ui/react';
import { COLORS } from '../../colors/colors';

export default function SearchSelect({
    options,
    isMulti,
    onChange,
    searchable,
    value,
    label,
    disabled,
    placeholder,
    theme = 'light', // New prop for theme
    ...props
}) {
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
        control: (provided) => ({
            ...provided,
            backgroundColor: theme === 'dark' ? 'black' : 'white',
            borderColor: theme === 'dark' ? '#898989' : '#ccc',
            color: theme === 'dark' ? 'gray' : 'black',
            '&:hover': {
                borderColor: theme === 'dark' ? 'gray' : '#aaa',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            fontSize: 14,
            color: state.isSelected
                ? theme === 'dark' ? 'black' : 'white'
                : theme === 'dark' ? '#898989' : 'black',
            backgroundColor: state.isSelected
                ? theme === 'dark' ? 'white' : COLORS.secondary
                : theme === 'dark' ? 'black' : 'white',
            '&:hover': {
                backgroundColor: theme === 'dark' ? 'gray' : 'aliceblue',
                cursor: 'pointer',
                color: theme === 'dark' ? 'black' : 'black',
            },
        }),
        singleValue: (provided) => ({
            ...provided,
            padding: 3,
            borderRadius: 5,
            width: 'fit-content',
            color: theme === 'dark' ? 'white' : COLORS.secondary,
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: theme === 'dark' ? 'black' : 'white',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: theme === 'dark' ? 'gray' : 'gray',
        }),
    };

    return (
        <div style={{ width: '100%', ...props }}>
            {label && <Text fontSize={12} color={theme === 'dark' ? 'white' : 'black'}>{label}</Text>}
            <Select
                value={selectedOption}
                onChange={handleSelectChange}
                options={options}
                isMulti={isMulti}
                placeholder={placeholder || 'Seleccionar'}
                isSearchable={searchable}
                styles={customStyles}
                isDisabled={disabled} // Fix prop name
                noOptionsMessage={() => "Sin resultados"}
            />
        </div>
    );
}

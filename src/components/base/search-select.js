import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Text } from '@chakra-ui/react';
import { COLORS } from '../../colors/colors';

export default function SearchSelect({ options, isMulti, onChange, searchable, value, label, disabled, ...props }) {
    const [selectedOption, setSelectedOption] = useState(value ? options.find(e => e.value === value) : null);

    useEffect(() => {
        if (!value) setSelectedOption(null)
    }, [value])



    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        // Call the onChange function passed from parent component
        if (onChange) {
            if (isMulti) {
                if (selectedOption) {
                    onChange(selectedOption.map(e => e.value));
                } else {
                    onChange([]);
                }
            }
            else {
                onChange(selectedOption.value);

            }
        }
    };

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            fontSize: 14,
            color: 'black',
            backgroundColor: state.isSelected ? COLORS.secondary : 'white',

        }),
        singleValue: (provided, state) => ({
            ...provided,
            padding: 3,
            borderRadius: 5,
            width: 'fit-content',
            color: COLORS.secondary,
            // Add other styles as needed
        }),
    }

    return (
        <div className="App" style={{ width: '100%', ...props }} >
            {label && <Text fontSize={12}>{label}</Text>
            }
            <Select
                value={selectedOption}
                onChange={handleSelectChange}
                options={options}
                isMulti={isMulti}
                placeholder={'Seleccionar'}
                isSearchable={searchable}
                styles={customStyles}
                disabled={disabled}
            />
        </div >
    );
}
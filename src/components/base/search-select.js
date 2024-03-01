import React, { useState } from 'react';
import Select from 'react-select';

export default function SearchSelect({ options, isMulti, onChange, searchable }) {
    const [selectedOption, setSelectedOption] = useState(null);

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
    return (
        <div className="App" style={{ width: '100%' }}>
            <Select
                value={selectedOption}
                onChange={handleSelectChange}
                options={options}
                isMulti={isMulti}
                placeholder={'Seleccionar'}
                isSearchable={searchable}
            />
        </div>
    );
}

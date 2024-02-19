import React, { useState } from 'react';
import Select from 'react-select';

export default function SearchSelect({ options, isMulti, onChange }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        // Call the onChange function passed from parent component
        if (onChange) {
            onChange(selectedOption);
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
            />
        </div>
    );
}

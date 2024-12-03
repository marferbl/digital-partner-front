import React, { useState } from 'react';

function CustomRadioButtonGroup({ options, onChange }) {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleChange = (value) => {
        setSelectedValue(value);
        onChange(value); // Emits the selected value to parent
    };

    return (
        <div className="flex flex-col gap-2">
            {options.map((option, index) => (
                <label key={index} className="flex items-center cursor-pointer gap-6">
                    <span className="text-gray-700 w-40">{option.label}</span>
                    <input
                        type="radio"
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={() => handleChange(option.value)}
                        className="hidden"
                    />
                    <div
                        className={`w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center mr-2 
              ${selectedValue === option.value ? 'bg-gray-200' : 'bg-white'}`}
                    >
                       
                    </div>
                </label>
            ))}
        </div>
    );
}

export default CustomRadioButtonGroup;
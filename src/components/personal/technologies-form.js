import React, { useEffect, useState } from "react";

const TechnologyForm = ({ value = [], onChange }) => {
    const [technologies, setTechnologies] = useState(value);

    useEffect(() => {
        setTechnologies(value);
    }, [value]);


    // Handle input changes
    const handleInputChange = (index, field, newValue) => {
        const updatedTechnologies = [...technologies];
        updatedTechnologies[index][field] = newValue;
        setTechnologies(updatedTechnologies);
        onChange(updatedTechnologies); // Notify parent
    };

    // Add new technology entry
    const addTechnology = () => {
        const newEntry = {
            name: "",
            personal: false,
            profesional: false,
            certification: false,
        };
        const updatedTechnologies = [...technologies, newEntry];
        setTechnologies(updatedTechnologies);
        onChange(updatedTechnologies); // Notify parent
    };

    // Remove technology entry
    const removeTechnology = (index) => {
        const updatedTechnologies = technologies.filter((_, i) => i !== index);
        setTechnologies(updatedTechnologies);
        onChange(updatedTechnologies); // Notify parent
    };

    return (
        <div className="space-y-6">
            {technologies.map((entry, index) => (
                <div
                    key={index}
                    className="p-4 rounded-lg bg-neutralblack text-white space-y-4"
                >
                    {/* Header with delete icon */}
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-lg">{''}</h3>
                        <button
                            type="button"
                            onClick={() => removeTechnology(index)}
                            className="text-gray-500 hover:text-red-500"
                        >
                            🗑️
                        </button>
                    </div>

                    {/* Name */}
                    <div>
                        <label htmlFor={`name-${index}`} className="block mb-1">
                            Nombre del programa o tecnología
                        </label>
                        <input
                            id={`name-${index}`}
                            type="text"
                            value={entry.name}
                            onChange={(e) =>
                                handleInputChange(index, "name", e.target.value)
                            }
                            className="w-full p-2 rounded-lg bg-black text-white border-1 border-neutral"
                            placeholder="Añadir.."
                        />
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <input
                                id={`personal-${index}`}
                                type="checkbox"
                                checked={entry.personal}
                                onChange={(e) =>
                                    handleInputChange(
                                        index,
                                        "personal",
                                        e.target.checked
                                    )
                                }
                                className="rounded-md text-neutral-700"
                            />
                            <label
                                htmlFor={`personal-${index}`}
                                className="text-gray-400"
                            >
                                Uso personal
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                id={`profesional-${index}`}
                                type="checkbox"
                                checked={entry.profesional}
                                onChange={(e) =>
                                    handleInputChange(
                                        index,
                                        "profesional",
                                        e.target.checked
                                    )
                                }
                                className="rounded-md text-neutral-700"
                            />
                            <label
                                htmlFor={`profesional-${index}`}
                                className="text-gray-400"
                            >
                                Uso profesional
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                id={`certification-${index}`}
                                type="checkbox"
                                checked={entry.certification}
                                onChange={(e) =>
                                    handleInputChange(
                                        index,
                                        "certification",
                                        e.target.checked
                                    )
                                }
                                className="rounded-md text-neutral-700"
                            />
                            <label
                                htmlFor={`certification-${index}`}
                                className="text-gray-400"
                            >
                                Tengo certificación
                            </label>
                        </div>
                    </div>


                </div>
            ))}

            {/* Add Button */}
            <button
                type="button"
                onClick={addTechnology}
                className="flex items-center gap-2 hover:text-gray-400 text-white"
            >
                + Añadir tecnología
            </button>
        </div>
    );
};

export default TechnologyForm;

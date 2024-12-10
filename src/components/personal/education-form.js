import React, { useEffect, useState } from "react";

const EducationForm = ({ value = [], onChange }) => {
    const [education, setEducation] = useState(value);

    useEffect(() => {
        setEducation(value);
    }, [value]);

    // Handle input changes
    const handleInputChange = (index, field, newValue) => {
        const updatedEducation = [...education];
        updatedEducation[index][field] = newValue;
        setEducation(updatedEducation);
        onChange(updatedEducation); // Notify parent
    };

    // Add new education entry
    const addEducation = () => {
        const newEntry = {
            name: "",
            entity: "",
            start: "",
            end: "",
            description: "",
            isCurrent: false,
        };
        const updatedEducation = [...education, newEntry];
        setEducation(updatedEducation);
        onChange(updatedEducation); // Notify parent
    };

    // Remove education entry
    const removeEducation = (index) => {
        const updatedEducation = education.filter((_, i) => i !== index);
        setEducation(updatedEducation);
        onChange(updatedEducation); // Notify parent
    };

    return (
        <div className="space-y-6">
            {education.map((entry, index) => (
                <div
                    key={index}
                    className="p-4 rounded-lg bg-neutral-900 text-white space-y-4 bg-neutralblack"
                >
                    {/* Header with delete icon */}
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-lg">{''}</h3>
                        <button
                            type="button"
                            onClick={() => removeEducation(index)}
                            className="text-gray-500 hover:text-red-500"
                        >
                            🗑️
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            {/* Name */}
                            <div className="mb-2">
                                <label htmlFor={`name-${index}`} className="block mb-1">
                                    Titulación
                                </label>
                                <input
                                    id={`name-${index}`}
                                    type="text"
                                    value={entry.name}
                                    onChange={(e) =>
                                        handleInputChange(index, "name", e.target.value)
                                    }
                                    className="w-full p-2 rounded-lg bg-black text-white focus:ring-2 focus:ring-neutral-700 border-1 border-neutral"
                                    placeholder="Grado en Administración y Dirección..."
                                />
                            </div>

                            {/* Entity */}
                            <div className="flex gap-3 items-center w-full">
                                <div className="flex-1">
                                    <label
                                        htmlFor={`entity-${index}`}
                                        className="block mb-1"
                                    >
                                        Entidad
                                    </label>
                                    <input
                                        id={`entity-${index}`}
                                        type="text"
                                        value={entry.entity}
                                        onChange={(e) =>
                                            handleInputChange(
                                                index,
                                                "entity",
                                                e.target.value
                                            )
                                        }
                                        className="w-full p-2 rounded-lg bg-black text-white focus:ring-2 focus:ring-neutral-700 border-1 border-neutral"
                                        placeholder="Universidad Politécnica de..."
                                    />
                                </div>

                                {/* Dates */}
                                <div className="flex gap-1 w-36">
                                    {/* Start Date */}
                                    <div className="w-1/2">
                                        <label
                                            htmlFor={`start-${index}`}
                                            className="block mb-1"
                                        >
                                            Inicio
                                        </label>
                                        <input
                                            id={`start-${index}`}
                                            type="number"
                                            value={entry.start}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    index,
                                                    "start",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="2020"
                                            className="w-full p-2 rounded-lg bg-black text-white focus:ring-2 focus:ring-neutral-700 border-1 border-neutral"
                                        />
                                    </div>

                                    {/* End Date */}
                                    {!entry.isCurrent && (
                                        <div className="w-1/2">
                                            <label
                                                htmlFor={`end-${index}`}
                                                className="block mb-1"
                                            >
                                                Final
                                            </label>
                                            <input
                                                id={`end-${index}`}
                                                type="number"
                                                value={entry.end}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        index,
                                                        "end",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="2024"
                                                className="w-full p-2 rounded-lg bg-black text-white focus:ring-2 focus:ring-neutral-700 border-1 border-neutral"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label
                                htmlFor={`description-${index}`}
                                className="block mb-1"
                            >
                                Descripción
                            </label>
                            <textarea
                                id={`description-${index}`}
                                value={entry.description}
                                onChange={(e) =>
                                    handleInputChange(
                                        index,
                                        "description",
                                        e.target.value
                                    )
                                }
                                rows="3"
                                maxLength={240}
                                className="w-full p-2 rounded-lg bg-black text-white focus:ring-2 focus:ring-neutral-700 border-1 border-neutral"
                                placeholder="Describe tu experiencia aquí..."
                            />
                            <div className="text-right text-sm text-gray-500">
                                {entry.description.length} / 240 caracteres
                            </div>
                        </div>
                    </div>

                </div>
            ))}

            {/* Add Button */}
            <button
                type="button"
                onClick={addEducation}
                className="flex items-center gap-2 hover:text-gray-400 text-white"
            >
                + Añadir formación
            </button>
        </div>
    );
};

export default EducationForm;

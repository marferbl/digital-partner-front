import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageForm = ({ value = [], onChange }) => {
    const { t } = useTranslation('global');
    const [languages, setLanguages] = useState(value);

    useEffect(() => {
        setLanguages(value);
    }, [value]);

    // Handle input changes
    const handleInputChange = (index, field, newValue) => {
        const updatedLanguages = [...languages];
        updatedLanguages[index][field] = newValue;
        setLanguages(updatedLanguages);
        onChange(updatedLanguages); // Notify parent
    };

    // Add new language entry
    const addLanguage = () => {
        const newEntry = {
            name: "",
            level: "native", // Default level
        };
        const updatedLanguages = [...languages, newEntry];
        setLanguages(updatedLanguages);
        onChange(updatedLanguages); // Notify parent
    };

    // Remove language entry
    const removeLanguage = (index) => {
        const updatedLanguages = languages.filter((_, i) => i !== index);
        setLanguages(updatedLanguages);
        onChange(updatedLanguages); // Notify parent
    };

    return (
        <div className="space-y-6">
            {languages.map((entry, index) => (
                <div
                    key={index}
                    className="p-4 rounded-lg bg-neutral-900 text-white space-y-4 bg-neutralblack"
                >
                    {/* Header with delete icon */}
                    <div className="flex justify-between items-center">
                        <span></span>
                        <button
                            type="button"
                            onClick={() => removeLanguage(index)}
                            className="text-gray-500 hover:text-red-500"
                        >
                            🗑️
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-80">
                            <label htmlFor={`name-${index}`} className="block mb-1 pl-1">
                                Idioma
                            </label>
                            <input
                                id={`name-${index}`}
                                type="text"
                                value={entry.name}
                                onChange={(e) =>
                                    handleInputChange(index, "name", e.target.value)
                                }
                                className="w-full p-2 rounded-lg bg-black text-white focus:ring-2 focus:ring-neutral-700 border-1 border-neutral"
                                placeholder="Nombre del idioma..."
                            />
                        </div>

                        {/* Level */}
                        <div className="w-40">
                            <label htmlFor={`level-${index}`} className="block mb-1">
                                Nivel
                            </label>
                            <select
                                id={`level-${index}`}
                                value={entry.level}
                                onChange={(e) =>
                                    handleInputChange(index, "level", e.target.value)
                                }
                                className="w-full p-2 rounded-lg bg-black text-white focus:ring-2 focus:ring-neutral-700 border-1 border-neutral"
                            >
                                <option value="native">{t('native')}</option>
                                <option value="advanced">{t('advanced')}</option>
                                <option value="medium">{t('medium')}</option>
                                <option value="basic">{t('basic')}</option>
                            </select>
                        </div>
                    </div>
                </div>
            ))}

            {/* Add Button */}
            <button
                type="button"
                onClick={addLanguage}
                className="flex items-center gap-2 hover:text-gray-400 text-white "
            >
                + Añadir idioma
            </button>
        </div>
    );
};

export default LanguageForm;

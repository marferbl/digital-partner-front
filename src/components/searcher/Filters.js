import React, { useState, useEffect } from 'react';
import SearchSelectCountries from '../base/search-select-countries';
import SearchSelectLanguage from '../base/search-select-language';
import SearchSelectFeatures from '../base/search-select-features';
import SearchSelect from '../base/search-select';
import SearchSelectSpecifyFeatures from '../base/search-select-specify-features';
import CustomRadioButtonGroup from '../base/radio-group';

const FiltersSection = ({ filters, setTermLabel, onChangeFilters }) => {
    const [filterValues, setFilterValues] = useState(filters);

    const handleToggle = (filterName, value) => {
        setFilterValues((prevValues) => ({
            ...prevValues,
            [filterName]: value,
        }));
        onChangeFilters(filterValues);
    };

    useEffect(() => {
        setTermLabel('');
        onChangeFilters(filterValues);
    }, [filterValues]);

    const clearFilters = () => {
        setFilterValues({});
        setTermLabel('');
    };

    const hasFilters = Object.values(filterValues).some((value) => value !== '');

    const OPTIONS_TYPE = [{ value: 'solutions', label: 'Soluciones' }, { value: 'services', label: 'Servicios' }, { value: 'events', label: 'Eventos' }]

    const handlePrice = (value) => {
        handleToggle('price', value);
        const priceRanges = { 0: [0, 0], 10: [1, 10], 50: [11, 50], 100: [51, 100], 5000: [101, 5000] };
        const [min, max] = priceRanges[value] || [null, null];
        handleToggle('min', min);
        handleToggle('max', max);
    };

    return (
        <div className="border-r h-fit-content bg-gray-50 p-4 shadow-2xl rounded-lg">
            <span className="text-lg font-bold pt-5">Filtros</span>
            <div className="flex flex-col space-y-4 mt-6">
                {/* <div className="min-w-[140px] pt-1">
                    <SearchSelect
                        size="small"
                        options={[{ value: 'solutions', label: 'Soluciones' }, { value: 'services', label: 'Servicios' }, { value: 'events', label: 'Eventos' }]}
                        width="100%"
                        label="Línea"
                        onChange={(value) => handleToggle('lineType', value)}
                        value={filterValues.lineType}
                    />
                </div> */}

                <CustomRadioButtonGroup options={OPTIONS_TYPE} onChange={(value) => handleToggle('lineType', value)} />

                {filterValues.lineType === 'solutions' && (
                    <>
                        <div className="min-w-[140px]">
                            <SearchSelectFeatures
                                value={filterValues.features}
                                showLabel
                                width="100%"
                                isMulti
                                onChange={(value) => handleToggle('features', value)}
                            />
                        </div>
                        {filterValues.features?.length > 0 && (
                            <div className="min-w-[140px]">
                                <SearchSelectSpecifyFeatures
                                    value={filterValues.specifyFeatures}
                                    showLabel
                                    width="100%"
                                    label="Funcionalidad especifica"
                                    feature={filterValues.features}
                                    onChange={(value) => handleToggle('specifyFeatures', value)}
                                />
                            </div>
                        )}
                    </>
                )}

                {filterValues.lineType === 'services' && (
                    <div className="min-w-[140px] pt-1">
                        <SearchSelect
                            options={[{ value: 'partner', label: 'Partner' }, { value: 'development', label: 'Desarrollo' }, { value: 'renting', label: 'Renting' }, { value: 'helps', label: 'Ayudas' }, { value: 'training', label: 'Training' }, { value: 'growth', label: 'Growth' }]}
                            width="100%"
                            label="Tipo"
                            onChange={(value) => handleToggle('serviceType', value)}
                            value={filterValues.serviceType}
                        />
                    </div>
                )}

                {filterValues.lineType === 'services' && filterValues.serviceType === 'partner' && (
                    <div className="min-w-[140px]">
                        <SearchSelect
                            options={[{ value: 'implant', label: 'Implantador' }, { value: 'selling', label: 'Venta' }, { value: 'training', label: 'Formación' }]}
                            isMulti
                            width="100%"
                            label="Servicio"
                            onChange={(value) => handleToggle('partnerType', value)}
                            value={filterValues.partnerType}
                            height="40px"
                        />
                    </div>
                )}

                {filterValues.lineType !== 'events' && (
                    <>
                        <div className="min-w-[140px]">
                            <SearchSelectCountries
                                value={filterValues.countries}
                                showLabel
                                width="100%"
                                isMulti
                                onChange={(value) => handleToggle('countries', Array.isArray(value) ? value : [value])}
                                defaultValue={filterValues.countries}
                            />
                        </div>
                        <div className="min-w-[140px]">
                            <SearchSelectLanguage
                                value={filterValues.languages}
                                showLabel
                                width="100%"
                                isMulti
                                onChange={(value) => handleToggle('languages', Array.isArray(value) ? value : [value])}
                                defaultValue={filterValues.languages}
                            />
                        </div>
                    </>
                )}

                {filterValues.lineType === 'events' && (
                    <div className="flex flex-col gap-4">
                        <div className="min-w-[140px] pt-1">
                            <SearchSelect options={[{ value: 0, label: 'Gratis' }, { value: 10, label: '1 - 10€' }, { value: 50, label: '11 - 50€' }, { value: 100, label: '51 - 100€' }, { value: 5000, label: '+100€' }]} width="100%" label="Precio" onChange={handlePrice} value={filterValues.price} />
                        </div>
                        <div className="min-w-[140px] pt-1">
                            <SearchSelect options={[{ value: 'remote', label: 'Remoto' }, { value: 'presential', label: 'Presencial' }, { value: 'all', label: 'Ambos' }]} width="100%" label="Tipo" onChange={(value) => handleToggle('eventType', value)} value={filterValues.eventType} />
                        </div>
                    </div>
                )}

                {hasFilters && (
                    <div className="min-w-[140px] pt-7">
                        <button className="text-neutral" onClick={clearFilters}>
                            Limpiar filtros
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FiltersSection;

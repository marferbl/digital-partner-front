import React, { useState, useEffect } from 'react';
import SearchSelectCountries from '../base/search-select-countries';
import SearchSelectLanguage from '../base/search-select-language';
import SearchSelectFeatures from '../base/search-select-features';
import SearchSelect from '../base/search-select';
import SearchSelectSpecifyFeatures from '../base/search-select-specify-features';
import CustomRadioButtonGroup from '../base/radio-group';
import { useTranslation } from 'react-i18next';
import SearchSelectPositions from '../base/search-select-positions';
import SearchSelectCities from '../base/search-select-cities';
const FiltersSection = ({ filters, setTermLabel, onChangeFilters }) => {
    const { t } = useTranslation("global");

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
        const currentLineType = filterValues.lineType;
        setFilterValues({});
        setFilterValues({ lineType: currentLineType });
        setTermLabel('');
        //handleToggle('lineType', 'solutions')
    };

    const hasFilters = Object.values(filterValues).some((value) => value !== '');

    const OPTIONS_TYPE = [
        { value: 'solutions', label: t('solutions') },
        { value: 'services', label: t('services') },
        { value: 'events', label: t('events') },
        // { value: 'freelance', label: t('talent'), key: 'talent' }
    ];

    const handlePriceCategory = (value) => {
        handleToggle('priceCategory', value);
        if (value === 'free') {
            handleToggle('min', 0);
            handleToggle('max', 0);
            handleToggle('price', null);
        } else {
            handleToggle('min', 1);
            handleToggle('max', null);
        }
    };

    const handlePriceRange = (value) => {
        handleToggle('price', value);
        const priceRanges = {
            10: [1, 10],
            50: [11, 50],
            100: [51, 100],
            5000: [101, 5000],
        };
        const [min, max] = priceRanges[value] || [null, null];
        handleToggle('min', min);
        handleToggle('max', max);
    };

    const handleCityChange = (city) => {
        handleToggle('city', city);
    };


    return (
        <div className="border-r h-fit-content bg-gray-50 p-4 shadow-2xl rounded-lg">
            <span className="text-lg font-bold pt-5">{t('filtersKey')}</span>
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

                <CustomRadioButtonGroup options={OPTIONS_TYPE} onChange={(value) => handleToggle('lineType', value)} defaultValue={filterValues.lineType} />

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
                                    label={t('specifyFeature')}
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
                            options={[
                                { value: 'partner', label: t('partner') },
                                { value: 'development', label: t('development') },
                                { value: 'renting', label: t('renting') },
                                { value: 'helps', label: t('helps') },
                                { value: 'training', label: t('training') },
                                { value: 'growth', label: t('growth') }
                            ]}
                            width="100%"
                            label={t('type')}
                            onChange={(value) => handleToggle('serviceType', value)}
                            value={filterValues.serviceType}
                        />
                    </div>
                )}

                {filterValues.lineType === 'services' && filterValues.serviceType === 'partner' && (
                    <div className="min-w-[140px]">
                        <SearchSelect
                            options={[
                                { value: 'implant', label: t('filters.partner.implant') },
                                { value: 'selling', label: t('filters.partner.selling') },
                                { value: 'training', label: t('filters.partner.training') }
                            ]}
                            isMulti
                            width="100%"
                            label={t('filters.service')}
                            onChange={(value) => handleToggle('partnerType', value)}
                            value={filterValues.partnerType}
                            height="40px"
                        />
                    </div>
                )}

                {!['events', 'freelance'].includes(filterValues.lineType) && (
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
                            <SearchSelect
                                options={[
                                    { value: 'free', label: t('filters.price.free') },
                                    { value: 'paid', label: t('filters.price.paid') }
                                ]}
                                width="100%"
                                label={t('filters.price.title')}
                                onChange={handlePriceCategory}
                                value={filterValues.priceCategory}
                            />
                        </div>

                        {filterValues.priceCategory === 'paid' && (
                            <div className="min-w-[140px] pt-1">
                                <SearchSelect
                                    options={[
                                        { value: 10, label: t('filters.priceRange.1to10') },
                                        { value: 50, label: t('filters.priceRange.11to50') },
                                        { value: 100, label: t('filters.priceRange.51to100') },
                                        { value: 5000, label: t('filters.priceRange.over100') }
                                    ]}
                                    width="100%"
                                    label={t('filters.priceRange.title')}
                                    onChange={handlePriceRange}
                                    value={filterValues.price}
                                />
                            </div>
                        )}

                        <div className="min-w-[140px] pt-1">
                            <SearchSelectCities
                                value={filterValues.city}
                                onChange={handleCityChange}
                                placeholder={t('filters.searchCity')}
                                emitFullObject={true}
                            />
                        </div>

                        <div className="min-w-[140px] pt-1">
                            <SearchSelect
                                options={[
                                    { value: 'remote', label: t('remote') },
                                    { value: 'presential', label: t('presential') },
                                    { value: 'all', label: t('filters.eventType.both') }
                                ]}
                                width="100%"
                                label={t('type')}
                                onChange={(value) => handleToggle('eventType', value)}
                                value={filterValues.eventType}
                            />
                        </div>
                    </div>
                )}

                {filterValues.lineType === 'freelance' && (
                    <>

                        <div className="min-w-[140px] pt-1">
                            <SearchSelectPositions showLabel onChange={(value) => handleToggle('job', value)} theme='light' />
                            <span className="text-xs">{t('filters.salaryRange')}</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                                {/* Input 1 */}
                                <input
                                    type="number"
                                    className="w-full px-2 py-2 border-1 border-neutral rounded"
                                    value={filterValues.salaryMin}
                                    placeholder={'30000'}
                                    onChange={(e) => handleToggle('salaryMin', e.target.value)}
                                />

                                {/* Input 2 */}
                                <input
                                    type="number"
                                    className="w-full px-2 py-2 border rounded border-1 border-neutral"
                                    value={filterValues.salaryMax}
                                    placeholder={'50000'}
                                    onChange={(e) => handleToggle('salaryMax', e.target.value)}
                                />
                            </div>
                        </div>
                    </>
                )}

                {hasFilters && (
                    <div className="min-w-[140px] pt-7">
                        <button className="text-neutral" onClick={clearFilters}>
                            {t('clearFilters')}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FiltersSection;

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
import DatePicker from 'react-datepicker';
import { DEPLOYMENT_OPTIONS, INTEGRATION_OPTIONS, SUPPORT_OPTIONS, HIRING_OPTIONS } from '../../utils/constants';
import 'react-datepicker/dist/react-datepicker.css';
import { FaSortAlphaDown } from 'react-icons/fa';

const FiltersSection = ({ filters, setTermLabel, onChangeFilters }) => {
    const { t } = useTranslation("global");

    const [filterValues, setFilterValues] = useState(filters);
    const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);

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

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOrderDropdownOpen && !event.target.closest('.relative')) {
                setIsOrderDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOrderDropdownOpen]);

    const clearFilters = () => {
        const currentLineType = filterValues.lineType;
        setFilterValues({});
        setFilterValues({ lineType: currentLineType });
        setTermLabel('');
        // Clear date filters as well
        handleToggle('from', null);
        handleToggle('to', null);
        // Clear new solution filters
        handleToggle('deployment', []);
        handleToggle('integration', []);
        handleToggle('support', []);
        // Clear service filters
        handleToggle('hiring', '');
        // Clear ordering
        handleToggle('orderBy', 'createdAt');
        handleToggle('orderValue', 'desc');
        //handleToggle('lineType', 'solutions')
    };

    const handleOrderChange = (orderBy, orderValue) => {
        handleToggle('orderBy', orderBy);
        handleToggle('orderValue', orderValue);
        setIsOrderDropdownOpen(false);
    };

    const getOrderLabel = () => {
        if (filterValues.orderBy && filterValues.orderValue) {
            const orderByLabel = filterValues.orderBy === 'name' ? 'Alfabético' : 'Fecha de creación';
            const orderValueLabel = filterValues.orderValue === 'asc' ? 'ASC' : 'DESC';
            return `${orderByLabel} ${orderValueLabel}`;
        }
        return 'Ordenar por';
    };

    const hasFilters = Object.values(filterValues).some((value) => value !== '' && value !== null);

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

    const handleDateChange = (startDate, endDate) => {
        handleToggle('from', startDate ? startDate.toISOString() : null);
        handleToggle('to', endDate ? endDate.toISOString() : null);
    };


    return (
        <div className="border-r h-fit-content bg-gray-50 p-4 shadow-2xl rounded-lg">
            <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold pt-5">{t('filtersKey')}</span>
                <div className="relative pt-5">
                    <button
                        onClick={() => setIsOrderDropdownOpen(!isOrderDropdownOpen)}
                        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >

                        {/* <span className="text-xs">{getOrderLabel()}</span> */}
                        {/* <svg className={`w-4 h-4 transition-transform ${isOrderDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg> */}
                        <FaSortAlphaDown />
                    </button>

                    {isOrderDropdownOpen && (
                        <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                            <div className="py-1">
                                <button
                                    onClick={() => handleOrderChange('name', 'asc')}
                                    className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-xxs text-right ${filterValues.orderBy === 'name' && filterValues.orderValue === 'asc' ? 'bg-pink-500 text-white' : ''}`}
                                >
                                    Alfabético ASC
                                </button>
                                <button
                                    onClick={() => handleOrderChange('name', 'desc')}
                                    className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-xxs text-right ${filterValues.orderBy === 'name' && filterValues.orderValue === 'desc' ? 'bg-pink-500 text-white' : ''}`}
                                >
                                    Alfabético DESC
                                </button>
                                <button
                                    onClick={() => handleOrderChange('createdAt', 'asc')}
                                    className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-xxs text-right ${filterValues.orderBy === 'createdAt' && filterValues.orderValue === 'asc' ? 'bg-pink-500 text-white' : ''}`}
                                >
                                    Fecha de creación ASC
                                </button>
                                <button
                                    onClick={() => handleOrderChange('createdAt', 'desc')}
                                    className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-xxs text-right ${filterValues.orderBy === 'createdAt' && filterValues.orderValue === 'desc' ? 'bg-pink-500 text-white' : ''}`}
                                >
                                    Fecha de creación DESC
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
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

                        <div className="min-w-[140px]">
                            <SearchSelect
                                options={DEPLOYMENT_OPTIONS}
                                value={filterValues.deployment}
                                showLabel
                                width="100%"
                                label="Despliegue"
                                isMulti
                                onChange={(value) => handleToggle('deployment', Array.isArray(value) ? value : [value])}
                            />
                        </div>

                        <div className="min-w-[140px]">
                            <SearchSelect
                                options={INTEGRATION_OPTIONS}
                                value={filterValues.integration}
                                showLabel
                                width="100%"
                                label="Integración"
                                isMulti
                                onChange={(value) => handleToggle('integration', Array.isArray(value) ? value : [value])}
                            />
                        </div>

                        <div className="min-w-[140px]">
                            <SearchSelect
                                options={SUPPORT_OPTIONS}
                                value={filterValues.support}
                                showLabel
                                width="100%"
                                label="Soporte"
                                isMulti
                                onChange={(value) => handleToggle('support', Array.isArray(value) ? value : [value])}
                            />
                        </div>
                    </>
                )}

                {filterValues.lineType === 'services' && (
                    <div className="min-w-[140px] pt-1">
                        <SearchSelect
                            options={[
                                { value: 'helps', label: t('helps') },
                                { value: 'development', label: t('development') },
                                { value: 'training', label: t('training') },
                                { value: 'growth', label: t('growth') },
                                { value: 'partner', label: t('partner') },
                                { value: 'renting', label: t('renting') },
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

                {filterValues.lineType === 'services' && (
                    <div className="min-w-[140px]">
                        <SearchSelect
                            options={HIRING_OPTIONS}
                            value={filterValues.hiring}
                            showLabel
                            width="100%"
                            label="Contratación"
                            onChange={(value) => handleToggle('hiring', value)}
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

                        <div className="min-w-[140px] pt-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                {t('filters.dateRange', 'Rango de fechas')}
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                <DatePicker
                                    selected={filterValues.from ? new Date(filterValues.from) : null}
                                    onChange={(date) => handleDateChange(date, filterValues.to ? new Date(filterValues.to) : null)}
                                    selectsStart
                                    startDate={filterValues.from ? new Date(filterValues.from) : null}
                                    endDate={filterValues.to ? new Date(filterValues.to) : null}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText={t('filters.startDate', 'Fecha inicio')}
                                    className="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <DatePicker
                                    selected={filterValues.to ? new Date(filterValues.to) : null}
                                    onChange={(date) => handleDateChange(filterValues.from ? new Date(filterValues.from) : null, date)}
                                    selectsEnd
                                    startDate={filterValues.from ? new Date(filterValues.from) : null}
                                    endDate={filterValues.to ? new Date(filterValues.to) : null}
                                    minDate={filterValues.from ? new Date(filterValues.from) : null}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText={t('filters.endDate', 'Fecha fin')}
                                    className="w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
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

import { Center, Box, Text, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../../colors/colors'
import { getDistinctCities } from '../../services/event'
import SearchSelect from './search-select'

const SearchSelectCities = ({ term, value, onChange, placeholder, emitFullObject }) => {
    const [cities, setCities] = useState([])
    const [selected, setSelected] = useState(value)

    useEffect(() => {
        getCities();
    }, []);


    useEffect(() => {
        setSelected(value)
    }, [value]);

    useEffect(() => {
        onChange(selected)
    }, [selected]);

    useEffect(() => {
        if (emitFullObject) {
            const object = cities.find((city) => city === selected)
            //getFullObject(object)
        }
    }, [selected]);

    const getCities = () => {
        getDistinctCities().then((res) => {
            setCities(res.data.cities);
        }).catch((error) => {
            console.log(error);
        });
    };

    const citiesKey = () => {
        return cities.map((city) => {
            return {
                value: city,
                label: city
            }
        })
    }

    return (
        <SearchSelect
            options={citiesKey()}
            value={selected}
            onChange={(value) => setSelected(value)}
            searchable
            placeholder={placeholder || "Selecciona una ciudad"}
            isClearable
        />
    )
}

export default SearchSelectCities 
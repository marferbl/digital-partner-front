import { Center, Box, Text, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { COLORS } from '../../colors/colors'
import { getAllServices, getServiceByUserCorporate } from '../../services/service'
import SearchSelect from './search-select'

const SearchSelectServices = ({ term, onChange, corporate, placeholder, emitFullObject, getFullObject }) => {
    const [services, setServices] = useState([])
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        getServices();
    }, [term]);

    useEffect(() => {
        onChange(selected)
    }, [selected]);

    useEffect(() => {
        if (emitFullObject) {
            const object = services.find((service) => service._id === selected)
            getFullObject(object)
        }
    }, [selected]);

    const getServices = () => {
        if (corporate) {
            getServiceByUserCorporate().then((res) => {
                setServices(res.data.services || res.data);
            }
            ).catch((error) => {
                console.log(error);
            }
            );
            return;
        }
        getAllServices(term).then((res) => {
            setServices(res.data.services || res.data);
        }
        ).catch((error) => {
            console.log(error);
        }
        );
    };

    const servicesKey = () => {
        return services.map((service) => {
            return {
                value: service._id, label: service.title
            }
        })
    }

    return (
        <SearchSelect options={servicesKey()} value={selected} onChange={(value) => setSelected(value)} searchable placeholder={placeholder} />
    )
}
export default SearchSelectServices 
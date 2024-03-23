import React from 'react'
import ReactCountryFlag from "react-country-flag"

const CountryFlag = ({ country }) => {

    const COUNTRY_KEYS = {
        'spain': 'ES',
        'united states': 'US',
        'mexico': 'MX',
        'argentina': 'AR',
        'colombia': 'CO',
        'chile': 'CL',
        'peru': 'PE',
        'venezuela': 'VE',
        'ecuador': 'EC',
        'guatemala': 'GT',
        'cuba': 'CU',
        'bolivia': 'BO',
        'dominican republic': 'DO',
        'honduras': 'HN',
        'france': 'FR',
        'italy': 'IT',
        'germany': 'DE',
        'england': 'GB',
    }
    return (
        <ReactCountryFlag countryCode={COUNTRY_KEYS[country]} />
    )
}

export default CountryFlag
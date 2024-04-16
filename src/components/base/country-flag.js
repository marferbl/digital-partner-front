import React from 'react'
import ReactCountryFlag from "react-country-flag"

const CountryFlag = ({ country }) => {

    const COUNTRY_KEYS = {
        'england': 'GB',
        'spain': 'ES',
        'france': 'FR',
        'italy': 'IT',
        'usa': 'US',
        'china': 'CN',
        'india': 'IN',
        'germany': 'DE',
        'japan': 'JP',
        'canada': 'CA',
        'australia': 'AU',
        'brazil': 'BR',
        'russia': 'RU',
        'mexico': 'MX',
        'south_korea': 'KR',
        'indonesia': 'ID',
        'turkey': 'TR',
        'netherlands': 'NL',
        'switzerland': 'CH',
        'argentina': 'AR',
        'saudi_arabia': 'SA',
        'south_africa': 'ZA',
        'egypt': 'EG',
        'nigeria': 'NG',
        'pakistan': 'PK',
        'iran': 'IR',
        'philippines': 'PH',
        'colombia': 'CO',
        'bangladesh': 'BD',
        'vietnam': 'VN'
    };

    return (
        <ReactCountryFlag countryCode={COUNTRY_KEYS[country]} />
    )
}

export default CountryFlag
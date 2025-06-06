import React, { useState, useRef, useEffect } from 'react';
import { Box, Input, Center } from '@chakra-ui/react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import {
    setKey,
    setDefaults,
    setLanguage,
    setRegion,
    fromAddress,
    fromLatLng,
    fromPlaceId,
    setLocationType,
    geocode,
    RequestType,
} from "react-geocode";

const MapSearcher = ({ onlyMap, onChange, defaultAddress, onChangeAddress, defaultCoordinates, height }) => {
    const [address, setAddress] = useState(defaultAddress || '');
    const [coordinates, setCoordinates] = useState(defaultCoordinates || { lat: 40.416775, lng: -3.703790 });

    setDefaults({
        key: process.env.REACT_APP_GOOGLE_MAPS, // Your API key here.
        language: "es", // Default language for responses.
        region: "es", // Default region for responses.
    });
    setLocationType("ROOFTOP");

    const transformAddress = (address) => {
        fromAddress(address)
            .then(({ results }) => {
                const { lat, lng } = results[0].geometry.location;
                setCoordinates({ lat, lng });

                // Extract address components
                const addressComponents = results[0].address_components;
                let city = '';

                // Find the city component
                for (const component of addressComponents) {
                    if (component.types.includes('locality')) {
                        city = component.long_name;
                        break;
                    }
                }
                onChange({ lat, lng, city });
                onChangeAddress(address);
            })
            .catch(console.error);
    }

    return (
        <div className="flex flex-col items-center py-2">
            {!onlyMap && <div className="flex items-center w-full max-w-md mb-4">
                <input
                    type="text"
                    placeholder="Dirección del evento"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none"
                />
                <button
                    onClick={() => transformAddress(address)}
                    className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
                >
                    Buscar
                </button>
            </div>}

            <div className="w-full max-w-md">
                <APIProvider
                    apiKey={process.env.REACT_APP_GOOGLE_MAPS}
                    libraries={['places']}
                >
                    <Map
                        center={coordinates}
                        className={`w-full ${height || 'h-96'}`}
                        defaultZoom={15}
                    >
                        <Marker position={coordinates} />
                    </Map>
                </APIProvider>
            </div>
        </div>
    );
};

export default MapSearcher;
